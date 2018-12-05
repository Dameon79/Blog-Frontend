import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'
import { MarkdownPreview } from 'react-marked-markdown'
import moment from 'moment'

import Layout from '../components/Layout'
import Comment from '../components/shared/Comment'
import CommentForm from '../components/shared/CommentForm'

class ArticlePage extends Component {
  constructor (props) {
    super(props)
    this.articleComment = this.articleComment.bind(this)

    this.addComment = gql`
      mutation addComment($slug: String!, $name: String!, $body: String!, $avatar: String!) {
        addComment(slug:$slug, name:$name, body:$body, avatar:$avatar) {
          name
          body
          avatar
        } 
      }
    `
    this.articleQuery = gql`
      query article($slug: String!) {
        article(slug: $slug) {
          id
          title
          slug
          text
          articleThumbnail
          createdAt
          comments {
            name
            body
            avatar
            createdAt
          }
        }
      }
    `
  }

  articleComment (event, addComment) {
    event.preventDefault()
    const form = event.target

    addComment({
      variables: {
        slug: this.props.url.query.slug,
        name: form.name.value,
        body: form.body.value,
        avatar: localStorage.getItem('picture')
      }
    })

    form.reset()
  }

  render () {
    return <Layout {...this.props}>
      <Query query={this.articleQuery} variables={{ slug: this.props.url.query.slug }}>
        {({ loading, data: { article } }) => {
          if (loading) {
            return <>
              <h1 className='c-article__heading'>loading..</h1>
              <div className='c-article__container'>
                <div className='c-articledata loading' />
                <article className='c-article__body loading'>
                  Article on its way
                  <img className='c-article__image loading' />
                </article>
              </div>
            </>
          } else {
            return <>
              <h1 className='c-article__heading'>{article.title}</h1>
              <div className='c-article__container'>
                <div className='c-articledata'>
                  <div className='c-articledata__avatar' />
                  <h4 className='c-articledata__author'>Dameon Sumpton</h4>
                  <h5 className='c-articledata__date'>{article.createdAt}</h5>
                </div>

                <article className='c-article__body'>
                  <img className='c-article__image' src={`${'http://localhost:3001'}${article.articleThumbnail}`} />
                  <MarkdownPreview value={article.text} />
                </article>
                <div className='c-comments-container'>
                  <h3 className='c-comments-container__comment-counter'>{article.comments.length} Comments</h3>
                  <Mutation
                    mutation={this.addComment}
                    update={(cache, { data: { addComment } }) => {
                      addComment = Object.assign({}, addComment, { createdAt: moment() })
                      const updatedArticle = Object.assign({}, article, { comments: article.comments.concat([addComment]) })

                      cache.writeQuery({
                        query: this.articleQuery,
                        variables: { slug: this.props.url.query.slug },
                        data: { article: updatedArticle }
                      })
                    }}
                  >
                    {addComment => (
                      <CommentForm mutation={(event) => this.articleComment(event, addComment)} url={this.props.url} />
                    )}
                  </Mutation>
                  {article.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />
                  })}
                </div>
              </div>
            </>
          }
        }}
      </Query>
    </Layout>
  }
}

export default withData(ArticlePage)

import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'
import { MarkdownPreview } from 'react-marked-markdown'

import Layout from '../components/Layout'
import Comments from '../components/shared/Comments'
import ArticleComment from '../components/shared/ArticleComment'

class ArticlePage extends Component {
  constructor (props) {
    super(props)
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

  render () {
    return <Query query={this.articleQuery} variables={{ slug: this.props.url.query.slug }}>
      {({ loading, data: { article } }) => {
        if (loading) {
          return <Layout {...this.props}>
            <h1 className='c-article__heading'>loading..</h1>
            <div className='c-article__container'>
              <div className='c-articledata loading' />
              <article className='c-article__body loading'>Article on it's way
                <img className='c-article__image loading' />
              </article>
            </div>
          </Layout>
        } else {
          return <Layout {...this.props}>
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
                <ArticleComment url={this.props.url} />
                {article.comments.map((comment, index) => {
                  return <Comments comment={comment} key={index} />
                })}
              </div>
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(ArticlePage)

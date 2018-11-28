import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'
import Link from 'next/link'

import Codepens from '../components/shared/Codepens'
import Article from '../components/shared/Article'
import HomeLayout from '../components/HomeLayout'

class Index extends Component {
  constructor (props) {
    super(props)
    this.articlesQuery = gql`
      query articles {
        articles {
          id
          title
          text
          articleThumbnail
        }
      }
    `
  }

  render () {
    return <HomeLayout {...this.props}>
      <h2>My Codepens</h2>
      <div className='c-my-codepens'>
        <Codepens />
        <Link href='/projects'>
          <a className='c-my-codepens__all-pens'>View More Pens</a>
        </Link>
      </div>
      <h2>Blog Articles</h2>
      <div className='c-articles-container blog'>
        <Query query={this.articlesQuery}>
          {({ loading, data: { articles } }) => {
            if (loading) {
              return <p>Loading.....</p>
            } else {
              return <>
                { articles.map(article => {
                  return <Article key={article.id} article={article} />
                })}
              </>
            }
          }}
        </Query>
      </div>
      <Link href='/articles'>
        <a className='c-articles-container__all-articles'>View all Articles</a>
      </Link>
    </HomeLayout>
  }
}

export default withData(Index)

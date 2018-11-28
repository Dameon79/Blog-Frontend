import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import Layout from '../components/Layout'
import Article from '../components/shared/Article'

class Articles extends Component {
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
    return (
      <Layout {...this.props}>
        <h2 className='c-articles-container__heading'>Blog Articles</h2>
        <div className='c-articles-container'>
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
      </Layout>
    )
  }
}

export default withData(Articles)

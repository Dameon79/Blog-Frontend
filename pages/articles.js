import { Component } from 'react'

import Layout from '../components/Layout'
import Article from '../components/shared/Article'


class Articles extends Component {
  render () {
    return <Layout {...this.props}>
      <h2 className="c-articles-container__heading">Blog Articles</h2>
      <div className="c-articles-container">
        <Article />
      </div>
    </Layout>
  }
}

export default Articles

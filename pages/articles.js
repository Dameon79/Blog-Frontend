import { Component } from 'react'

import Layout from '../components/Layout'

class Articles extends Component {
  render () {
    return <Layout {...this.props}>
      <div>Articles</div>
    </Layout>
  }
}

export default Articles

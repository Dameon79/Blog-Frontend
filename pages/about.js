import { Component } from 'react'

import Layout from '../components/Layout'

class About extends Component {
  render () {
    return <Layout {...this.props}>
      <div>About Me</div>
    </Layout>
  }
}

export default About
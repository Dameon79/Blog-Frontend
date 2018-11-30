import { Component } from 'react'
import Router from 'next/router'

import Auth from '../lib/Auth'

import Layout from '../components/Layout'

class Callback extends Component {
  componentDidMount () {
    const auth = new Auth()
    if (/access_token|id_token|error/.test(this.props.url.asPath)) {
      auth.handleAuthentication()
      Router.push('/')
    }
  }

  render () {
    return (
      <Layout {...this.props}>
        <div className='callback'>Logging you in...</div>
      </Layout>
    )
  }
}

export default Callback

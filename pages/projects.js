import { Component } from 'react'

import Codepens from '../components/shared/Codepens'
import Layout from '../components/Layout'

class Projects extends Component {
  render () {
    return <Layout {...this.props}>
      <h2 className='c-my-codepens__heading'>My Codepens</h2>
      <div className='c-my-codepens'>
        <Codepens />
      </div>
    </Layout>
  }
}

export default Projects
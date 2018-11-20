import { Component } from 'react'

import Header from '../components/shared/Header'
import HomeLayout from '../components/HomeLayout'

class Index extends Component {
  render () {
    return <HomeLayout {...this.props}>
      <div>Home</div>
    </HomeLayout>
  }
}

export default Index

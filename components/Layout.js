import { Component } from 'react'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <header className='c-header'>
      { this.props.children }
      
    </header>
  }
}

export default Layout

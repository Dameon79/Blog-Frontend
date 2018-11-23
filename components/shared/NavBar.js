import { Component } from 'react'

import PersonalLogo from './PersonalLogo'
import Nav from './Nav'

class Header extends Component {
  render () {
    return (
      <div className='c-nav-bar'>
        <Nav />
        <PersonalLogo />
      </div>
    )
  }
}

export default Header

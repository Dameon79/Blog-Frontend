import { Component } from 'react'

import PersonalLogo from './PersonalLogo';
import DsWelcomeAnimation from './DsWelcomeAnimation';
import Nav from './Nav'

class Header extends Component {
  render () {
    return (
      <header className='c-header'>
        <Nav />
        <PersonalLogo />
        <DsWelcomeAnimation />
      </header>
    )
  }
}

export default Header

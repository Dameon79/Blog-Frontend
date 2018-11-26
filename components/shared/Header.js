import { Component } from 'react'

import PersonalLogo from './PersonalLogo'
import DsWelcomeAnimation from './DsWelcomeAnimation'
import Nav from './Nav'
import MailchimpSubscribe from './MailchimpSubscribe'

class Header extends Component {
  render () {
    return (
      <header className='c-header'>
        <Nav />
        <PersonalLogo />
        <DsWelcomeAnimation />
        <MailchimpSubscribe />
      </header>
    )
  }
}

export default Header

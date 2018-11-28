import { Component } from 'react'
import Link from 'next/link'

class PersonalLogo extends Component {
  render () {
    return (
      <Link href='/'>
        <img src='/static/images/logo.png' className='c-personal-logo' />
      </Link>
    )
  }
}

export default PersonalLogo

import { Component } from 'react'
import Link from 'next/link'


class PersonalLogo extends Component {
  render () {
    return (
    <Link href="/index">
      <img src='/static/images/logo.png' className="c-personal-logo"></img>
    </Link>
    );
  }
}

export default PersonalLogo
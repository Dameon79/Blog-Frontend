import { Component } from 'react'
import Link from 'next/link'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      burgerNav: 'c-burger-container'
    }

    this.animateBurger = this.animateBurger.bind(this)
  }

  animateBurger () {
    const { burgerNav } = this.state

    if (window.innerWidth < 720 && burgerNav === 'c-burger-container') {
      this.setState({
        burgerNav: 'c-burger-container change'
      })
    } else {
      this.setState({
        burgerNav: 'c-burger-container'
      })
    }
  }

  render () {
    const { burgerNav } = this.state

    return (
      <div className={burgerNav} onClick={this.animateBurger}>
        <div className='c-burger-container__burger1' />
        <div className='c-burger-container__burger2' />
        <div className='c-burger-container__burger3' />

        <nav className='c-burgernav'>
          <Link href='/'>
            <a className='c-burgernav__menu'>Home</a>
          </Link>
          <Link href='/about' as='about-me'>
            <a className='c-burgernav__menu'>About Me</a>
          </Link>
          <Link href='/projects' as='my-projects'>
            <a className='c-burgernav__menu'>My Projects</a>
          </Link>
          <Link href='/articles' as='all-blog-posts'>
            <a className='c-burgernav__menu'>Blog Articles</a>
          </Link>
          <Link href='/contact' as='contact-me'>
            <a className='c-burgernav__menu u-white-border'>Contact</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Nav

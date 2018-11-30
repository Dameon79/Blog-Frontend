import { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render () {
    return (
      <footer className='c-footer'>
        <nav className='c-footer__nav'>
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

        <nav className='c-footer__socialmedia'>
          <a href='https://github.com/Dameon79'>
            <img src='/static/images/Github2.png' className='c-socialmedialogos c-socialmedialogos__git' />
          </a>
          <a href='https://procoders.co.uk/'>
            <img src='/static/images/procoders2.jpg' className='c-socialmedialogos' />
          </a>
          <a href='https://www.linkedin.com/in/dameon-sumpton-407503ab/'>
            <img src='/static/images/linkedin1.png' className='c-socialmedialogos' />
          </a>
          <a href='https://twitter.com/DameonSumpton'>
            <img src='/static/images/Twitter1.png' className='c-socialmedialogos' />
          </a>
        </nav>
        <h6 className='c-footer__copyright'>&copy; Dameon Sumpton {new Date().getFullYear()} </h6>
      </footer>
    )
  }
}

export default Footer

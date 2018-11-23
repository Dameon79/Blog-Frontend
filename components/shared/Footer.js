import { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render () {
    return(
      <footer className='c-footer'>
        <nav className='c-footer__nav'>
          <Link href='/'>
            <a className='c-burgernav__menu'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='c-burgernav__menu'>About Me</a> 
          </Link>
          <Link href='/projects'>
            <a className='c-burgernav__menu'>My Projects</a> 
          </Link>
          <Link href='/articles'>
            <a className='c-burgernav__menu'>Blog Articles</a>
          </Link>
          <Link href='/contact'>
            <a className='c-burgernav__menu u-white-border'>Contact</a>  
          </Link>
        </nav>

        <nav className='c-footer__socialmedia'>
          <a href='https://github.com/Dameon79'>
            <img src='/static/images/Github2.png' className='c-socialmedialogos c-socialmedialogos__git'></img>  
          </a>
          <a href='https://procoders.co.uk/'>
            <img src='/static/images/procoders2.jpg' className='c-socialmedialogos'></img>
          </a>
          <a href='https://www.linkedin.com/in/dameon-sumpton-407503ab/'>
            <img src='/static/images/linkedin1.png' className='c-socialmedialogos'></img>
          </a>
          <a href='https://twitter.com/dameon_sumpton'>
            <img src='/static/images/Twitter1.png' className='c-socialmedialogos'></img>
          </a>
        </nav>
        <h6 className='c-footer__copyright'>&copy; Dameon Sumpton 2018</h6>
      </footer>
    );
  }
}

export default Footer
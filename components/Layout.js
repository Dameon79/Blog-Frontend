import { Component } from 'react'
import '../scss/application.scss'

import NavBar from './shared/NavBar'
import Footer from './shared/Footer';


class Layout extends Component {
  render () {
    return(
      <>
        <NavBar />
        { this.props.children }
        <Footer />
      </>
    );
  }
}

export default Layout

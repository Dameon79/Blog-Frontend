import { Component } from 'react'
import '../scss/application.scss'

import Header from './shared/Header'
import Footer from './shared/Footer';

class Layout extends Component {
  render () {
    return(
      <>
        <Header />
        { this.props.children }
        <Footer />
      </>
    );
  }
}

export default Layout

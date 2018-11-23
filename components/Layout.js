import { Component } from 'react'
import '../scss/application.scss'
import Head from 'next/head'

import NavBar from './shared/NavBar'
import Footer from './shared/Footer'


class Layout extends Component {
  render () {
    return(
      <>
      <Head>
        <meta name='viewport' content='width=device-width'/>
      </Head>
        <NavBar />
        { this.props.children }
        <Footer />
      </>
    );
  }
}

export default Layout

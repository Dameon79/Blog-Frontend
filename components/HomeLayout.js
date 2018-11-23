import { Component } from 'react'
import '../scss/application.scss'
import Head from 'next/head'


import Header from './shared/Header'
import Footer from './shared/Footer'

class HomeLayout extends Component {
  render () {
    return(
      <>
        <Head>
          <meta name='viewport' content='width=device-width'/>
        </Head>
        <Header />
        { this.props.children }
        <Footer />
      </>
    );
  }
}

export default HomeLayout

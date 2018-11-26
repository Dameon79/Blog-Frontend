import { Component } from 'react'

import Layout from '../components/Layout'
import Comments from '../components/shared/Comments'

class Article extends Component {
  render () {
    return <Layout {...this.props}>
      <h1 className='c-article__heading'>Dummy Article</h1>
      <div className='c-article__container'>
        <div className='c-articledata'>
          <div className='c-articledata__avatar'></div>
          <h4 className='c-articledata__author'>Dameon Sumpton</h4>
          <h5 className='c-articledata__date'>Published Today</h5>
        </div>
  
        <article className='c-article__body'>
          <img className='c-article__image' src='/static/images/Classes.jpg'></img>
        </article>

        <Comments />
      </div>
    </Layout>
  }
}

export default Article
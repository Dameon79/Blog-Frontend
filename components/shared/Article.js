import { Component } from 'react'
import Link from 'next/link'

class Article extends Component {
  render () {
    return (
      <Link href='/article'>
        <article className='c-articles-container__article'>
          <h3 className='c-articles-container__article-title'>Dummy Article</h3>
          <img className='c-articles-container__article-image' src='/static/images/Classes.jpg'></img>
        </article>
      </Link>
    );
  }
}

export default Article
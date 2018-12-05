import { Component } from 'react'
import Link from 'next/link'

class Article extends Component {
  render () {
    const { article } = this.props
    return (
      <Link href={`/article?slug=${article.slug}`} as={`article/${article.slug}`}>
        <a className='c-articles-container__article'>
          <h3 className='c-articles-container__article-title'>{article.title}</h3>
          <img className='c-articles-container__article-image' src={`${'http://localhost:3001'}${article.articleThumbnail}`} />
        </a>
      </Link>
    )
  }
}

export default Article

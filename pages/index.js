import { Component } from 'react'
import Codepens from '../components/shared/Codepens'
import Link from 'next/link'

import Article from '../components/shared/Article'
import HomeLayout from '../components/HomeLayout'

class Index extends Component {
  render () {
    return <HomeLayout {...this.props}>
      <h2>My Codepens</h2>
      <div className="c-my-codepens">
      <Codepens />
        <Link href="/projects">
          <a className="c-my-codepens__all-pens">View More Pens</a> 
        </Link>
      </div>

      <h2>Blog Articles</h2>
      <div className="c-articles-container"> 
        <Article />
      </div>
      <Link href="/articles">
        <a className="c-articles-container__all-articles">View all Articles</a>
      </Link>
 
      
    </HomeLayout>
  }
}

export default Index

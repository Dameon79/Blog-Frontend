import { Component } from 'react'

import CommentsForm from '../shared/CommentsForm'

import Auth from '../../lib/Auth'

class ArticleComment extends Component {
  constructor (props) {
    super(props)

    this.auth = new Auth()
    this.login = this.login.bind(this)
  }

  login () {
    this.auth.login(this.props.url.asPath)
  }

  render () {
    if (this.auth.isAuthenticated()) {
      return <CommentsForm />
    } else {
      return <a className='c-comments-container__login' onClick={this.login} >Login to comment</a>
    }
  }
}

export default ArticleComment

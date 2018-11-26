import { Component } from 'react'

class Comments extends Component {
  render () {
    return (
      <div className='c-comments-container'>
        <h3 className='c-comments-container__comment-counter'>1 Comment</h3>
        <a className='c-comments-container__login' href='/auth/auth0'>Login to comment</a>
        <div className='c-comments-container__comment'>
          <img className='c-comments-container__comment-avatar' src='/static/images/logo.png'></img>
          <h3 className='c-comments-container__comment-name'>Dameon Sumpton</h3>
          <h3 className='c-comments-container__comment-body'>Sample Comment</h3>
          <h3 className='c-comments-container__comment-created'>Posted Today</h3>
        </div>
      </div>
    );
  }
}


export default Comments
import { Component } from 'react'

class Comments extends Component {
  render () {
    const { comment } = this.props
    return (
      <div className='c-comments-container__comment'>
        <img className='c-comments-container__comment-avatar' src='/static/images/logo.png' />
        <h3 className='c-comments-container__comment-name'>{comment.name}</h3>
        <h3 className='c-comments-container__comment-body'>{comment.body}</h3>
        <h3 className='c-comments-container__comment-created'>{comment.createdAt}</h3>
      </div>
    )
  }
}

export default Comments

import { Component } from 'react'
import moment from 'moment'

class Comment extends Component {
  render () {
    const { comment } = this.props

    return (
      <div className='c-comments-container__comment'>
        <img className='c-comments-container__comment-avatar'src={comment.avatar} />
        <h3 className='c-comments-container__comment-name'>{comment.name}</h3>
        <h3 className='c-comments-container__comment-body'>{comment.body}</h3>
        <h3 className='c-comments-container__comment-created'>{moment(comment.createdAt).fromNow()}</h3>
      </div>
    )
  }
}

export default Comment

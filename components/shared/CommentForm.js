import { Component } from 'react'

import Auth from '../../lib/Auth'

class CommentForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {}
    }

    this.auth = new Auth()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  userProfile () {
    return {
      picture: localStorage.getItem('picture'),
      nickname: localStorage.getItem('nickname')
    }
  }

  login () {
    this.auth.login(this.props.url.asPath)
  }

  logout () {
    this.auth.logout()
    window.location.reload()
  }

  render () {
    if (this.auth.isAuthenticated()) {
      const userProfile = this.userProfile()
      return (
        <>
          <button type='submit' className='f-comments-form__submit logout' onClick={this.logout}>Logout</button>
          <form className='f-comments-form' onSubmit={this.props.mutation}>
            <h6 className='f-comments-form__avatar-text'>Logged in as {userProfile.nickname}
              <img className='f-comments-form__avatar' src={userProfile.picture} />
            </h6>
            <input type='hidden' name='name' className='f-comments-form__name' value={userProfile.nickname} />
            <label htmlFor='body' className='f-comments-form__label'>Comment:</label>
            <input type='text' name='body' className='f-comments-form' placeholder='Add to the discussion' />
            <button type='submit' className='f-comments-form__submit'>Post</button>
          </form>
        </>
      )
    } else {
      return <a className='c-comments-container__login' onClick={this.login} >Login to comment</a>
    }
  }
}

export default CommentForm

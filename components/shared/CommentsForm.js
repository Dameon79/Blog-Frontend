import { Component } from 'react'
import Auth from '../../lib/Auth'

class CommentsForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {}
    }

    this.auth = new Auth()
    this.logout = this.logout.bind(this)
  }

  componentWillMount () {
    const { userProfile, getProfile } = this.auth

    if (!userProfile) {
      getProfile((err, profile) => {
        err ? console.log(err) : this.setState({ profile })
      })
    } else {
      this.setState({ profile: userProfile })
    }
  }

  logout () {
    this.auth.logout()
    window.location.reload()
  }

  render () {
    const { profile } = this.state

    return (
      <div className='f-comments-form'>
        <h6 className='f-comments-form__avatar-text'>Logged in as {profile.nickname}
          <img className='f-comments-form__avatar' src={profile.picture} />
        </h6>
        <input type='hidden' name='name' className='f-comments-form__name' value={profile.nickname} />
        <label htmlFor='body' className='f-comments-form__label'>Comment:</label>
        <input type='text' name='body' className='f-comments-form__bodylabel' placeholder='Add to the discussion' />
        <button type='submit' className='f-comments-form__submit'>Post</button>
        <button type='submit' className='f-comments-form__submit logout' onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default CommentsForm

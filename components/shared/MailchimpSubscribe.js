import { Component } from 'react'

class MailchimpSubscribe extends Component {
  render () {
    return (
      <div className='c-mc-signup'>
        <form action='https://herokuapp.us19.list-manage.com/subscribe/post?u=3afc697b401bde3fce74181c1&amp;id=c21e2cc493' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='c-mc-signup__validate' target='_blank' noValidate>
          <input type='email' defaultValue='' name='EMAIL' className='c-mc-signup__email' placeholder='E-mail address' required />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
            <input type='text' name='b_3afc697b401bde3fce74181c1_c21e2cc493' tabIndex='-1' defaultValue='' />
          </div>
          <div className='c-mc-signup__clear'>
            <input type='submit' value='Subscribe' name='subscribe' id='mc-embedded-subscribe' className='c-mc-signup__button' />
          </div>
        </form>
      </div>
    )
  }
}

export default MailchimpSubscribe

import { Component } from 'react'

import Layout from '../components/Layout'

class Contact extends Component {
  render () {
    return <Layout {...this.props}>
      <div className='c-contact-page'>
        <img src='/static/images/contact.jpg' className='c-contact-page__image'></img>
        <div className='c-contact-page__form-container'>
          <form className='f-contact-form'>
          <fieldset>
            <legend>Contact Me</legend>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' className='f-contact-form__input' placeholder='Your Name'/>
              <label htmlFor='email'>Email:</label>
              <input type='text' name='email' className='f-contact-form__input' placeholder='Your e-mail address'/>
              <label htmlFor='body'>Your Message</label>
              <textarea htmlFor='body' rows='19' className='f-contact-form__input' placeholder='Please type your message'/>
              <button type='submit' className='f-contact-form__submit'>Send</button>
            </fieldset>
          </form>
          
        </div>
      </div>
    </Layout>
  }
}

export default Contact
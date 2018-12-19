import { Component } from 'react'

import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import FlashMessage from 'react-flash-message'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.contactForm = this.contactForm.bind(this)

    this.state = {
      formSubmitted: false,
      formFailed: false
    }
  }

  async contactForm (event) {
    this.setState({
      formSubmitted: false,
      formFailed: false
    })

    event.preventDefault()
    const form = event.target
    const formData = {
      From: 'dameon@dameon-sumpton.com',
      To: 'dameon@dameon-sumpton.com',
      ReplyTo: form.email.value,
      HtmlBody: form.body.value,
      Name: form.name.value
    }

    const response = await fetch('/contact-me',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

    if (response.status === 200) {
      this.setState({ formSubmitted: true })
      form.reset()
    } else {
      this.setState({ formFailed: true })
    }
  }

  render () {
    return <Layout {...this.props}>
      <div className='c-contact-page'>
        <img src='/static/images/contact.jpg' className='c-contact-page__image' />
        <div className='c-contact-page__form-container'>
          { this.state.formSubmitted
            ? <FlashMessage duration={3000}>
              {<div className='c-contact-page__submitted'>Thanks for your message, I'll get back to you soon</div> }
            </FlashMessage> : ''}
          { this.state.formFailed
            ? <FlashMessage duration={3000}>
              {<div className='c-contact-page__failed'>Whoops... something went wrong, please try again</div> }
            </FlashMessage> : '' }

          <form className='f-contact-form' onSubmit={this.contactForm} >
            <input type='hidden' name='_csrf' value='{{csrfToken}}' />
            <fieldset>
              <legend>Contact Me</legend>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' className='f-contact-form__input' placeholder='Your Name' />
              <label htmlFor='email'>Email:</label>
              <input type='text' name='email' className='f-contact-form__input' placeholder='Your e-mail address' />
              <label htmlFor='body'>Your Message</label>
              <textarea name='body' rows='19' className='f-contact-form__input' placeholder='Please type your message' />
              <button type='submit' className='f-contact-form__submit'>Send</button>
            </fieldset>

          </form>
        </div>
      </div>
    </Layout>
  }
}

export default Contact

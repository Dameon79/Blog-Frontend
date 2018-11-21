import { Component } from 'react'

import Layout from '../components/Layout'

class Contact extends Component {
  render () {
    return <Layout {...this.props}>
      <div className="c-contact-page">
        <div className="c-contact-page__form-container">
          <div className="c-contact-page__image"></div>
          <form className="f-contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="f-contact-form__input" placeholder="Your Name"/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="f-contact-form__input" placeholder="Your e-mail address"/>
            <label htmlFor="body">Your Message</label>
            <textarea htmlFor="body" rows="10" className="f-contact-form__input" placeholder="Please type your message"/>
          </form>
          <p>
            <button type="submit" className="f-contact-form__submit">Send</button>
          </p>
        </div>
      </div>
    </Layout>
  }
}

export default Contact
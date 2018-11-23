import { Component } from 'react'

import Layout from '../components/Layout'

class About extends Component {
  render () {
    return <Layout {...this.props}>
      <section className='c-about-me-page'>
        <div className='c-about-me-page__content'>
          <div className='c-about-me-page__photo'></div>
          <section className='c-about-me-page__intro'>
            <h1 className='c-about-me-page__welcome'>Hello,</h1>
            <p className='c-about-me-page__name'>My name is Dameon Sumpton, </p>
            <p className='c-about-me-page__welcome-text'>I'm a Full Stack Web Developer based in Leeds</p>
          </section>
          
          <p className='c-about-me-page__main-text'>About me text here</p>
    
          <div className='c-about-me-page__skills-container'>
            <p className='c-about-me-page__skills-text'>My Skills</p>
            {/* <%= image_tag 'HTML5.png', class: 'c-about-me-page__skills-image' %>
            <%= image_tag 'CSS3.png', class: 'c-about-me-page__skills-image' %> 
            <%= image_tag 'ES6.svg', class: 'c-about-me-page__skills-image' %>
            <%= image_tag 'Rails1.png', class: 'c-about-me-page__skills-image c-skills-rails' %>
            <%= image_tag 'ruby.png', class: 'c-about-me-page__skills-image c-skills-ruby' %>
            <%= image_tag 'React.png', class: 'c-about-me-page__skills-image' %>
            <%= image_tag 'nodejs2.png', class: 'c-about-me-page__skills-image c-skills-node' %> */}
          </div>
        </div>
      </section>  
    </Layout>
  }
}

export default About
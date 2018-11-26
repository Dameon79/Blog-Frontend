import { Component } from 'react'

import Layout from '../components/Layout'

class About extends Component {
  render () {
    return <Layout {...this.props}>
      <section className='c-about-me-page'>
        <div className='c-about-me-page__photo'></div>
        <section className='c-about-me-page__intro'>
          <h1 className='c-about-me-page__hello'>Hello,</h1>
          <p className='c-about-me-page__name'>My name is Dameon Sumpton, </p>
          <p className='c-about-me-page__welcome-text'>I'm a Full Stack Web Developer based in Leeds</p>
        </section>
        
        <section className='c-about-me-page__main-text'>
          <h1 className="c-about-me-page__heading">A LITTLE ABOUT ME</h1>
          <p>Where to start....</p>
          <p>After finishing my A levels I went on to work in retail, it was supposed to be a gap year 
            before uni but ended up being an 18 year career!.</p>
          <p>I had various roles from working in the warehouse, 
            to deputy store manager to financial analyst. Then onto being a Regional administrator/PA 
            for the senior Regional team.</p>
          <p>Although I always worked hard I was never hugely passionate about what I was doing, 
            I had always been into tech, computers and the web so when the opportunity to take voluntary 
            redundancy came I jumped at the chance.</p>
          <p>It was a scary thing deciding to essentially make myself unemployed however it gave me a
            golden opporunity to commit all of my time to transitioning my career into the wonderful world
            of Web Development</p>
          <h1 className='c-about-me-page__heading'>SO WHAT HAPPENED NEXT?</h1>
          <p>I started self studying, working through sites like free code camp and code academy.</p>
          <p>These were a great introduction to learn some basic HTML, CSS and Javascript
            but for me it was obvious that the more complex concepts would take much longer to grasp
            and work through doing it alone.</p>
          <p>Thats where ProCoders came in. They run a fabulous full stack Web development boot camp based in Leeds (you can check them out <a class='c-about-me-page__link' href='https://procoders.co.uk/' target='blank'>here</a>)</p>
          <p>I was lucky enough to get enrolled on the course and haven't looked back since!</p>
          <h1 className="c-about-me-page__heading"> SKILLS AQUIRED</h1>
          <div className="c-about-me-page__list-container">
            <ul>
              <li className="c-about-me-page__list">HTML</li>
              <li className="c-about-me-page__list">CSS</li>
              <li className="c-about-me-page__list">SCSS</li>
              <li className="c-about-me-page__list">Javascript/ES6</li>
            </ul>
            <ul>
              <li className="c-about-me-page__list">Ruby</li>
              <li className="c-about-me-page__list">Ruby on Rails</li>
              <li className="c-about-me-page__list">React</li>
              <li className="c-about-me-page__list">Next JS</li>
            </ul>
            <ul>
              <li className="c-about-me-page__list">GraphQL</li>
              <li className="c-about-me-page__list">BEM</li>
              <li className="c-about-me-page__list">Version control (GIT)</li>
              <li className="c-about-me-page__list">Responsive layout and design</li>
            </ul>
          </div>
        </section>
      </section>  
    </Layout>
  }
}

export default About
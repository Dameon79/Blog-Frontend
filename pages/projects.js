import { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

class Projects extends Component {
  render () {
    return <Layout {...this.props}>
      <h2 className="c-my-codepens__heading">My Codepens</h2>
      <div className="c-my-codepens">
        <div className="c-my-codepens__grid">
          <p data-theme-id="dark" data-slug-hash="qQZENY" data-default-tab="result" data-user="dameon79" data-pen-title="Javascript Calculator" data-preview="true" className="codepen">See the Pen <a href="https://codepen.io/dameon79/pen/qQZENY/">Javascript Calculator</a> by Dameon Sumpton (<a href="https://codepen.io/dameon79">@dameon79</a>) on <a href="https://codepen.io">CodePen</a>.</p>
          <p data-theme-id="dark" data-slug-hash="QZYgmE" data-default-tab="css,result" data-user="dameon79" data-pen-title="Etch a Sketch" data-preview="true" className="codepen">See the Pen <a href="https://codepen.io/dameon79/pen/QZYgmE/">Etch a Sketch</a> by Dameon Sumpton (<a href="https://codepen.io/dameon79">@dameon79</a>) on <a href="https://codepen.io">CodePen</a>.</p>
          <p data-theme-id="dark" data-slug-hash="JeXdgG" data-default-tab="result" data-user="dameon79" data-pen-title="Rock, Paper Scissors" data-preview="true" className="codepen">See the Pen <a href="https://codepen.io/dameon79/pen/JeXdgG/">Rock, Paper Scissors</a> by Dameon Sumpton (<a href="https://codepen.io/dameon79">@dameon79</a>) on <a href="https://codepen.io">CodePen</a>.</p>
        </div>
      </div>
      <Helmet>
        <script src="https://static.codepen.io/assets/embed/ei.js" async></script>
      </Helmet>
    </Layout>
  }
}

export default Projects
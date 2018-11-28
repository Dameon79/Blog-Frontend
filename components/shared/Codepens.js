import { Component } from 'react'

class Codepens extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    this.setState({ loading: true })
  }

  initalizeCodepen () {
    if (this.state.loading) {
      const script = document.createElement('script')
      script.src = '/static/codepen.js'
      script.async = true

      document.body.appendChild(script)

      return <>
        <p data-theme-id='dark' data-slug-hash='qQZENY' data-default-tab='result' data-user='dameon79' data-pen-title='Javascript Calculator' data-preview='true' className='codepen'>See the Pen <a href='https://codepen.io/dameon79/pen/qQZENY/'>Javascript Calculator</a> by Dameon Sumpton (<a href='https://codepen.io/dameon79'>@dameon79</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
        <p data-theme-id='dark' data-slug-hash='QZYgmE' data-default-tab='css,result' data-user='dameon79' data-pen-title='Etch a Sketch' data-preview='true' className='codepen'>See the Pen <a href='https://codepen.io/dameon79/pen/QZYgmE/'>Etch a Sketch</a> by Dameon Sumpton (<a href='https://codepen.io/dameon79'>@dameon79</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
        <p data-theme-id='dark' data-slug-hash='JeXdgG' data-default-tab='result' data-user='dameon79' data-pen-title='Rock, Paper Scissors' data-preview='true' className='codepen'>See the Pen <a href='https://codepen.io/dameon79/pen/JeXdgG/'>Rock, Paper Scissors</a> by Dameon Sumpton (<a href='https://codepen.io/dameon79'>@dameon79</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
      </>
    }
  }
  render () {
    return <div className='c-my-codepens__grid'>
      {this.initalizeCodepen()}
    </div>
  }
}

export default Codepens

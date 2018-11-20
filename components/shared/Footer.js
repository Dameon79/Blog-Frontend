import { Component } from 'react'

class Footer extends Component {
  render () {
    return(
      <footer class="c-footer">
        <nav class="c-footer__nav">
        <a href="#" className="c-burgernav__menu">Home</a>
          <a href="#" className="c-burgernav__menu">About Me</a> 
          <a href="#" className="c-burgernav__menu">My Projects</a> 
          <a href="#" className="c-burgernav__menu">Blog Articles</a> 
          <a href="#" className="c-burgernav__menu u-white-border">Contact</a> 
        </nav>

        <nav class="c-footer__socialmedia">
          <a href="https://github.com/Dameon79">
            <img src='/static/Github2.png' className="c-socialmedialogos c-socialmedialogos__git"></img>  
          </a>
          <a href="https://procoders.co.uk/?gclid=CjwKCAjwrNjcBRA3EiwAIIOvqwymZaA5y1EhNZgzLAr62QD6nkk3omRCfR4kU-2Xnpd9NrU9GGcknRoC-XkQAvD_BwE">
            <img src='/static/procoders2.jpg' className="c-socialmedialogos"></img>
          </a>
          <a href="https://www.linkedin.com/in/dameon-sumpton-407503ab/">
            <img src='/static/linkedin1.png' className="c-socialmedialogos"></img>
          </a>
          <a href="https://twitter.com/dameon_sumpton">
            <img src='/static/Twitter1.png' className="c-socialmedialogos"></img>
          </a>
        </nav>
        <h6 class="c-footer__copyright">&copy; Dameon Sumpton</h6>
      </footer>
    );
  }
}

export default Footer
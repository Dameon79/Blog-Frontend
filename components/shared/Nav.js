import { Component } from 'react'

class Nav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      burgerNav: "c-burger-container"
    }

    this.animateBurger = this.animateBurger.bind(this)
  }

  animateBurger () {
    const { burgerNav } = this.state

    if (burgerNav === 'c-burger-container') {
      this.setState({
        burgerNav: "c-burger-container change"
      })  
    } else {
      this.setState({
        burgerNav: "c-burger-container"
      })
    }
  }

  render () {
    const { burgerNav } = this.state

    return (
      <div className={burgerNav} onClick={this.animateBurger}>
        <div className="c-burger-container__burger1"></div>
        <div className="c-burger-container__burger2"></div>
        <div className="c-burger-container__burger3"></div>
    
    
        <nav className="c-burgernav">
          <a href="#" className="c-burgernav__menu">Home</a>
          <a href="#" className="c-burgernav__menu">About Me</a> 
          <a href="#" className="c-burgernav__menu">My Projects</a> 
          <a href="#" className="c-burgernav__menu">Blog Articles</a> 
          <a href="#" className="c-burgernav__menu u-white-border">Contact</a>  
        </nav>
      </div>
    );
  }
}

export default Nav
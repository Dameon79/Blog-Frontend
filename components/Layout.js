import { Component } from 'react'

class Layout extends Compenent {
  render() {
    return <div>
      { this.props.children }
    </div>
  }
}

export default Layout

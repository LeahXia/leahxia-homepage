import React, { Component } from 'react'

import NavMobile from './nav-mobile'
import NavDesk from './nav-desk'

class Nav extends Component {
  render () {
    let width = window.innerWidth
    if (width > 750) {
      return (
        <div id='nav'>
          <NavDesk />
        </div>
      )
    } else {
      return (
        <div id='nav'>
          <NavMobile />
        </div>
      )
    }
  }
}

export default Nav

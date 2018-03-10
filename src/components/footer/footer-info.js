import React, { Component } from 'react'
import SelfInfo from './self-info'
import Contact from './contact'
import Social from './social'

class FooterInfo extends Component {
  render () {
    return (
      <div id='footer-info'>
        <SelfInfo />
        <Contact />
        <Social />
      </div>
    )
  }
}

export default FooterInfo

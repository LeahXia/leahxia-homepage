import React, { Component } from 'react'
// import ContactInfo from './contact-info'

import GitHub from '../../img/github.png'
import Web from '../../img/web.png'
import LinkedIn from '../../img/linkedIn.png'

class Footer extends Component {
  renderContactImg (img) {
    return (window.innerWidth > 750) ? <img src={require(`../../img/${img}.png`)} alt={img} /> : null
  }
  renderLocation () {
    return (window.innerWidth > 750)
      ? <a className='contact-info' id='location'>
        <img src={require(`../../img/location.png`)} alt='location' />
        <p>Vancouver, BC</p>
      </a>
      : null
  }
  renderContact () {
    return (
      <div id='contact'>
        {this.renderLocation()}
        <a className='contact-info' id='phone' href='tel:778-710-7010'>
          {this.renderContactImg('phone')}
          <p>778-710-7010</p>
        </a>
        <a className='contact-info' id='email' href='mailto:leahxia5@gmail.com'>
          {this.renderContactImg('email')}
          <p>leahxia5@gmail.com</p>
        </a>
      </div>
    )
  }
  render () {
    return (
      <div id='footer'>
        <div id='self-info'>
          <h2>LEAH XIA</h2>
          <p>App & Web Developer</p>
        </div>
        {this.renderContact()}
        <div id='social'>
          <a href='https://github.com/LeahXia' target='_blank' rel="noopener noreferrer"><img id='github' src={GitHub} alt='github' /></a>
          <a href='https://leahxia.com'><img src={Web} alt='web' /></a>
          <a href='http://linkedin.com/in/leahxia' target='_blank' rel="noopener noreferrer"><img src={LinkedIn} alt='linkedIn' /></a>
        </div>
      </div>
    )
  }
}

export default Footer

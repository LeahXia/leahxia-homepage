import React, { Component } from 'react'

import ContactInfo from './contact-info'
import FooterData from '../../footer-data.json'

import GitHub from '../../img/github.png'
import Web from '../../img/web.png'
import LinkedIn from '../../img/linkedIn.png'

class Footer extends Component {
  render () {
    return (
      <div id='footer'>
        <div id='self-info'>
          <h2>LEAH XIA</h2>
          <p>App & Web Developer</p>
        </div>
        <div id='contact'>
          {FooterData.map(contact =>
            <ContactInfo key={contact.contId} {...contact} />
          )}
        </div>
        <div id='social'>
          <img id='github' src={GitHub} alt='github' />
          <img src={Web} alt='web' />
          <img src={LinkedIn} alt='linkedIn' />
        </div>
      </div>
    )
  }
}

export default Footer

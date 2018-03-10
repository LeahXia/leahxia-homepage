import React, { Component } from 'react'
import ContactInfo from './contact-info'
import FooterData from '../../footer-data.json'

class Contact extends Component {
  render () {
    return (
      <div id='contact'>
        {FooterData.map(contact =>
          <ContactInfo key={contact.contId} {...contact} />
        )}
      </div>
    )
  }
}

export default Contact

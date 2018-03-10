import React, { Component } from 'react'

class ContactInfo extends Component {
  render () {
    return (
      <div className='contact-info' id={this.props.contName}>
        <img src={require(`../../img/${this.props.contImg}.png`)} alt={this.props.contName} />
        <p>{this.props.contInfo}</p>
      </div>
    )
  }
}

export default ContactInfo

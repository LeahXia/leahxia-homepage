import React, { Component } from 'react'
import GitHub from '../../img/github.png'
import Web from '../../img/web.png'
import LinkedIn from '../../img/linkedIn.png'

class Social extends Component {
  render () {
    return (
      <div id='social'>
        <img src={GitHub} alt='github' />
        <img src={Web} alt='web' />
        <img src={LinkedIn} alt='linkedIn' />
      </div>
    )
  }
}

export default Social

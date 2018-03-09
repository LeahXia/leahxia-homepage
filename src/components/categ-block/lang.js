import React, { Component } from 'react'

class Lang extends Component {
  render () {
    return (
      <div className='lang'>
        <p>{`\u2022`}</p>
        <p className='lang-name'>{this.props.langName}</p>
      </div>
    )
  }
}

export default Lang

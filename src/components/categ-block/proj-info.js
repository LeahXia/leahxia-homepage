import React, { Component } from 'react'
import Lang from './lang.js'

class ProjInfo extends Component {
  render () {
    return (
      <div className='proj-info'>
        <img
          src={require(`../../img/${this.props.projImg}.png`)}
          className='proj-img'
          alt='project'
        />
        <div className={'proj-text ' + this.props.singleProj[1]}>
          <h4 className='proj-name'>{this.props.projName}</h4>
          {this.props.langs.map(lang =>
            <Lang key={lang['langId']} {...lang} />
          )}
        </div>
        {/* <button>See it on Github</button> */}
      </div>
    )
  }
}

export default ProjInfo

import React, { Component } from 'react'
import ProjInfo from './proj-info.js'

class CategInfo extends Component {
  render () {
    console.log(this.props)
    return (
      <div className={'categ-blook ' + this.props.theme} id={this.props.catClass}>
        <div className={'categ ' + this.props.singleProj[0]}>
          <div className='categ-title'>
            <h3 className='dot'>{`\u2022`}</h3>
            <h3 className='categ-name'>{this.props.catName.toUpperCase()}</h3>
          </div>
          <div className='proj-detail'>
            {this.props.projs.map(proj =>
              <ProjInfo
                key={proj['projId']}
                {...proj}
                singleProj={this.props.singleProj}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default CategInfo

import React, { Component } from 'react'
import Lang from './lang.js'

class ProjInfo extends Component {
  websiteUrl (name) {
    switch (name) {
      case 'share-washi':
        return `https://leahxia.com/${name}`

      case 'resOrder':
        return 'https://github.com/LeahXia/resorder'

      case 'spiruvive':
        return 'https://spiruvive.cn'

      case 'create-design':
        return 'https://create-design.ca'

      case 'blog':
        return 'https://nameless-tor-31129.herokuapp.com/'

      case 'ruby-games':
        return 'https://github.com/LeahXia/RubyGames'

      default:
        return `https://leahxia.com/projects/${name}`
    }
  }

  render () {
    return (
      <div className='proj-info'>
        <a className='proj-img-container' href={this.websiteUrl(this.props.projImg)} target='_blank'>
          <img
            src={require(`../../img/${this.props.projImg}.png`)}
            className='proj-img'
            alt='project'
          />
        </a>
        <div className='proj-text'>
          <a href={this.websiteUrl(this.props.projImg)} target='_blank'>
            <h4 className='proj-name'>{this.props.projName}</h4>
          </a>
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

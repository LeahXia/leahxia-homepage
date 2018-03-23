import React, { Component } from 'react'
import '../../css/categ-block.css'
import projData from '../../proj-data.json'
import CategInfo from './categ-info.js'

class CategBlock extends Component {
  render () {
    return projData.map(categ => {
      var categID = categ['catId']
      var theme = categ['catId'] % 2 === 0 ? 'theme-black' : 'theme-white'
      var singleProj = categ['catId'] === 1 ? 'singleCateg' : 'categ'
      return (
        <CategInfo
          key={categID}
          {...categ}
          theme={theme}
          singleProj={singleProj}
        />
      )
    })
  }
}

export default CategBlock

import React, { Component } from 'react'
import UpArrow from '../img/backToTop.png'

class BackToTop extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll (e) {
    let top = window.pageYOffset || document.documentElement.scrollTop
    document.getElementById('backToTop').style.display = (top > 300) ? 'block' : 'none'
  }
  onBackToTopClicked () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render () {
    return (
      <div id='backToTop' onClick={() => this.onBackToTopClicked()}>
        <img src={UpArrow} alt='back to top' />
      </div>
    )
  }
}

export default BackToTop

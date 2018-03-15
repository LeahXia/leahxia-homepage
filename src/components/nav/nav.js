import React, { Component } from 'react'

class Nav extends Component {

  constructor(props){
    super(props)
    this.state = {
      showHideDropdown:'hidden',
      pageScroll:'scroll',
      bar1:'bar-back',
      bar2:'',
      bar3:''
    }
  }

  toggleDropdown = () => {
    var barClass1, barClass2, barClass3, isShown, pageScroll
    if (this.state.bar1 === 'bar-back') {
      barClass1 = 'bar1-trans'
      barClass2 = 'bar2-trans'
      barClass3 = 'bar3-trans'
    } else {
      barClass1 = 'bar-back'
      barClass2 = 'bar2-back'
      barClass3 = 'bar-back'
    }

    if (this.state.showHideDropdown === 'hidden') {
      isShown = 'show'
      pageScroll = 'unscrollable'
    } else {
      isShown = 'hidden'
      pageScroll = 'scrollable'
    }

    var body = document.getElementById('app')
    body.className = pageScroll

    this.setState({
      bar1: barClass1,
      bar2: barClass2,
      bar3: barClass3,
      showHideDropdown: isShown
    })
  }

  dropdownItemClicked = (id) => {
    this.toggleDropdown()
    document.getElementById(id).scrollIntoView()
  }

  renderToggleMenu = () => {

    if (window.innerWidth < 750)
      return(
        <li id='bars' onClick={this.toggleDropdown.bind(this)}>
          <span id='bar1' className={this.state.bar1}/>
          <span id='bar2' className={this.state.bar2}/>
          <span id='bar3' className={this.state.bar3}/>
        </li>
      )
  }

  menuListId = () => {
    return (window.innerWidth < 750) ? 'menu-dropdown' : 'deskMenu'
  }

  render () {
    return (
      <div id='nav'>
        <ul>
          <li id='logo'>LX</li>
          {this.renderToggleMenu()}
          <li id={this.menuListId()} className={this.state.showHideDropdown}>
            <ul>
              <li>
                <a onClick={this.dropdownItemClicked.bind(this, 'nav')} >App Portfolio</a>
              </li>
              <li>
                <a onClick={this.dropdownItemClicked.bind(this, 'ClientWeb')} >Web Portfolio</a>
              </li>
              <li>
                <a onClick={this.dropdownItemClicked.bind(this, 'ClientWeb')} >About</a>
              </li>
              <li>
                <a onClick={this.dropdownItemClicked.bind(this, 'footer')} >Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav

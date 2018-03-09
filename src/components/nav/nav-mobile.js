import React, { Component } from 'react'

class NavMobile extends Component {

  constructor(props){
    super(props)
    this.state = {
      showHideDropdown:'hidden',
      bar1:'bar-back',
      bar2:'',
      bar3:''
    }
  }

  toggleDropdown = () => {
    var isShown = 'hidden'
    isShown = this.state.showHideDropdown === 'hidden' ? 'show' : 'hidden'

    if (this.state.bar1 === 'bar-back'){
      this.setState({
        bar1: 'bar1-trans',
        bar2: 'bar2-trans',
        bar3: 'bar3-trans'
      })
    }else{
      this.setState({
        bar1: 'bar-back',
        bar2: 'bar2-back',
        bar3: 'bar-back'
      })
    }

    this.setState({
      showHideDropdown: isShown

    })
  }

  render () {
    return (
      <div id='nav-mobile'>
        <ul>
          <li id='logo'>LX</li>
          <li id='bars' onClick={this.toggleDropdown}>
            <span id='bar1' className={this.state.bar1}/>
            <span id='bar2' className={this.state.bar2}/>
            <span id='bar3' className={this.state.bar3}/>
          </li>
          <li id='menu-dropdown' className={this.state.showHideDropdown}>
            <ul>
              <li>
                <a>App Portfolio</a>
              </li>
              <li>
                <a>Web Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavMobile

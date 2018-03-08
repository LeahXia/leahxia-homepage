import React, { Component } from 'react'
import '../css/main.css'

// import Nav from './nav'
import PageHeader from './page-header'
import CategBlock from './categ-block/categ-block'
// import Footer from './footer'

class App extends Component {
  render () {
    return (
      <div id='app'>
        {/* <Nav /> */}
        <PageHeader />
        <CategBlock />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App

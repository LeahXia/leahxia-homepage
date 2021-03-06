import React, { Component } from 'react'
import Nav from './nav/nav'
import PageHeader from './page-header'
import CategBlock from './categ-block/categ-block'
import BackToTop from './backToTop'
import Footer from './footer/footer'

class App extends Component {
  render () {
    return (
      <div id='app' className='scrollable'>
        <Nav />
        <PageHeader />
        <CategBlock />
        <BackToTop />
        <Footer />
      </div>
    )
  }
}

export default App

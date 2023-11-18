import React from 'react'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import './style.css'

const App = () => {

  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default App
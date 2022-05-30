import React from 'react'
import About from './components/about/About'
import Contanct from './components/contact/Contanct'
import Experience from './components/exprerience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Testimony from './components/testimony/Testimony'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div>
      <div>Hello world</div>
      <Header />
      <Nav />
      <Portfolio />
      <Experience />
      <Services />
      <About />
      <Testimony />
      <Contanct />
      <Footer />
    </div>
  )
}

export default App
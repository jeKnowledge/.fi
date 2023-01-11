import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, About, Podcast, Temas, Faq} from '../'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <Home />
      <div className="sticky">
        <Navbar />
      </div>
      <About />
      <Temas />
      <Podcast />
      <Faq/>
      <Footer />
      
      
    </div>
  )
}

export default Landing
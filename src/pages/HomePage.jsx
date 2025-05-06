import React from 'react'
import About from "../components/About"
import Contact from "../components/Contact"
import Geosites from "../components/Geosites"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import History from "../components/History"
import ScrollToTop from '../components/ScrollToTop'

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden" >
        <Navbar />
        <Hero />
        <About />
        <Geosites />
        <History />
        <Contact />
        <Footer />
        <ScrollToTop />
  </main>
  )
}

export default HomePage
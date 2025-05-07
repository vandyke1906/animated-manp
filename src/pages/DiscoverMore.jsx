import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const History = () => {
  return (
    <>
      <Navbar isHome={false} />
      <div className="my-20 min-h-96 w-screen px-10">
        <div className="py-10">History</div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default History
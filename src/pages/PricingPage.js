import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'

function PricingPage() {
  return (
    <>
        <Navbar />
        <Pricing 
          margin='12vh 0 0 0'
        />
        <Footer />
    </>
  )
}

export default PricingPage

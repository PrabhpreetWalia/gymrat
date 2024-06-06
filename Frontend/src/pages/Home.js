import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutCards from '../components/AboutCards/AboutCards'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import BMICalculator from '../components/BMICalculator/BMICalculator'
import News from '../components/News/News'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutCards />
      <WhoWeAre />
      <News 
        margin='2rem 0 0 0'
        count={3}
      />  
      <BMICalculator />
      <Pricing 
        margin='2rem 0 0 0'
      />
      <Footer />
    </div>
  )
}

export default Home

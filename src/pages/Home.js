import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutCards from '../components/AboutCards/AboutCards'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import BMICalculator from '../components/BMICalculator/BMICalculator'
import News from '../components/News/News'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutCards />
      <WhoWeAre />  
      <BMICalculator />
      <News />
      <Footer />
    </div>
  )
}

export default Home

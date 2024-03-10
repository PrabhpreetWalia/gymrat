import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutCards from '../components/AboutCards/AboutCards'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import BMICalculator from '../components/BMICalculator/BMICalculator'
import News from '../components/News/News'

function Home() {
  return (
    <div>
      <Hero />
      <AboutCards />
      <WhoWeAre />  
      <BMICalculator />
      <News />
    </div>
  )
}

export default Home

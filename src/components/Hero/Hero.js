import React from 'react'
import './Hero.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import background from './Hero.jpeg'

function Hero() {
  return (
    <div className="hero--container" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
        <div className="bg--container"><img src={background} alt="Hero Backcground"/></div>
        <div className="top-box">BE YOUR OWN ENERGY</div>
        <h1>MAKE YOUR BODY</h1>
        <h2>FIT & PERFECT</h2>
        <PrimaryButton 
            value="JOIN NOW"
            href='/pricing'
            />
    </div>
  )
}

export default Hero

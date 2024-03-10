import React from 'react'
import './Hero.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import background from './Hero.jpeg'

function Hero() {
  return (
    <div className="hero--container">
        <div className="bg--container"><img src={background} /></div>
        <div className="top-box">BE YOUR OWN ENERGY</div>
        <h1>MAKE YOUR BODY</h1>
        <h2>FIT & PERFECT</h2>
        <PrimaryButton 
            value="OUR CLASSES"
            link="#"
            color="white"/>
    </div>
  )
}

export default Hero

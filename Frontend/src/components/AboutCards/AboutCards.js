import React from 'react'
import './AboutCards.css'
import AboutCard from './AboutCard'
import Time from './Time'
import Barbell from './Barbell'
import Food from './Food'

function AboutCards() {
  return (
    <>
        <div className="about-card-container">
            <AboutCard 
                heading="PROGRESSION"
                desc="Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
                bgimg=""
            ><Time /></AboutCard>
            <AboutCard 
                heading="WORKOUT"
                desc="With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
                bgimg=""
            ><Barbell /></AboutCard>
            <AboutCard 
                heading="NUTRITION"
                desc="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
                bgimg=""
            ><Food /></AboutCard>
        </div>
    </>
  )
}

export default AboutCards

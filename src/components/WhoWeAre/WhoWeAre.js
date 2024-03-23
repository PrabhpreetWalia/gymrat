import React from 'react'
import './WhoWeAre.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import girlRun from './girl-running.png'
import runText from './running-text.png'

function WhoWeAre() {
  return (
    <div className='WhoWeAre--container' >
        <div className="WhoWeAre--left" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
            <div className="main--heading">WHO WE ARE</div>
            <h1>Take Your Health And Body To Next Level</h1>
            <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <PrimaryButton 
                value="TAKE A TOUR"
                isBlack={true}
                margin="1rem 0"
                href='/'
            />
            
        </div>
        <div className="WhoWeAre--right" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
            <img src={girlRun} className="girl-running" alt="" />
            <img src={runText} className="running-text" alt="" />
        </div>
    </div>
  )
}

export default WhoWeAre

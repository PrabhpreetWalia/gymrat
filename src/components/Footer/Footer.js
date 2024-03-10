import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer--container">
        <div className="details">
            <h1>GYM RAT</h1>
        Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
            <div className="contacts"></div>
        </div>

        <div className="working--hours">
            <div className="hours--heading">WORKING HOURS</div>
            <h1>Monday - Friday:</h1>
            <h2>7:00am - 21:00pm</h2>
            <h1>Saturday:</h1>
            <h2>7:00am - 19:00pm</h2>
            <h1>Sunday - Closed</h1>
        </div>
    </div>
  )
}

export default Footer

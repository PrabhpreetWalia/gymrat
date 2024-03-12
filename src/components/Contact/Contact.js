import React from 'react'
import './Contact.css'
import { Form } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

function Contact() {
  return (
    <div className="contact--container">
        <div className="contact--details">
            <h1>We are here for help you! To Shape Your Body.</h1>
            <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>

        </div>
        <Form className="contact--form">
            <div className="contact--heading">Leave Us Your Info</div>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Email Address' />
            <select name="" id="" placeholder="Select Classes">
                <option selected disabled hidden>Select Class</option>
                <option value="Beginer">Beginer - ₹1500</option>
                <option value="Moderate">Moderate - ₹2000</option>
                <option value="Advance">Advance - ₹2500</option>

            </select>
            <textarea name="Comment" id="" cols="30" rows="5" placeholder='Comments...'></textarea>
            <PrimaryButton 
                value="SUBMIT NOW"
                isBlack={true}
                margin='2rem 0'
            />
        </Form>
    </div>
  )
}

export default Contact

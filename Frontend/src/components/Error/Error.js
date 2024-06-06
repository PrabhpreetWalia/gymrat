import React from 'react'
import './Error.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

function Error() {
  return (
    <div className="error--container">
        <span className="main--heading error--heading">You look lost!!! <br /> Go back to home page</span>
        <PrimaryButton 
            value="Home Page"
            href='/' />
    </div>
  )
}

export default Error

import React from 'react'
import './PrimaryButton.css'
import { Link } from "react-router-dom";

function PrimaryButton({value, isBlack, margin="1.2rem", href="/"}) {
  return (
    <div className='primary-button--container' style={{margin: margin}}>
      <Link to={href} onClick={() => window.scrollTo(0, 0)}><button className={'primary-button' + (isBlack ? ' dark-bg' : '')}>{value}</button></Link>
      <div className={'outline' + (isBlack ? ' dark-border': '')}></div>
    </div>
  )
}

export default PrimaryButton

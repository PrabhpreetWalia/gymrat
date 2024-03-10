import React from 'react'
import './PrimaryButton.css'

function PrimaryButton({value, isBlack, margin="1.2rem"}) {
  return (
    <div className='primary-button--container' style={{margin: margin}}>
      <button className={'primary-button' + (isBlack ? ' dark-bg' : '')}>{value}</button>
      <div className={'outline' + (isBlack ? ' dark-border': '')}></div>
    </div>
  )
}

export default PrimaryButton

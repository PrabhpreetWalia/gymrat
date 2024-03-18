import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

function Price({level, price, advantages, img}) {

    const adv = advantages.map((advantage, index) => {
        return(
            <div className='advantage' key={index}>{advantage}</div>
        )
    }
    )

  return (
    
    <div className="price">
        <div className="background"><img src={img} alt="Pricing Background" /></div>
        <div className="level">{level}</div>
        <div className="price-div"><span className='price--symbol'>₹</span> <span className='amount'>{price}</span> <span className='price--symbol'>p/m</span></div>
        {adv}
        <PrimaryButton 
            value="Purchase"
            isBlack={true}
            href='/contact'
        />
    </div>

  )
}

export default Price

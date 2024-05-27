import React from 'react'

function Button({name, active, setActive}) {

  return (

    <div onClick={()=> {setActive(name)
    console.log(active, name)}} className={active?`exercise--buton active`: `exercise--buton`}>
      {name}
    </div>
  )
}

export default Button
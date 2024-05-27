import React from 'react'

function Btn({name, setVisible, visible}) {
  return (

      <button onClick={()=> {setVisible(name)}} className={visible == name? "tracker--btn tracker--active": "tracker--btn"}>{name}</button>

  )
}

export default Btn

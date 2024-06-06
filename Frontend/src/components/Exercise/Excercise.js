import React from "react";
import { useState, useEffect, useRef } from "react";

function Excercise({exercise}) {
    
    const [isPopupOpen, setPopupOpen] = useState(false)
    const outsideRef = useRef(false)

    function handlePopup(){
        setPopupOpen(true)
          document.body.style.overflow = "hidden";
          
    }

    function handleClose(){
        setPopupOpen(false)
        document.body.style.overflowY = "scroll"
    }

    function handleOutsideClick(e){
        console.log(e.target)
        const outsideElement = outsideRef.current;

        if (e.target === outsideRef.current){
            handleClose()
        }
    }

  return (
    <>
    <div key={exercise.id} className="exercise" onClick={handlePopup}>
      <img src={exercise.gifUrl} alt="" />
      <div className="exercise--details">{exercise.name}</div>
    </div>

    {isPopupOpen && 
    <div className="popup" ref={outsideRef} onClick={handleOutsideClick}>
        <div className="popup--container">
        <div className="popup--topbar"><div className="popup--close" onClick={handleClose}>X</div></div>
        <img src={exercise.gifUrl} alt="" />
        <div className="exercise--details">{exercise.name}</div>
        <div className="exercise--instructions">{exercise.instructions}</div>
    </div>
    </div>
    }
    </>
  );
}

export default Excercise;

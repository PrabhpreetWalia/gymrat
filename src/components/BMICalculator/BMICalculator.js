import { React, useState, useEffect } from "react";
import "./BMICalculator.css";

function BMICalculator() {
  const [bmi, setBmi] = useState(undefined);
  const [weight, setWeight] = useState(undefined);

  function bmiCalculate(e) {
    e.preventDefault();
    
    setBmi(undefined)
    setWeight(undefined)

    const inputWeight = Number(document.getElementById("input-weight").value);
    const inputHeight = Number(document.getElementById("input-height").value);

    const weightField = document.getElementById("input-weight");
    const heightField = document.getElementById("input-height");
    weightField.style.outline = "none";
    heightField.style.outline = "none";

    if (
      isNaN(inputWeight) ||
      typeof inputWeight !== "number" ||
      inputWeight <= 0 ||
      inputWeight > 500
    ) {
      weightField.style.outline = "3px solid red";
      return;
    }

    if (
      isNaN(inputHeight) ||
      typeof inputWeight !== "number" ||
      inputHeight <= 0 ||
      inputHeight > 500
    ) {
      heightField.style.outline = "3px solid red";
      return;
    }

    setBmi((inputWeight / (inputHeight * inputHeight)).toFixed(1))

    
  };

  useEffect(() => {

    if (bmi < 18.5) {
      setWeight("Under Weight");
    } else if (bmi < 25) {
      setWeight("Normal");
    } else if (bmi < 30) {
      setWeight("Over Weight");
    } else if(bmi >= 30 ){
      setWeight("Obese");
    }

  }, [bmi])


  return (
    <div className="bmi--container">
      <h1>
        Let's Calculate Your <span className="primary-color">BMI</span>
      </h1>
      <h2>
        Easily determine your body mass index with our accurate calculation
        tool.
      </h2>
      <form action="#">
        <div className="input--container">
          <input
            type="text"
            placeholder="Weight/kg"
            id="input-weight"
            required
          />
          <input
            type="text"
            placeholder="Height/m"
            id="input-height"
            required
          />
        </div>
        <div className="result--container">
          <span>
            {bmi ? (
              <>

                Your BMI is <span className="primary-color">{bmi}</span>
              </>
            ) : (
              ""
            )}
          </span>
          <span>
            {weight ? (
              <>

                Your weight is <span className="primary-color">{weight}</span>
              </>
            ) : (
              ""
            )}
          </span>
        </div>
        <button onClick={bmiCalculate}>Calculate</button>
      </form>
    </div>
  );
}

export default BMICalculator;

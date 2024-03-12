import React from "react";
import "./Pricing.css";
import "./Price";
import Price from "./Price";
import Beginer from './Beginer.jpg'
import Moderate from './Moderate.jpg'
import Advance from './Advance.jpg'

function Pricing({ margin = "10vh 0 0 0" }) {
  return (
    <>
      <div className="pricing--heading" style={{ margin: margin }}>
        <span className="main--heading">PRICING</span>
      </div>

      <div className="pricing--container">
        <Price 
            level="Beginer"
            price={1500}
            advantages={["Free Hand", "Gym Fitness"]}
            img={Beginer}
        />
        <Price 
            level="Moderate"
            price={2000}
            advantages={["Free Hand", "Gym Fitness", "Weight Loss", "Cycling"]}
            img={Moderate}
        />
        <Price 
            level="Advance"
            price={2500}
            advantages={["Free Hand", "Gym Fitness", "Weight Loss", "Cycling", "Personal Trainer"]}
            img={Advance}
        />
      </div>
    </>
  );
}

export default Pricing;

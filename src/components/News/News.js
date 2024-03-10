import React from "react";
import "./News.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function News() {
  return (
    <>
      <div className="news--heading"><span className="main--heading">LATEST NEWS</span></div>
      <div className="news--container">
        <div className="news">
          <div className="news--date">22.03.2023</div>
          <h1>Yoga For Everyone in 2023</h1>
          <h2>
            This is program designed to make the practice of yoga beneficial for
            people of all ages, abilities, and backgrounds.
          </h2>
          <PrimaryButton value="Read More" isBlack={true} />
        </div>
        <div className="news">
          <div className="news--date">22.03.2023</div>
          <h1>Yoga For Everyone in 2023</h1>
          <h2>
            This is program designed to make the practice of yoga beneficial for
            people of all ages, abilities, and backgrounds.
          </h2>
          <PrimaryButton value="Read More" isBlack={true} />
        </div>
        <div className="news">
          <div className="news--date">22.03.2023</div>
          <h1>Yoga For Everyone in 2023</h1>
          <h2>
            This is program designed to make the practice of yoga beneficial for
            people of all ages, abilities, and backgrounds.
          </h2>
          <PrimaryButton value="Read More" isBlack={true} />
        </div>
      </div>
    </>
  );
}

export default News;

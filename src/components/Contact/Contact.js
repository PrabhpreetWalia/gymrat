import React, { useState } from "react";
import "./Contact.css";
import { Form } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Contact() {

  let [selectedClass, setSelectedClass] = useState("1500")

  function handleClass(e){
    setSelectedClass(e.target.value)
  }



  return (
    <div className="contact--container">
      <div
        className="contact--details"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <h1>We are here for help you! To Shape Your Body.</h1>
        <p>
          At Gymate, we are dedicated to helping you achieve the body of your
          dreams. Our expert trainers and nutritionists will work with you to
          create a personalized fitness and nutrition plan that helps you reach
          your specific goals.
        </p>
      </div>
      <Form
        className="contact--form"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="contact--heading">Leave Us Your Info</div>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email Address" />

        <div className="class--container">
          <div className="class--button">
            <input
              type="radio"
              value="1500"
              id="beginer"
              name="class-type"
              checked={selectedClass === "1500"}
              onChange={handleClass}
            />
            <label for="beginer">Beginer</label>
          </div>
          <div className="class--button">
            <input
              type="radio"
              value="2000"
              id="intermediate"
              name="class-type"
              checked = {selectedClass === "2000"}
              onChange={handleClass}
            />
            <label for="intermediate">Intermediate</label>
          </div>
          <div className="class--button">
            <input
              type="radio"
              value="2500"
              id="advance"
              name="class-type"
              checked = {selectedClass === "2500"}
              onChange={handleClass}
            />
            <label for="advance">Advance</label>
          </div>
        </div>

        <div className="selected--price">
            Price: {selectedClass}
        </div>

        <textarea
          name="Comment"
          id=""
          cols="30"
          rows="5"
          placeholder="Comments..."
        ></textarea>
        <PrimaryButton value="SUBMIT NOW" isBlack={true} margin="2rem 0" />
      </Form>
    </div>
  );
}

export default Contact;

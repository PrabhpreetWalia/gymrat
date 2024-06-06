import React from "react";

function AboutCard({heading, desc, children}) {
  return (
    <div className="about-card" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
      {children}
      <div className="about-card--top">{heading}</div>
      <h2>{desc}</h2>
    </div>
  );
}

export default AboutCard;

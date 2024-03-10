import React from "react";

function AboutCard({heading, desc, children}) {
  return (
    <div className="about-card">
      {children}
      <div className="about-card--top">{heading}</div>
      <h2>{desc}</h2>
    </div>
  );
}

export default AboutCard;

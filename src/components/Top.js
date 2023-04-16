import React from "react";
import "../styles.css";

export default function Top() {
  return (
    <div className="top">
      <div className="about">
        <div className="header">
          <h1>About Us</h1>
          <p>The main objective was that companies produce a lot of waste, but sometimes, this waste could be used to make something useful.</p>
        </div>
      </div>
      <div className="whoWeAre">
        <div className="header">
          <h1>Who We Are</h1>
          <p>Learn more about our company and what we do.</p>
        </div>
        <div className="content">
          <div className="leftSection">
            <h2 className="ourStory">Our Story</h2>
            <p>
            Ensuring sustainable consumption and production patterns, which is key to sustain the livelihoods of current and future generations.
            </p>
            <p>
            Sustainable consumption involves reducing the use of resources, using renewable resources, and increasing efficiency, while sustainable production focuses on reducing waste and pollution, improving resource efficiency, and promoting the use of cleaner production methods.
            </p>
          </div>
          <div className="rightSection">
            <h2 className="ourStory">Our Mission</h2>
            <p>
            So what if there was a website where companies could say what waste products they produce and find other companies who might need it .
or even researchers who might be trying to find new uses for it - and they could get in contact and sell the waste to each other and create closed loops.

            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

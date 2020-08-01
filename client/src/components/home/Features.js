import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import time from "../../img/time.svg";
import "./Features.css";

const Features = () => {
  const features = [
    "Create classes",
    "Invite people",
    "Send messages",
    "Set reminders",
    "Structure timetables",
    "Set up tests and assignments",
    "Save and download files",
  ];

  return (
    <Fragment>
      <div className="features-block">
        <div className="features">
          <h1 className="titillium heading features-head">Features</h1>
          <p className="varela paragraph features-list">
            {features.map((feature) => {
              return (
                <li key={feature} className="feature-list-item">
                  <i className="fas fa-dot-circle list-dot"></i>
                  {"  " + feature}
                </li>
              );
            })}
          </p>
        </div>
        <div className="image-time">
          <img src={time} alt="time" className="time" />
        </div>
      </div>
      <Link to="/signup" className="link-item">
        <div className="orange-btn" id="big-orange-btn">
          Get Started
        </div>
      </Link>
    </Fragment>
  );
};

export default Features;

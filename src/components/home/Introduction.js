import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import learn from "../../img/learn.png";
import "./Introduction.css";
import "../../App.css";

const Introduction = () => {
  return (
    <Fragment>
      <div className="introduction">
        <h1 className="titillium heading">What is Axiom?</h1>
        <p className="varela paragraph">
          Axiom is an online learning platform aimed at helping schools to
          assist their students by allowing them to continue their learning in
          the comfort of their own homes. It is not a replacement for in-person
          learning but rather a support system that will work side by side with
          teachers to provide better services to learners.
        </p>
        <Button variant="contained" size="medium">
          Get Started
        </Button>
      </div>
      <div className="image-learn">
        <img src={learn} alt="learn" className="learn" />
      </div>
    </Fragment>
  );
};

export default Introduction;

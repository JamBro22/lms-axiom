import React from "react";
import { Button } from "@material-ui/core";
import test from "../../img/exam.svg";
import "./Reason.css";
import "../../App.css";

const Reason = () => {
  return (
    <div className="reason-block">
      <div className="image-test">
        <img src={test} alt="test" className="test" />
      </div>
      <div className="reason">
        <h1 className="heading">Why use Axiom?</h1>
        <p className="paragraph">
          With Axiom you can manage all your learning in one place. It makes it
          easy for teachers to keep learners updated by uploading documents and
          setting reminders. Axiom also offers customization that allows
          teachers and learners to control their workflow and optimise the
          learning process.
        </p>
        <Button variant="contained" size="medium">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Reason;

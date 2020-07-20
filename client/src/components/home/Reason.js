import React, { Fragment } from "react";
import teacher from "../../img/teacher.svg";
import "./Reason.css";

const Reason = () => {
  return (
    <Fragment>
      <div className="reason-block">
        <div className="image-teacher">
          <img src={teacher} alt="teacher" className="teacher" />
        </div>
        <div className="reason">
          <h1 className="titillium heading">Why use Axiom?</h1>
          <p className="varela paragraph">
            With Axiom you can manage all your learning in one place. It makes
            it easy for teachers to keep learners updated by uploading documents
            and setting reminders. Axiom also offers customization that allows
            teachers and learners to control their workflow and optimise the
            learning process.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Reason;

import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({
  course,
  button1,
  button2,
  type,
  click,
  click2,
  link,
}) => {
  const { image, title, description } = course;

  return (
    <div className="card col-md-4 course-card">
      <div className="card-image">{image}</div>
      <h4 className="card-title title">{title}</h4>
      <LinesEllipsis
        text={description}
        maxLine="9"
        ellipsis="..."
        trimRight
        basedOn="letters"
        className="card-text description"
      />
      <Link to={link} className="link-btn">
        <button type="button" className="btn btn-dark buttons" onClick={click}>
          {button1}
        </button>
      </Link>
      <button
        type="button"
        className={`btn btn-${type} buttons`}
        onClick={click2}
      >
        {button2}
      </button>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;

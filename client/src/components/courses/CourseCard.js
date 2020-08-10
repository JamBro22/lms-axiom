import React from "react";
import PropTypes from "prop-types";
import "./CourseCard.css";

const CourseCard = ({ course, button1, button2, type, click, click2 }) => {
  const { image, title, description, content } = course;

  return (
    <div className="card col-md-4 course-card">
      <div>{image}</div>
      <h4 className="card-title">{title}</h4>
      <h5 className="card-text">{description}</h5>
      <p>{content}</p>
      <button type="button" className="btn btn-dark buttons" onClick={click}>{button1}</button>
      <button type="button" className={`btn btn-${type} buttons`} onClick={click2}>{button2}</button>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;

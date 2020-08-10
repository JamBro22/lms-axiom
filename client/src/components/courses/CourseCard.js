import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ course, button1, button2, type }) => {
  const { image, title, description, content } = course;

  return (
    <div className="card col-md-4"  style={{ margin: "15px", width: "100px" }}>
      <div>{image}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <p>{content}</p>
  <buttton type="button" className="btn btn-dark col-5">{button1}</buttton>
  <button type="button" className={`btn btn-${type} col-5`}>{button2}</button>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;

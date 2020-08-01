import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  const { image, title, user, description } = course;

  return (
    <div className="card">
      <div>{image}</div>
      <h3 className="card-title">{title}</h3>
      <h6 className="card-title">{user}</h6>
      <p className="card-text">{description}</p>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;

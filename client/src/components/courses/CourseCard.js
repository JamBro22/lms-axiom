import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  const { image, title, description, content, user } = course;

  const { firstName } = user;

  return (
    <div className="card col-md-4" style={{ width: "200px", height: "400px" }}>
      <div>{image}</div>
      <h3 className="card-title">{title}</h3>
      <p>{firstName}</p>
      <p className="card-text">{description}</p>
      <p>{content}</p>
      <button className="btn btn-dark" style={{ width: "130px" }}>
        Learn More
      </button>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseCard;

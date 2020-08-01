import React from "react";

const CourseCard = ({ course }) => {
  const { id, title, description } = course;

  return (
    <div className="container">
      <div
        className="card"
        style={{ width: "250px", height: "500px", margin: "0" }}
      >
        <p>{id}</p>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

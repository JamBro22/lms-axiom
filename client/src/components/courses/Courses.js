import React, { Fragment, useContext } from "react";
import CourseContext from "../../context/courses/courseContext";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courseContext = useContext(CourseContext);

  const { courses } = courseContext;

  return (
    <Fragment>
      <h1>Dashboard</h1>
      {courses.map((course) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </Fragment>
  );
};

export default Courses;

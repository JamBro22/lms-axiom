import React, { Fragment, useContext, useEffect } from "react";
import CourseCard from "../../components/courses/CourseCard";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";

const Explore = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout, loading } = authContext;

  const courseContext = useContext(CourseContext);

  const { courses, getAllCourses } = courseContext;

  useEffect(() => {
    getAllCourses();
    if (token) {
      loadUser();
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    if (courses.length > 0) {
      return (
        <Fragment>
          <h1>Explore</h1>
          <div styling={{ display: "flex" }}>
            {courses.map((course) => (
              <CourseCard course={course} key={course._id} />
            ))}
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h1>Explore</h1>
          <p>No courses...</p>
        </Fragment>
      );
    }
  }
};

export default Explore;

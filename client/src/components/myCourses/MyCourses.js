import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import CourseCard from "../../components/courses/CourseCard";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import { Link } from "react-router-dom";

const MyCourses = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  const courseContext = useContext(CourseContext);

  const {
    courses,
    getCreatedCourses,
    loading,
    setCourse,
    deleteCourse,
    clearCurrent,
  } = courseContext;

  useEffect(() => {
    getCreatedCourses();
    if (token) {
      loadUser();
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  const clear = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <Header heading="My Courses" />
      <div className="auth-box">
        <Link to="/addcourse" className="add-btn-link">
          <button
            type="button"
            className="btn btn-success add-btn"
            onClick={clear}
          >
            Add Course
          </button>
        </Link>
        <h5 className="box-head">Created Courses...</h5>
        {loading ? (
          <h1>Loading...</h1>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              course={course}
              button1="Edit"
              button2="Delete"
              type="danger"
              click={() => {
                setCourse(course);
              }}
              click2={() => deleteCourse(course._id)}
              link="/addcourse"
              key={course._id}
            />
          ))
        ) : (
          <h3>No courses...</h3>
        )}
      </div>
    </Fragment>
  );
};

export default MyCourses;

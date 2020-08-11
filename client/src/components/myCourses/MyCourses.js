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

  return (
    <Fragment>
      <Header heading="My Courses" />
      <div className="auth-box">
        <Link to="/addcourse" className="add-btn-link">
          <button type="button" className="btn btn-success add-btn">
            Add Course
          </button>
        </Link>
        {loading ? (
          <h1>Loading...</h1>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              course={course}
              button1="Edit"
              button2="Delete"
              type="danger"
              click={() => setCourse(course)}
              click2={() => deleteCourse(course._id)}
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

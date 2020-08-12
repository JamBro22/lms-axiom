import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import CourseCard from "../../components/courses/CourseCard";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import AlertContext from "../../context/alerts/alertContext";

const Explore = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout, saveCourse, user } = authContext;

  const courseContext = useContext(CourseContext);

  const { courses, getAllCourses, loading, setCourse } = courseContext;

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  useEffect(() => {
    getAllCourses();
    if (token) {
      loadUser();
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header heading="Explore" />
      <div className="auth-box">
        <h5 className="box-head">All Courses...</h5>
        {loading ? (
          <h1>Loading...</h1>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              course={course}
              button1="Learn More"
              button2="Save"
              type="success"
              click={() => {
                setCourse(course);
              }}
              click2={() => {
                setAlert("Course saved", "success");
                user.saved.push(course);
                saveCourse(user);
              }}
              link="/coursecontent"
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

export default Explore;

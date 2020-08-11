import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import CourseCard from "../courses/CourseCard";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  const courseContext = useContext(CourseContext);

  const { courses, loading, setCourse } = courseContext;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header heading="Dashboard" />
      <div className="auth-box">
        {loading ? (
          <h1>Loading...</h1>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              course={course}
              button1="View Content"
              button2="Remove"
              type="danger"
              click={() => {
                setCourse(course);
              }}
              link="/coursecontent"
              key={course._id}
            />
          ))
        ) : (
          <h3>No courses</h3>
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;

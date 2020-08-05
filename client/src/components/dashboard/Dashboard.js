import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout, loading } = authContext;

  const courseContext = useContext(CourseContext);

  const { courses } = courseContext;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    if (courses.length > 0) {
      return (
        <Fragment>
          <h1>Dashboard</h1>
          {}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <h1>Dashboard</h1>
          <p>No courses...</p>
        </Fragment>
      );
    }
  }
};

export default Dashboard;

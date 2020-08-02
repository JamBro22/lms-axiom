import React, { Fragment, useContext, useEffect } from "react";
import Courses from "../../components/courses/Courses";
import AuthContext from "../../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
    }
  });

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <Courses />
    </Fragment>
  );
};

export default Dashboard;

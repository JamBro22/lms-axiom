import React, { Fragment, useContext, useEffect } from "react";
import Courses from "../../components/courses/Courses";
import AuthContext from "../../context/auth/authContext";

const Explore = (props) => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
      props.history.push("/login");
    }
  });

  return (
    <Fragment>
      <h1>Explore</h1>
      <Courses />
    </Fragment>
  );
};

export default Explore;

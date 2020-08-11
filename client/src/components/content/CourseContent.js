import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";

const CourseContent = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  useEffect(() => {
    token ? loadUser() : logout();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header heading="Content" />
      <div className="auth-box">hello</div>
    </Fragment>
  );
};

export default CourseContent;

import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";

const CourseContent = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  const courseContext = useContext(CourseContext);

  const { current } = courseContext;

  useEffect(() => {
    token ? loadUser() : logout();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header heading={current && current.title} />
      <div className="auth-box">
        <div>{current && current.image}</div>
        <p>{current && current.description}</p>
        <p>{current && current.content}</p>
      </div>
    </Fragment>
  );
};

export default CourseContent;

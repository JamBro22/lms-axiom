import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import "./CourseContent.css";

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
      <div className="auth-box" id="content-box">
        <div className="content-image">{current && current.image}</div>
        <div className="content-description">
          <h4>Description</h4>
          {current && current.description}
        </div>
        <div className="course-content">
          <h4>Content</h4>
          {current && current.content}
        </div>
      </div>
    </Fragment>
  );
};

export default CourseContent;

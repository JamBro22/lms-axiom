import React, { useEffect, useContext, useState } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import AlertContext from "../../context/alerts/alertContext";
import "./CourseForm.css";

const CourseForm = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  const courseContext = useContext(CourseContext);

  const { current, addCourse, updateCourse } = courseContext;

  const [course, setCourse] = useState({
    image: "",
    title: "",
    description: "",
    content: "",
  });

  const { image, title, description, content } = course;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
    }

    if (current) {
      setCourse(current);
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateCourse(course);
      setAlert("Course updated", "success");
    } else {
      addCourse(course);
      setAlert("Course added", "success");
    }

    setCourse({
      image: "",
      title: "",
      description: "",
      content: "",
    });
  };

  return (
    <div className="auth-box">
      <form onSubmit={onSubmit} className="course-form">
        <Header heading={current ? "Update Course" : "Add Course"} />
        <label htmlFor="image" className="course-form-label">
          Thumbnail Image:
        </label>
        <br />
        <input
          type="text"
          name="image"
          value={image}
          onChange={onChange}
          className="course-form-input"
          required
        />
        <br />
        <label htmlFor="title" className="course-form-label">
          Title:
        </label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Add a title..."
          onChange={onChange}
          className="course-form-input"
          required
        />
        <br />
        <label htmlFor="description" className="course-form-label">
          Description:
        </label>
        <br />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Add a description..."
          value={description}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor="content" className="course-form-label">
          Content:
        </label>
        <br />
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Add some content..."
          value={content}
          onChange={onChange}
          required
        />
        <button type="submit" onSubmit={onSubmit} className="submit-form">
          {current ? "Update Course" : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;

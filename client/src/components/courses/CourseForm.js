import React, { useEffect, useContext, useState } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import AlertContext from "../../context/alerts/alertContext";

const CourseForm = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);

  const { loadUser, token, logout } = authContext;

  const courseContext = useContext(CourseContext);

  const { current, addCourse } = courseContext;

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
  }, [token, loadUser, logout]);

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addCourse(course);
    setAlert("Course added", "success");
    setCourse({
      image: "",
      title: "",
      description: "",
      content: "",
    });
  };

  return (
    <div className="auth-box">
    <form onSubmit={onSubmit}>
      <Header heading={current ? "Update Course" : "Add Course"} />
      <label htmlFor="image">Thumbnail</label>
      <br />
      <input type="text" name="image" value={image} onChange={onChange} />
      <br />
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Add a title..."
        onChange={onChange}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <textarea
        name="description"
        cols="30"
        rows="10"
        placeholder="Add a description..."
        value={description}
        onChange={onChange}
      />
      <br />
      <label htmlFor="content">Content:</label>
      <br />
      <input
        type="text"
        name="content"
        placeholder="Enter some content"
        value={content}
        onChange={onChange}
      />
      <button type="submit" onSubmit={onSubmit}>{current ? "Update Course" : "Add Course"}</button>
    </form>
    </div>
  );
};

export default CourseForm;

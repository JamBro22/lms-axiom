import React, { useReducer } from "react";
import axios from "axios";
import CourseContext from "./courseContext";
import courseReducer from "./courseReducer";
import {
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../../types";

const CourseState = (props) => {
  const initialState = {
    courses: [],
  };

  const [state, dispatch] = useReducer(courseReducer, initialState);

  //   get courses
  const getAllCourses = async () => {
    try {
      const res = await axios.get("/api/courses");

      dispatch({ type: GET_COURSES, payload: res.data });
    } catch (error) {
      console.error(error.msg);
    }
  };

  // get user's joined courses
  const getJoinedCourses = () => {
    console.log("joined courses");
  };

  // get user's created courses
  const getCreatedCourses = () => {
    console.log("created courses");
  };

  //   add course
  const addCourse = async (course) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/courses", course, config);
      dispatch({ type: ADD_COURSE, payload: res.data });
    } catch (error) {
      // dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
      console.error(error.msg);
    }
  };

  // update course
  const updateCourse = () => {
    console.log("update courses");
  };

  //  delete course
  const deleteCourse = () => {
    console.log("delete courses");
  };

  //  set current course

  //  clear current course

  //  filter courses

  // clear filter

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        getAllCourses,
        getJoinedCourses,
        getCreatedCourses,
        addCourse,
        updateCourse,
        deleteCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;

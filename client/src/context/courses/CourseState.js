import React, { useReducer } from "react";
import axios from "axios";
import CourseContext from "./courseContext";
import courseReducer from "./courseReducer";
import {
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
  COURSE_ERROR,
  SET_COURSE,
  CLEAR_CURRENT,
} from "../../types";

const CourseState = (props) => {
  const initialState = {
    courses: [],
    loading: true,
    current: null,
  };

  const [state, dispatch] = useReducer(courseReducer, initialState);

  //   get courses
  const getAllCourses = async () => {
    try {
      const res = await axios.get("/api/courses");

      dispatch({ type: GET_COURSES, payload: res.data });
    } catch (error) {
      dispatch({ type: COURSE_ERROR, payload: error.response.msg });
    }
  };

  // get user's created courses
  const getCreatedCourses = async () => {
    try {
      const res = await axios.get("/api/courses/created");

      dispatch({ type: GET_COURSES, payload: res.data });
    } catch (error) {
      dispatch({ type: COURSE_ERROR, payload: error.response.msg });
    }
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
      dispatch({ type: COURSE_ERROR, payload: error.response });
    }
  };

  // update course
  const updateCourse = async (course) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/courses/${course._id}`, course, config);
      dispatch({ type: UPDATE_COURSE, payload: res.data });
    } catch (error) {
      dispatch({ type: COURSE_ERROR, payload: error.response });
    }
  };

  //  delete course
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`/api/courses/${id}`);
      dispatch({
        type: DELETE_COURSE,
        payload: id,
      });
    } catch (error) {
      dispatch({ type: COURSE_ERROR, payload: error.response });
    }
  };

  //  set current course
  const setCourse = (course) => {
    dispatch({
      type: SET_COURSE,
      payload: course,
    });
  };

  // clear current state
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        loading: state.loading,
        current: state.current,
        getAllCourses,
        getCreatedCourses,
        addCourse,
        updateCourse,
        deleteCourse,
        setCourse,
        clearCurrent,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;

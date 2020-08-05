import {
  GET_COURSES,
  ADD_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses],
        loading: false,
      };
    default:
      return state;
  }
};

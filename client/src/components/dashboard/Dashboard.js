import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/headers/Header";
import AuthContext from "../../context/auth/authContext";
import CourseContext from "../../context/courses/courseContext";
import AlertContext from "../../context/alerts/alertContext";
import CourseCard from "../courses/CourseCard";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token, logout, user, loading, saveCourse } = authContext;

  const courseContext = useContext(CourseContext);

  const { setCourse } = courseContext;

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header heading="Dashboard" />
      <div className="auth-box">
        <h5 className="box-head">Saved Courses...</h5>
        {loading ? (
          <h1>Loading...</h1>
        ) : user && user.saved.length > 0 ? (
          user.saved.map((course) => (
            <CourseCard
              course={course}
              button1="View Content"
              button2="Remove"
              type="danger"
              click={() => {
                setCourse(course);
              }}
              click2={() => {
                user.saved = user.saved.filter(
                  (saved) => saved._id !== course._id
                );
                saveCourse(user);
                setAlert("Course removed", "danger");
              }}
              link="/coursecontent"
              key={course._id}
            />
          ))
        ) : (
          <h3>No courses</h3>
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;

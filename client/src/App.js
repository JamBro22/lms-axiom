import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/layout/navbar/Navbar";
import Alerts from "./components/layout/Alert";
import Home from "./components/home/Home";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Explore from "./components/explore/Explore";
import CourseForm from "./components/courses/CourseForm";
import MyCourses from "./components/myCourses/MyCourses";
import Footer from "./components/layout/footer/Footer";
import { CssBaseline } from "@material-ui/core";

import CourseState from "./context/courses/CourseState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alerts/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <CourseState>
        <AlertState>
          <Router>
            <CssBaseline />
            <Navbar />
            <Alerts />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/explore" exact component={Explore} />
              <PrivateRoute path="/addcourse" exact component={CourseForm} />
              <PrivateRoute path="/mycourses" exact component={MyCourses} />
            </Switch>
            <Footer />
          </Router>
        </AlertState>
      </CourseState>
    </AuthState>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Footer from "./components/layout/footer/Footer";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

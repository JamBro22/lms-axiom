import React, { Fragment } from "react";
import Nav from "./components/layout/navbar/Navbar";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Nav />
    </Fragment>
  );
}

export default App;

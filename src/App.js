import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
// import Home from "./components/home/Home";
// import Footer from "./components/layout/footer/Footer";
import { CssBaseline, Box } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <Footer /> */}
    </Box>
  );
}

export default App;

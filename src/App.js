import React from "react";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import { CssBaseline, Box } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Footer />
    </Box>
  );
}

export default App;

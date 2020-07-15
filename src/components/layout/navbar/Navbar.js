import React from "react";
import "./Navbar.css";
import "../../../App.js";

const Navbar = () => {
  const guestList = ["Home", "About", "Contact", "Login", "Sign Up"];

  return (
    <nav className="nav">
      <h1 className="londrina logo">Axiom.</h1>
      <ul className="nav-list">
        {guestList.map((item) =>
          item === "Sign Up" ? (
            <li className="signup nav-item">{item}</li>
          ) : (
            <li className="nav-item">{item}</li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

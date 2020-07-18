import React from "react";
import "./Navbar.css";
import "../../../App.js";

const Navbar = () => {
  const guestLinks = ["Home", "About", "Contact", "Login", "Sign Up"];

  return (
    <nav className="nav">
      <h1 className="londrina logo">
        Axiom<span className="dot">.</span>
      </h1>
      <ul className="nav-list">
        {guestLinks.map((item) =>
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

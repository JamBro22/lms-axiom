import React from "react";
import "./Navbar.css";
import "../../../App.js";

const Navbar = () => {
  const guestList = ["home", "about", "contact", "login", "sign up"];

  return (
    <nav className="nav">
      <h1 className="londrina logo">Axiom.</h1>
      <ul className="nav-list">
        {guestList.map((item) =>
          item === "sign up" ? (
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

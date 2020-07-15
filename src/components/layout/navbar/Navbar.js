import React from "react";
import "./Navbar.css";
import "../../../App.js";
import logo from "../../img/axiom-logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <li className="fondamento nav-left logo-name">Axiom.</li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

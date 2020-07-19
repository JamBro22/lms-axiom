import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../../App.js";

const Navbar = () => {
  const guestLinks = ["Login", "Sign Up"];

  return (
    <nav className="nav">
      <h1 className="londrina logo">
        Axiom<span className="dot">.</span>
      </h1>
      <ul className="nav-list">
        {guestLinks.map((item) =>
          item === "Sign Up" ? (
            <NavLink to="/signup" className="signup nav-item" key={item}>
              {item}
            </NavLink>
          ) : (
            <NavLink
              to={item.toLowerCase()}
              className="nav-item link-item"
              key={item}
            >
              {item}
            </NavLink>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

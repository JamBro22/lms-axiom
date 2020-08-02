import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  // change navbar on authentication and username

  const guestLinks = ["Login", "Sign Up"];

  const onLogout = () => {
    logout();
  };

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
        <a href="#" onClick={onLogout}>
          logout
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;

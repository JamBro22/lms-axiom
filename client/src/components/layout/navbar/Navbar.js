import React, { useContext, Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated, user, token } = authContext;

  const [ open, setOpen ] = useState(false);

  const openMenu = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const closeMenu = () => {
    if (open) {
      setOpen(false)
    }
  }

  const icons = [
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-pinterest-p",
    "fab fa-youtube",
  ];

  const onLogout = () => {
    logout();
  };

  const guestLinks = (
    <nav className="guest-nav">
      <h1 className="londrina logo">
        <Link to="/" className="home-link">
          Axiom<span className="dot">.</span>
        </Link>
      </h1>
      <ul className="guest-nav-list">
        <NavLink to="/login" className="guest-link-item">
          <li>Login</li>
        </NavLink>
        <NavLink to="/signup" className="guest-link-item signup">
          <li>Sign Up</li>
        </NavLink>
      </ul>
    </nav>
  );

  const authLinks = (
    <Fragment>
      <i class="fas fa-bars menu-icon" onClick={openMenu}></i>
    <nav className={open ? "auth-nav-small" : "close-nav" && "auth-nav"}>
      <h1 className="londrina auth-logo transparent">
        Axiom<span className="dot transparent">.</span>
      </h1>
      <h5 className="user center transparent">
        {user && user.firstName} {user && user.lastName}
      </h5>
      <ul className="auth-nav-links transparent">
        <NavLink to="/" className="auth-link-item" onClick={closeMenu}>
          <li className="list-item transparent">Home</li>
        </NavLink>
        <NavLink to="/Dashboard" className="auth-link-item">
          <li className="list-item transparent">Dashboard</li>
        </NavLink>
        <NavLink to="/Explore" className="auth-link-item">
          <li className="list-item transparent">Explore</li>
        </NavLink>
        <NavLink to="/mycourses" className="auth-link-item">
          <li className="list-item transparent">My Courses</li>
        </NavLink>
        <NavLink to="/login" onClick={onLogout} className="auth-link-item">
          <li className="list-item transparent">Logout</li>
        </NavLink>
      </ul>
      <ul className="nav-icon-list">
        {icons.map((icon) => {
          return (
            <li className="icon-list-item" key={icon}>
              <i className={`${icon} nav-icon`} />
            </li>
          );
        })}
      </ul>
    </nav>
    </Fragment>
  );

  return token || isAuthenticated ? authLinks : guestLinks;
};

export default Navbar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated, user } = authContext;

  // change navbar on authentication and username

  const onLogout = () => {
    logout();
  };

  const guestLinks = (
    <nav className="guest-nav">
      <h1 className="londrina logo">
        Axiom<span className="dot">.</span>
      </h1>
      <ul className="guest-nav-list">
        <NavLink to="/login" className="guest-link-item"><li>Login</li></NavLink>
        <NavLink to="/signup" className="guest-link-item signup"><li>Sign Up</li></NavLink>
      </ul>
    </nav>
  )

  const authLinks = (
      <nav className="auth-nav">
        <h1 className="londrina auth-logo transparent">Axiom<span className="dot transparent">.</span></h1>
  <h5 className="user center transparent">{user && user.firstName}{" "}{user && user.lastName}</h5>
        <ul className="auth-nav-links transparent">
        <NavLink to="/" className="auth-link-item">
         <li className="list-item transparent">Home</li> 
        </NavLink>
        <NavLink to="/Dashboard" className="auth-link-item">
         <li className="list-item transparent">Dashboard</li> 
        </NavLink>
        <NavLink to="/Explore" className="auth-link-item">
         <li className="list-item transparent">Explore</li> 
        </NavLink>
        <li className="list-item courses transparent">My Courses
            <ul className="transparent">
              <NavLink to="/mycourses" className="auth-link-item">
                <li className="transparent courses-link">Created courses</li>
              </NavLink>
            </ul>
        </li>
        <NavLink to="/login" onClick={onLogout} className="auth-link-item">
         <li className="list-item transparent">Logout</li> 
        </NavLink>
        </ul>
      </nav>
  )

  return (
    isAuthenticated ? authLinks : guestLinks 
  );
};

export default Navbar;

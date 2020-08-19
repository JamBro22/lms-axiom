import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./Footer.css";
import "../../../App.css";
import AuthContext from "../../../context/auth/authContext";

const Footer = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, token } = authContext;

  const links = [
    "Home",
    "Login",
    "Sign Up",
    "Terms and Conditions",
    "Privacy Policy",
  ];
  const address = {
    street: "125 Wesbury Avenue",
    suburb: "Woodstock",
    city: "Cape Town",
    postCode: 7945,
  };
  const icons = [
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-pinterest-p",
    "fab fa-youtube",
  ];
  const contact = { phone: "0800 937 836", email: "help@axiom.edu" };

  const guestFooter = (
    <Grid container className="grid-container">
      <Grid item md={4} className="links grid-item">
        {links.map((link) => {
          return (
            <Link
              to={
                link === "Home"
                  ? "/"
                  : link === "Sign Up"
                  ? "signup"
                  : link.toLowerCase()
              }
              id="link-item"
              key={link}
            >
              <li className="paragraph link">{link}</li>
            </Link>
          );
        })}
      </Grid>
      <Grid item md={4} className="grid-item">
        <h1 className="heading head">Contact Us</h1>
        <form action="#">
          <label htmlFor="email" className="paragraph input-label">
            Email:
          </label>
          <br />
          <input
            type="email"
            name="email"
            className="input paragraph"
            required
          />
          <br />
          <label htmlFor="message" className="paragraph input-label">
            Message:
          </label>
          <br />
          <textarea
            type="text"
            name="message"
            rows="4"
            cols="30"
            className="input paragraph"
            required
          />
          <br />
          <input type="submit" value="Send" className="input send" />
        </form>
        <p className="paragraph" id="details">
          <i className="fas fa-mobile-alt contact-icon"></i>{" "}
          {" " + contact.phone}
          <br />
          <i className="fas fa-envelope-square email contact-icon"></i>{" "}
          {" " + contact.email}
        </p>
      </Grid>
      <Grid item md={4} className="paragraph grid-item">
        <p className="address">{address.street}</p>
        <p className="address">{address.suburb}</p>
        <p className="address">{address.city}</p>
        <p className="address">{address.postCode}</p>
        <p className="address">
          Copyright <i className="far fa-copyright"></i> 2020 Axiom.
        </p>
        <ul className="icons">
          {icons.map((icon) => {
            return (
              <li key={icon} className=" paragraph" id="icon">
                <i className={icon}></i>
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );

  return token || isAuthenticated ? null : guestFooter;
};

export default Footer;

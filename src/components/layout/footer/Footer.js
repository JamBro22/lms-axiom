import React from "react";
import { Grid, TextField } from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  const links = [
    "Home",
    "About",
    "Contact",
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
    "fab fa-facebook-square",
    "fab fa-instagram-square",
    "fab fa-pinterest-square",
    "fab fa-youtube",
  ];
  const contact = { phone: "0800 937 836", email: "help@axiom.edu" };

  return (
    <footer className="footer">
      <Grid container spacing={3} className="grid-container">
        <Grid item md={4} className="links">
          {links.map((link) => {
            return (
              <li key={link} className="link">
                {link}
              </li>
            );
          })}
        </Grid>
        <Grid item md={4} className="address">
          <p>{address.street}</p>
          <p>{address.suburb}</p>
          <p>{address.city}</p>
          <p>{address.postCode}</p>
          <p>
            Copyright <i class="far fa-copyright"></i>2020 Axiom.
          </p>
          <ul className="icons">
            {icons.map((icon) => {
              return (
                <li key={icon} className="icon">
                  <i className={icon}></i>
                </li>
              );
            })}
          </ul>
        </Grid>
        <Grid item md={4} className="contact">
          <h1>Contact Us</h1>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-message-input"
            label="Message"
            type="text"
            multiline
            rows={3}
            variant="outlined"
          />
          <p>
            <i class="fas fa-mobile-alt"></i> {" " + contact.phone}{" "}
            <i class="fas fa-envelope-square"></i> {" " + contact.email}
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

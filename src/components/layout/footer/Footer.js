import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  const onMouseOver = () => {
    return "style={{ mareginLeft: 20px }}";
  };

  const footerInfo = {
    navList: ["Home", "About", "Contact", "Login", "Sign Up"],
    address: `123 Lorem Ipsum Road,
    FooBar,
    Cape Town,
    7945,`,
  };

  return (
    <footer className="footer">
      <Grid container className="container-grid">
        <Grid item md={4}>
          {footerInfo.navList.map((item) => {
            return (
              <List className="list">
                <ListItem className="list-item" onmouseover={onMouseOver}>
                  {item}
                </ListItem>
              </List>
            );
          })}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

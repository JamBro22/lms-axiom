import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, token } = authContext;

  useEffect(() => {
    if (token) {
      loadUser();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className={token ? "auth-home" : "home-background"}>
      <div className="home-box">
        <h1 className="titillium heading home-head">Welcome to Axiom</h1>
        <p className="paragraph">
          Axiom is an online learning platform where you can learn to draw.
          Watch interactive videos to improve your skills or create your own
          courses. Just let the creativity flow!
        </p>
        <Link to="/signup" className="orange-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import login from "../../img/login.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <img src={login} alt="login" className="login" />
      <form action="#" className="login-form">
        <h1 className="heading login-head">Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="input"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="input"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

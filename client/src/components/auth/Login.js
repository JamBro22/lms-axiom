import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      // @todo - push to dashboard when created...
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="titillium heading">Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

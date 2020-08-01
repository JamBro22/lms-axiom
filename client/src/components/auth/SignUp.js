import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";

const SignUp = (props) => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      // @todo - push to dashboard when created...
      props.history.push("/dashboard");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    }

    register({
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="titillium heading">Sign Up</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
          required
        />
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
          minLength={6}
        />
        <label htmlFor="password2">Confirm Password:</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          required
          minLength={6}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;

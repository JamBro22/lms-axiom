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
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-background">
      <form onSubmit={onSubmit} className="form-box">
        <h1 className="titillium heading form-head">Sign Up</h1>
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
          className="form-input"
          required
        />
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
          className="form-input"
          required
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          className="form-input"
          required
        />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          className="form-input"
          required
          minLength={6}
        />
        <label htmlFor="password2" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          className="form-input"
          required
          minLength={6}
        />
        <input type="submit" value="Sign Up" className="form-btn" />
      </form>
    </div>
  );
};

export default SignUp;

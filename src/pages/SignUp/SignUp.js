import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import firebase from "firebase";

import useStyles from "components/Layout/styles";

const SignUp = ({ history }) => {
  const classes = useStyles();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase.auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
          Password
          <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit" className={classes.loginButton}>Sign Up</button>
      </form>
      <NavLink to="/login" className={classes.loginNav}>
        Login
      </NavLink>
    </div>
  );
};

export default withRouter(SignUp);

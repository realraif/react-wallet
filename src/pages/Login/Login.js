import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import firebase from "firebase.js";

import { UserContext } from "context/UserContext";
import useStyles from "components/Layout/styles";

const Login = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className={classes.loginButton}>Log In</button>
      </form>
      <NavLink to="/signup" className={classes.loginNav}>
        SignUp
      </NavLink>
    </div>
  );
};

export default withRouter(Login);

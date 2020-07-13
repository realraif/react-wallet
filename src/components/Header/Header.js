import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import firebase from "../../firebase.js";
import { UserContext } from "../../context/UserContext";

import Styles from './Header.module.css';


const Header = ( { history } ) => {
  const logtout = useCallback(async event => {
    event.preventDefault();
    try {
      await firebase.auth().signOut();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const { currentUser } = useContext(UserContext);

  return(
    <div className={Styles.Header}>
      {currentUser.email}
      <button onClick={logtout}>Logout</button>
    </div>
  );
};

export default withRouter(Header);

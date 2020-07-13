import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../context/UserContext";

import firebase from "../../firebase.js";

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
    <div>
      {currentUser.email}
      <button onClick={logtout}>Logout</button>
    </div>
  );
};

export default withRouter(Header);

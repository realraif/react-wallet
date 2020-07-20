import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import { Navbar, NavDropdown } from "react-bootstrap";

import firebase from "firebase.js";
import { UserContext } from "context/UserContext";

import styles from "./Header.module.css";

const Header = ({ history, title, setDataTimeFrame }) => {
  const logtout = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().signOut();
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(UserContext);

  return (
    <Navbar fluid className={styles.Header}>
      <div className={styles.LeftSide}>
        <div className={styles.Title}>{title}</div>
        <select className={styles.SelectBox} onChange={setDataTimeFrame}>
          <option>24 hours</option>
          <option>past week</option>
          <option>past 30 days</option>
        </select>
      </div>
      <div className={styles.RightSide}>
        <div>{currentUser.email}</div>
        <NavDropdown title="Account" className={styles.DropDown}>
          <NavDropdown.Item selected="selected">Manage bank accounts</NavDropdown.Item>
          <NavDropdown.Item>Transfer money</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Settings</NavDropdown.Item>
        </NavDropdown>
        <button className={styles.HeaderButton} onClick={logtout}>
          Log out
        </button>
      </div>
    </Navbar>
  );
};

export default withRouter(Header);

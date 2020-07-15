import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";

import firebase from "../../firebase.js";
import { UserContext } from "../../context/UserContext";

import styles from "./Header.module.css";
import Button from "../Buttons/HeaderButton/HeaderButton";
import SelectBox from "../Buttons/HeaderButton/HeaderSelectbox";

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
    <div className={styles.Header}>
      <div className={styles.LeftSide}>
        <div className={styles.Title}>{title}</div>
        <SelectBox onSelectOption={setDataTimeFrame}>
          <option>24 hours</option>
          <option>past week</option>
          <option>past 30 days</option>
        </SelectBox>
      </div>
      <div className={styles.RightSide}>
        <div>{currentUser.email}</div>
        <SelectBox>
          <option value="" disabled selected hidden>Account</option>
          <option>24 hours</option>
        </SelectBox>
        <Button onClick={logtout}>Log out</Button>
      </div>
    </div>
  );
};

export default withRouter(Header);

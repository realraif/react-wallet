import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

import { Dropdown } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";

import firebase from "firebase.js";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";
import SelectBox from "components/SelectBox/SelectBox";

import styles from "./Header.module.css";

const useStyles = makeStyles({
  appBar: {
    minHeight: "60px",
    // backgroundColor: "#FBFBFB",
  },
  Toolbar: {
    minHeight: "60px",
    borderBottom: "1px solid #E5E5E5",
    "&> *": {
      margin: "0 5px 0 5px",
    },
  },
  grow: {
    flexGrow: 1,
  },
});

const Header = ({ history, title, setDataTimeFrame }) => {
  const classes = useStyles();

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
  const { toggleSidebar } = useContext(LayoutContext);

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.Toolbar}>
        <div className={styles.Title} onClick={toggleSidebar}>
          {title}
        </div>
        <SelectBox
          className={styles.SelectBox}
          onSelect={setDataTimeFrame}
          icon={AiOutlineClockCircle}
        >
          <option>24 hours</option>
          <option>past week</option>
          <option>past 30 days</option>
        </SelectBox>
        <div className={classes.grow}></div>
        <div>{currentUser.email}</div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className={styles.DropDown}>
            Account
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Transfer money</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className={styles.HeaderButton} onClick={logtout}>
          Log out
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

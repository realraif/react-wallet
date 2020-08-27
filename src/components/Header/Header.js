import React, { useCallback, useContext } from "react";
import clsx from "clsx";

import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import { Dropdown } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

import firebase from "firebase.js";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";
import SelectBox from "components/SelectBox/SelectBox";

import styles from "./Header.module.css";
import { useHeaderStyles } from "../Layout/styles";

const Header = ({ history, title, setDataTimeFrame }) => {
  const { currentUser } = useContext(UserContext);
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);
  const classes = useHeaderStyles();

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

  const menuButton = !isSidebarOpen ? (
    <div className={clsx(classes.menuButton)}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleSidebar}
      >
        <MdMenu />
      </IconButton>
    </div>
  ) : null;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen,
      })}
    >
      {menuButton}
      <Toolbar
        className={clsx(classes.toolbar, styles.Title, {
          [classes.toolbarShift]: !isSidebarOpen,
        })}
      >
        <div className={clsx(classes.headerItem, styles.Title)}>{title}</div>
        <SelectBox
          className={clsx(classes.headerItem, styles.SelectBox)}
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
          <Dropdown.Toggle
            id="dropdown-basic"
            className={clsx(classes.headerItem, styles.DropDown)}
          >
            Account
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Transfer money</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          onClick={logtout}
          color="primary"
          className={classes.headerItem}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

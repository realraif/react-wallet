import React, { useCallback, useContext } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import Select from "react-select";

import { Dropdown } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

import firebase from "firebase.js";
import { useHeaderStyles } from "../Layout/styles";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";


const Header = ({ history, title, setDataTimeFrame, isSmallScreen }) => {
  const { currentUser } = useContext(UserContext);
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);
  const classes = useHeaderStyles();
  const timeFrames = [
    { value: 24, label: "24 hours" },
    { value: 24 * 7, label: "past week" },
    { value: 24 * 30, label: "past 30 days" },
  ];

  const logout = useCallback(
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
  
  const CustomSelectValue = props => (
    <div>
      <AiOutlineClockCircle />
      {props.data.label}
    </div>
  )

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="default"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen,
        [classes.appBarWide]: isSmallScreen,
      })}
    >
      {menuButton}
      <Toolbar
        className={clsx(classes.toolbar, {
          [classes.toolbarShift]: !isSidebarOpen,
          [classes.appBarWide]: isSmallScreen,
        })}
      >
        <div className={clsx(classes.headerItem, classes.title)}>{title}</div>
        <Select
          className={classes.selectBox}
          classNamePrefix="timeframe"
          defaultValue={timeFrames[0]}
          options={timeFrames}
          onChange={setDataTimeFrame}
          name="timeframe"
          components={{SingleValue: CustomSelectValue }}
          icon={AiOutlineClockCircle}
        />
        
        <div className={classes.grow}></div>
        <div>{currentUser.email}</div>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className={clsx(classes.headerItem, classes.dropDown)}
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
        <Button onClick={logout} color="primary" className={classes.headerItem}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

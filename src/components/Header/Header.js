import React, { useCallback, useContext } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import Select from "react-select";

import { AiOutlineClockCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

import firebase from "firebase.js";
import Dropdown from 'components/Dropdown/Dropdown';
import { useHeaderStyles } from "../Layout/styles";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";

const Header = ({
  history,
  title,
  setDataTimeFrame,
  isSmallScreen,
  timeFrames,
}) => {
  const { currentUser } = useContext(UserContext);
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);
  const classes = useHeaderStyles();

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

  const CustomSelectValue = (props) => (
    <div>
      <AiOutlineClockCircle />
      {props.data.label}
    </div>
  );

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
          options={timeFrames}
          defaultValue={timeFrames[0]}
          onChange={setDataTimeFrame}
          components={{ SingleValue: CustomSelectValue }}
          className={classes.selectBox}
        />

        <div className={classes.grow}></div>
        <div className={classes.headerItem}>{currentUser.email}</div>
        <Dropdown className={classes.headerItem} />
        <Button onClick={logout} color="primary" className={classes.headerItem}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

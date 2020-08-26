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

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  appBar: {
    minHeight: "60px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    minHeight: "60px",
    borderBottom: "1px solid #E5E5E5",
  },
  toolbarShift: {
    paddingLeft: theme.spacing(8 + 3 + 2),
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: 36,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 30,
    zIndex: theme.zIndex.appBar + 1
  },
  headerItem: {
    margin: "0 5px 0 5px",
  },
}));

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
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen,
      })}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleSidebar}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: isSidebarOpen,
        })}
      >
        <MdMenu />
      </IconButton>

      <Toolbar className={clsx(classes.toolbar, styles.Title, {
            [classes.toolbarShift]: !isSidebarOpen,
          })}>
        <div
          className={clsx(classes.headerItem, styles.Title)}
        >
          {title}
        </div>
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

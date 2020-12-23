import React, { useCallback, useContext } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import Select from "react-select";

import { AiOutlineClockCircle } from "react-icons/ai";
import {
  MdMenu,
  MdBrightnessHigh as DarkThemeIcon,
  MdBrightness4 as LightThemeIcon,
} from "react-icons/md";

import firebase from "firebase.js";
import Dropdown from "components/Dropdown/Dropdown";
import { useHeaderStyles } from "../Layout/styles";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";
import { CustomThemeContext } from "context/CustomThemeContext";

const Header = ({
  history,
  title,
  handleTimeFrameChange,
  isSmallScreen,
  timeFrames,
  initialTimeFrameIndex,
  isLoading,
}) => {
  const { currentUser } = useContext(UserContext);
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const classes = useHeaderStyles();
  const isDark = Boolean(currentTheme === "dark");

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

  const toggleThemeButton = isDark ? (
    <IconButton color="inherit" onClick={() => setTheme("default")}>
      <DarkThemeIcon />
    </IconButton>
  ) : (
    <IconButton color="inherit" onClick={() => setTheme("dark")}>
      <LightThemeIcon />
    </IconButton>
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
      {isSmallScreen ? null : (
        <span className={classes.selectedValueText}>{props.data.label}</span>
      )}
    </div>
  );

  const getUserControls = () => (
    <>
      {isSmallScreen ? null : (
        <>
          <div className={classes.headerItem}>{currentUser.email}</div>
          <Dropdown className={classes.headerItem} />
        </>
      )}
      <Button onClick={logout} color="primary" className={classes.headerItem}>
        Log out
      </Button>
    </>
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
          [classes.toolbarMediumSpacing]: !isSidebarOpen && !isSmallScreen,
          [classes.toolbarSmallSpacing]: isSmallScreen,
          [classes.appBarWide]: isSmallScreen,
        })}
      >
        <div className={clsx(classes.headerItem, classes.title)}>{title}</div>
        <Select
          options={timeFrames}
          defaultValue={timeFrames[initialTimeFrameIndex]}
          onChange={handleTimeFrameChange}
          isSearchable={false}
          components={{ SingleValue: CustomSelectValue }}
          className={classes.selectBox}
        />
        <div className={classes.grow}></div>
        {toggleThemeButton}
        {!isLoading ? getUserControls() : null}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);

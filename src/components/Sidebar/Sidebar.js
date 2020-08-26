import React, { useContext } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { RiSurroundSoundLine as WalletLogo } from "react-icons/ri";
import { AiOutlineArrowLeft as ArrowButton } from "react-icons/ai";
import {
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
  Drawer,
  IconButton
} from "@material-ui/core";

import { LayoutContext } from "context/LayoutContext";
import routes from "routes";
import styles from "./Sidebar.module.css";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 260,
    backgroundColor: "rgba(0, 0, 0, 0.62)",
    border: 0,
  },
  drawerOpen: {
    width: 260,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8 + 3),
    },
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: `10px ${theme.spacing(2)}px 0`,
    padding: `10px ${theme.spacing(2)}px`,
    borderRadius: "3px",
    position: "relative",
    display: "block",
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: theme.spacing(4),
    textAlign: "center",
    verticalAlign: "middle",
    color: "#FFF",
  },
  blue: {
    "&:hover,&:focus": {
      backgroundColor: "#00acc1",
    },
  },
  active: {
    "& $blue": {
      backgroundColor: "#00acc1",
    },
  },
  itemText: {
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: "#FFF",
    display: "flex",
    whiteSpace: "nowrap",
  },
  logo: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    color: "#68B3FD",
    marginRight: theme.spacing(1),
  },
  logoTitle: {
    fontSize: 22,
    fontWeight: 200,
    color: "#fff",
    letterSpacing: 3,
  },
  arrowButton: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
}));

const Sidebar = (props) => {
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);

  const classes = useStyles();

  const theme = useTheme();
  console.log(theme);
  return (
    <Drawer
      variant="permanent"
      className={clsx({
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      }}
    >
      <div className={styles.LogoContainer}>
        <IconButton
          color="white"
          className={classes.arrowButton}
          aria-label="close drawer"
          onClick={toggleSidebar}
          edge="start"
        >
          <ArrowButton size="15" />
        </IconButton>
        <div className={classes.logo}>
          <WalletLogo className={classes.logoIcon} size="25" />
          <span className={classes.logoTitle}>wallet</span>
        </div>
      </div>
      <div className={styles.Menu}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            activeClassName={classes.active}
            style={{ textDecoration: "none" }}
          >
            <ListItem button className={classes.itemLink + " " + classes.blue}>
              <route.icon className={classes.itemIcon} size="20" />
              <ListItemText
                primary={route.title}
                className={classes.itemText}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        ))}
      </div>
    </Drawer>
  );
};

export default Sidebar;

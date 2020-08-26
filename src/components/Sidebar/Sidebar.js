import React from "react";
import { NavLink } from "react-router-dom";
import { RiSurroundSoundLine as WalletLogo } from "react-icons/ri";
import {
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
  Drawer,
} from "@material-ui/core";

import routes from "routes";
import styles from "./Sidebar.module.css";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 260,
    backgroundColor: "rgba(0, 0, 0, 0.62)",
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: "15px",
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
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  console.log(theme);
  return (
    <Drawer
      variant="permanent"
      classes={{paper: classes.drawer}}
    >
      <div className={styles.LogoContainer}>
        <div className={styles.Logo}>
          <WalletLogo className={styles.LogoIcon} size="30" />
          <span className={styles.Title}>WALLET</span>
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
              <route.icon className={classes.itemIcon} size="25" />
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

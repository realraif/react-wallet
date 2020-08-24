import React from "react";
import { NavLink } from "react-router-dom";
import { RiSurroundSoundLine as WalletLogo } from "react-icons/ri";
import { ListItem, ListItemText, makeStyles } from "@material-ui/core";

import routes from "routes";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {

  const classes = makeStyles({
    itemLink: {
      width: "auto",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent",
      borderRadius: 2,
      fontWeight: "bold"
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
      color: "#FFF"
    },
    blue: {
      "&:hover,&:focus": {
        backgroundColor: "#00acc1"
      }
    },
    active: {
      blue: {
        backgroundColor: "#00acc1",
      }
    },
    itemText: {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: "#FFF"
    },
  })();

  return (
    <div className={styles.Sidebar}>
      <div className={styles.LogoContainer}>
        <div className={styles.Logo}>
          <WalletLogo className={styles.LogoIcon} size="30" />
          <span className={styles.Title}>WALLET</span>
        </div>
      </div>
      <div className={styles.Menu}>
        {routes.map((route) => (
          <NavLink to={route.path} activeClassName={classes.active} style={{textDecoration: 'none'}}>
            <ListItem button className={classes.itemLink + " " + classes.blue}>
              <route.icon className={classes.itemIcon} size="25" />
              <ListItemText
                primary={route.title}
                className={classes.itemText}
                disableTypography={true}
              />
            </ListItem>
            {/* <button className={styles.MenuButton}>
              <route.icon size="25" />
              <span className={styles.ButtonText}>{route.title}</span>
            </button> */}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

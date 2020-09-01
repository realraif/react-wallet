import React, { useContext } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { RiSurroundSoundLine as WalletLogo } from "react-icons/ri";
import { AiOutlineArrowLeft as ArrowButton } from "react-icons/ai";
import { ListItem, ListItemText, Drawer, IconButton } from "@material-ui/core";

import { LayoutContext } from "context/LayoutContext";
import routes from "routes";
import { useSidebarStyles } from "../Layout/styles";

const Sidebar = (props) => {
  const { toggleSidebar, isSidebarOpen } = useContext(LayoutContext);
  const classes = useSidebarStyles();

  const arrowButton = (
    <IconButton
      color="inherit"
      className={clsx(classes.arrowButton, {
        [classes.visible]: props.isSmallScreen,
      })}
      aria-label="close drawer"
      onClick={toggleSidebar}
      edge="start"
    >
      <ArrowButton size="15" />
    </IconButton>
  );

  return (
    <Drawer
      variant={props.isSmallScreen ? "temporary" : "permanent"}
      open={isSidebarOpen}
      className={clsx(classes.drawerContainer, {
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
      <div className={classes.logoContainer}>
        {arrowButton}
        <div className={classes.logo}>
          <WalletLogo className={classes.logoIcon} size="25" />
          <span className={classes.logoTitle}>wallet.</span>
        </div>
      </div>
      <div className={classes.menu}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            activeClassName={classes.active}
            style={{ textDecoration: "none" }}
          >
            <ListItem button className={classes.itemLink}>
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

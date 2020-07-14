import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.LogoContainer}></div>
      <div className={styles.Menu}>
        {routes.map((route) => (
          <Link to={route.path} activeClassName="active">
            <button className={styles.MenuButton}>
              <i className={route.icon} />
              <p>{route.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

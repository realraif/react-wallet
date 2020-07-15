import React from "react";
import { Link } from "react-router-dom";
import { RiSurroundSoundLine as WalletLogo } from 'react-icons/ri';

import routes from "routes";

import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
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
          <Link to={route.path} activeClassName="active">
            <button className={styles.MenuButton}>
              <route.icon size="25" />
              <span className={styles.ButtonText}>{route.title}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Styles from './Sidebar.module.css'

const Sidebar = ( props ) => {
  return(
    <div className={Styles.Sidebar}>
      <div className={Styles.LogoContainer}></div>
    </div>
  );
};

export default Sidebar;

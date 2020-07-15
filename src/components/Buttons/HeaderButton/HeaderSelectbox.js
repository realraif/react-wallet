import React from "react";
import styles from './HeaderButton.module.css';

const HeaderSelectBox = (props) => {
  return (
    <select className={styles.Button}>
      {props.children}
    </select>
  );
};

export default HeaderSelectBox;

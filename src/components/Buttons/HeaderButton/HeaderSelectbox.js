import React from "react";
import styles from './HeaderButton.module.css';

const HeaderSelectBox = (props) => {
  return (
    <select className={styles.Button} onChange={(event) => props.onSelectOption(event.target.value)}>
      {props.children}
    </select>
  );
};

export default HeaderSelectBox;

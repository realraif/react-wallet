import React from "react";

import styles from "./SelectBox.module.css";

const SelectBox = (props) => {
  return (
    <div className={styles.SelectBox}>
      {props.icon ? <props.icon className={styles.Icon} /> : null}
      <select onChange={props.onSelect}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectBox;

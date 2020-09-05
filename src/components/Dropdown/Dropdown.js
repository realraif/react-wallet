import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHeaderStyles } from "../Layout/styles";

const RWDropdown = (props) => {
  const classes = useHeaderStyles();
  
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className={classes.dropDown}
      >
        Account
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Transfer money</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RWDropdown;

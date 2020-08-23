import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import { AppBar, Toolbar } from "@material-ui/core";

import { Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";

import firebase from "firebase.js";
import { UserContext } from "context/UserContext";
import { LayoutContext } from "context/LayoutContext";
import SelectBox from "components/SelectBox/SelectBox";

import styles from "./Header.module.css";

const Header = ({ history, title, setDataTimeFrame }) => {
  const logtout = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().signOut();
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(UserContext);
  const { toggleSidebar } = useContext(LayoutContext);

  return (
    <AppBar position="sticky" elevation={0} className={styles.Header}>
      <Toolbar>
        <div className={styles.LogoContainer}></div>
        sdfgßß
      </Toolbar>
    </AppBar>

    // <Navbar fluid className={styles.Header}>
    //   <div className={styles.LeftSide}>
    //     <div className={styles.Title} onClick={toggleSidebar}>{title}</div>
    //     <SelectBox
    //       className={styles.SelectBox}
    //       onSelect={setDataTimeFrame}
    //       icon={AiOutlineClockCircle}
    //     >
    //       <option>24 hours</option>
    //       <option>past week</option>
    //       <option>past 30 days</option>
    //     </SelectBox>
    //   </div>
    //   <div className={styles.RightSide}>
    //     <div>{currentUser.email}</div>
    //     <NavDropdown title="Account" className={styles.DropDown}>
    //       <NavDropdown.Item selected="selected">
    //         Manage bank accounts
    //       </NavDropdown.Item>
    //       <NavDropdown.Item>Transfer money</NavDropdown.Item>
    //       <NavDropdown.Divider />
    //       <NavDropdown.Item>Settings</NavDropdown.Item>
    //     </NavDropdown>
    //     <button className={styles.HeaderButton} onClick={logtout}>
    //       Log out
    //     </button>
    //   </div>
    // </Navbar>
  );
};

export default withRouter(Header);

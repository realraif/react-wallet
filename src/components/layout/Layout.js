import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Styles from './Layout.module.css'

// pages
import Dashboard from "../../pages/Dashboard/Dashboard";

function Layout(props) {

  return (
    <div className={Styles.Layout}>
      <Header/>
      <Sidebar />
      <div className={Styles.Content}>
        <Switch>
          <Route path="/app/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(Layout);

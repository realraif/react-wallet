import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/Dashboard/Dashboard";

function Layout(props) {

  return (
    <div>
      <Header/>
      <Sidebar />
      <Switch>
        <Route path="/app/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(Layout);

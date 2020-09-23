import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./components/Layout/Layout";
import { defaultRoute } from "routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to={`/app/${defaultRoute}`} />}
        />
        <Route
          exact
          path="/app"
          render={() => <Redirect to={`/app/${defaultRoute}`} />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/app" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

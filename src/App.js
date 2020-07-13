import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Layout from './components/Layout/Layout'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to='/app' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

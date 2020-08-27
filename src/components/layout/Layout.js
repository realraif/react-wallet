import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import routes from "routes";
import useStyles from "./styles";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

const Layout = (props) => {
  const [timeFrame, setTimeFrame] = useState({});
  const classes = useStyles();

  const setDataTimeFrame = (timeFrame) => {
    setTimeFrame(timeFrame);
  };

  const getPageTitle = (currentPath) => {
    for (let i = 0; i < routes.length; i++) {
      if (currentPath.indexOf(routes[i].path) >= 0) {
        return routes[i].title;
      }
    }
    return "Wallet";
  };

  return (
    <div className={classes.layout}>
      <Header
        title={getPageTitle(props.location.pathname)}
        setDataTimeFrame={setDataTimeFrame} />
      <Sidebar routes={routes} />
      <main className={classes.content}>
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                render={(props) => (
                  <prop.component {...props} timeFrame={timeFrame} />
                )}
                key={key}
              />
            );
          })}
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(Layout);

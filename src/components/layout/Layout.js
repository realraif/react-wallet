import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import styles from "./Layout.module.css";
import routes from "../../routes";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
  const [timeFrame, setTimeFrame] = useState({});

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
    <div className={styles.Layout}>
      <Header
        title={getPageTitle(props.location.pathname)}
        setDataTimeFrame={setDataTimeFrame}
      />
      <Sidebar routes={routes} />
      <div className={styles.Content}>
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
      </div>
    </div>
  );
};

export default withRouter(Layout);

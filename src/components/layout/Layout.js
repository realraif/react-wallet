import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import routes from "routes";
import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";


const Layout = (props) => {
  var [isSmallScreen, setSmallScreen] = useState(true);
  const [timeFrame, setTimeFrame] = useState({});
  var theme = useTheme();
  const classes = useStyles();

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

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
        isSmallScreen={isSmallScreen}
        title={getPageTitle(props.location.pathname)}
        setDataTimeFrame={setDataTimeFrame}
      />
      <Sidebar routes={routes} isSmallScreen={isSmallScreen} />
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

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isUnderbreakpoint = windowWidth < breakpointWidth;

    if (isUnderbreakpoint && !isSmallScreen) {
      setSmallScreen(true);
    } else if (!isUnderbreakpoint && isSmallScreen) {
      setSmallScreen(false);
    }
  }
};

export default withRouter(Layout);

import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/styles";

import routes from "routes";
import useStyles from "./styles";
import { LayoutContext } from "context/LayoutContext";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";


const Layout = (props) => {
  var [screenSize, setScreenSize] = useState(true);
  const [timeFrame, setTimeFrame] = useState({});
  const { openSideBar } = useContext(LayoutContext);
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
        isSmallScreen={screenSize == 'sm'}
        title={getPageTitle(props.location.pathname)}
        setDataTimeFrame={setDataTimeFrame}
      />
      <Sidebar routes={routes} isSmallScreen={screenSize == 'sm'} />
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
    const windowWidth = window.innerWidth;
    const isUnderSmallBreakpoint = windowWidth < theme.breakpoints.values.sm;
    const isUnderMediumBreakpoint = windowWidth < theme.breakpoints.values.md;
    const currentScreenSize = isUnderSmallBreakpoint ? "sm" : isUnderMediumBreakpoint ? "md" : "lg";

    if (currentScreenSize !== screenSize) {
      setScreenSize(currentScreenSize);
      openSideBar(currentScreenSize !== "md");
    }
  }
};

export default withRouter(Layout);

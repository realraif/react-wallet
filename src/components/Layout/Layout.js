import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/styles";

import routes from "routes";
import timeFrames from "constants/timeFrames";
import useStyles from "./styles";
import { LayoutContext } from "context/LayoutContext";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

const Layout = ({ location, isLoading }) => {
  const timeFrameIndex = getSavedTimeframe();
  const [timeFrame, setTimeFrame] = useState(timeFrames[timeFrameIndex]);
  var [screenSize, setScreenSize] = useState(true);
  const { openSideBar } = useContext(LayoutContext);
  const theme = useTheme();
  const classes = useStyles();

  const onInit = () => {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanUp() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  };

  useEffect(onInit, []);

  const handleTimeFrameChange = (timeFrame, e) => {
    localStorage.setItem("walletTimeFrame", timeFrame.value);
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

  const renderRoutes = () => {
    if (isLoading) {
      return <span>Loading...</span>;
    } else {
      return (
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
      );
    }
  };

  return (
    <div className={classes.layout}>
      <Header
        timeFrames={timeFrames}
        initialTimeFrameIndex={timeFrameIndex}
        isSmallScreen={screenSize === "sm"}
        title={getPageTitle(location.pathname)}
        handleTimeFrameChange={handleTimeFrameChange}
        isLoading={isLoading}
      />
      <Sidebar routes={routes} isSmallScreen={screenSize === "sm"} />
      <main className={classes.content}>{renderRoutes()}</main>
    </div>
  );

  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const isUnderSmallBreakpoint = windowWidth < theme.breakpoints.values.sm;
    const isUnderMediumBreakpoint = windowWidth < theme.breakpoints.values.md;
    const currentScreenSize = isUnderSmallBreakpoint
      ? "sm"
      : isUnderMediumBreakpoint
      ? "md"
      : "lg";

    if (currentScreenSize !== screenSize) {
      setScreenSize(currentScreenSize);
      openSideBar(currentScreenSize !== "md");
    }
  }
};

const getSavedTimeframe = () => {
  const currentTimeFrame = localStorage.getItem("walletTimeFrame");
  const timeFrameIndex = timeFrames.findIndex(x => x.value.toString() === currentTimeFrame);
  return timeFrameIndex || 0;
}

export default withRouter(Layout);

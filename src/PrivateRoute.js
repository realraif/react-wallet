import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, isPending } = useContext(UserContext);

  const renderRoute = (routeProps) => {
    if (isPending) {
      return <RouteComponent isLoading {...routeProps} />;
    } else if (!!currentUser) {
      return <RouteComponent {...routeProps} />;
    }
    return <Redirect to={"/login"} />;
  };

  return <Route {...rest} render={renderRoute} />;
};

export default PrivateRoute;

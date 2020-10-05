import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, isPending } = useContext(UserContext);

  const renderRoute = (routeProps) => {
    return !!currentUser ? (
      <RouteComponent {...routeProps} />
    ) : (
      <Redirect to={"/login"} />
    );
  };

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isPending ? "loading..." : renderRoute(routeProps)
      }
    />
  );
};

export default PrivateRoute;

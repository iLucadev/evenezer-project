import React from "react";
import { Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  // TODO: Use state manager
  // TODO: make and use a middleware for manage storage
  const token = localStorage.getItem("user_uid");

  return token ? <Route {...props} /> : <Redirect to="/login" />;
};

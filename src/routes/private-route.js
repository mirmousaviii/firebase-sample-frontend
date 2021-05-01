import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  const token = localStorage.getItem("refresh-token");

  return token ? <Route {...props} /> : <Redirect to="/login" />;
};

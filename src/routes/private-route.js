import React from "react";
import { Route, Redirect } from "react-router-dom";
import {auth} from '../utils/firebase';

export const PrivateRoute = (props) => {
  let user = auth.currentUser;
  return user ? <Route {...props} /> : <Redirect to="/login" />;
};

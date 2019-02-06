import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../services/authService";
const PrtectedRoute = ({ path, component: Component, render }) => {
  return (
    <Route
      path={path}
      render={props => {
        if (!getCurrentUser()) return <Redirect to="/auth/sign-in" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default PrtectedRoute;

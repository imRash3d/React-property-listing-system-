import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home/homepage";
import Admin from "./admin/Admin";
import Auth from "./auth/auth";
import NotFound from "./notFound/notFound";
class RouterModule extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default RouterModule;

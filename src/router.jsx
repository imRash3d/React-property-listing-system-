import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/homepage";
import Admin from "./admin/Admin";
import Auth from "./auth/auth";
class RouterModule extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default RouterModule;

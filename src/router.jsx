import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/homepage";
class RouterModule extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    );
  }
}

export default RouterModule;

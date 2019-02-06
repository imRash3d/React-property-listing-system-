import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home/homepage";
import Admin from "./admin/Admin";
import Auth from "./auth/auth";
import NotFound from "./notFound/notFound";
import PrtectedRoute from "./modules/protectedRoute";
class RouterModule extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      user
    });
    console.log(user);
  }
  render() {
    const { user } = this.state;
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrtectedRoute path="/admin" type="admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default RouterModule;

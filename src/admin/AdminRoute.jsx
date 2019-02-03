import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllListing from "./pages/allListings";
import Booking from "./pages/booking";
class AdminRoute extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin/booking" component={Booking} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/listings" component={AllListing} />
          {/* <Route path="/" component={Dashboard} />
          <Redirect from="" exact to="/dashboard" /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default AdminRoute;

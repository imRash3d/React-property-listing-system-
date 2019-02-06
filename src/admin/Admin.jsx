import React, { Component } from "react";
import "../admin/admin.css";
import TopHeader from "./layouts/TopHeader";
import Sidebar from "./layouts/AdminSidebar";
import AllListing from "./pages/allListings";
import PropertyDetails from "./pages/propertyDetails";
import PropertyForm from "./pages/propertyForm";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/booking";
import Services from "./pages/services";
import BookingDetails from "./pages/bookingDetails/bookingDetails";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="container-fluid ">
        <TopHeader history={this.props.history} />
          <div className="row ">
            <Sidebar />
            <div
              className="col-md-10 col-sm-11 display-table-cell v-align"
              style={{ marginLeft: "215px" }}
            >
              <div className="row" />
              <div className="user-dashboard">
                <Switch>
                  <Route
                    path="/admin/property/details/:id"
                    component={PropertyDetails}
                  />
                  <Route path="/admin/edit/:id" component={PropertyForm} />
                  <Route path="/admin/booking/:id" component={BookingDetails} />
                  <Route path="/admin/services" component={Services} />
                  <Route path="/admin/booking" component={Booking} />
                  <Route path="/admin/listings" component={AllListing} />
                  <Route path="/admin/add" component={PropertyForm} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;

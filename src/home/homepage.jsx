import React, { Component } from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Slider from "./pages/homePage/slider";
import Home from "./pages/home";
import { Route, Switch, Redirect } from "react-router-dom";
import PropertyDetails from "./pages/details";
import User from "./pages/userDeatils/userDetails";
import PrtectedRoute from "../modules/protectedRoute";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="site-wrap">
        <Navbar />
        {/* <Slider /> */}
        <Switch>
          <Route path="/property/details/:id" component={PropertyDetails} />
          <PrtectedRoute history path="/user/:id" component={User} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

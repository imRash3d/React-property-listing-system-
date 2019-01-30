import React, { Component } from "react";
import Navbar from "./pages/layouts/navbar";
import Footer from "./pages/layouts/footer";
import Slider from "./pages/homePage/slider";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";
import PropertyDetails from "./pages/details";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="site-wrap">
        <Navbar />
        <Slider />
        <Switch>
          <Route path="/property/details/:id" component={PropertyDetails} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

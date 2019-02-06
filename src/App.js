import React, { Component } from "react";
import "./App.css";
import "./assets/fonts/icomoon/style.css";
import "./assets/css/animate.css";
import "./assets/css/aos.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/fonts/flaticon/font/flaticon.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RouterModule from "./router";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <RouterModule />
      </React.Fragment>
    );
  }
}

export default App;

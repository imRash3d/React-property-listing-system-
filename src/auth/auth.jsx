import React, { Component } from "react";
import "../auth/auth.css";
import Login from "./login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./signUp";
class Auth extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid auth-page">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <Switch>
                  <Route path="/auth/signin" component={Login} />
                  <Route path="/auth/sign-up" component={SignUp} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;

import React, { Component } from "react";
import Form from "../modules/form";
class SignUp extends Form {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title text-center">Sign Up</h5>
        <form className="form-signin">
          <div className="form-label-group">
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First  Name"
              required
              autoFocus
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last  Name"
              required
              autoFocus
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
              required
              autoFocus
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;

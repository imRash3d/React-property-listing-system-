import React, { Component } from "react";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h5 class="card-title text-center">Sign In</h5>
        <form class="form-signin">
          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>
          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div class="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              Remember password
            </label>
          </div>
          <button
            class="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;

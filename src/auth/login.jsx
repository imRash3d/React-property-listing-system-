import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title text-center">Sign In</h5>
        <form className="form-signin">
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

          {/* <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div> */}
          <div className="custom-control custom-checkbox mb-3">
            <p>
              Dont Have an Account ? <Link to="/auth/sign-up">Sign Up</Link>
            </p>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
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

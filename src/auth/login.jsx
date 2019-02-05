import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../services/authService";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };
  hnadleChange = e => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({
      account
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.login();
  };

  async login() {
    const { account } = this.state;
    const res = await SignIn(account);
    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
      res.rol_id === 2
        ? this.props.history.replace("/")
        : this.props.history.replace("/admin");
    }
  }
  componentDidMount(){
    if(localStorage.getItem('user')){
      this.props.history.replace("/")
    }
  }
  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h5 className="card-title text-center">Sign In</h5>
        <form onSubmit={this.onSubmit} className="form-signin">
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              name="email"
              value={account.email}
              onChange={this.hnadleChange}
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
              name="password"
              value={account.password}
              onChange={this.hnadleChange}
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

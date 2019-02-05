import React, { Component } from "react";
import Form from "../modules/form";
import { signUp } from "../services/authService";
import { toast } from "react-toastify";
class SignUp extends Form {
  state = {
    account: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",

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
   this.signUp();
  };

  async signUp() {
    const { account } = this.state;
    const res = await signUp(account);
    if(res && res.data){
      toast.success('User Created Successfully');
      this.props.history.push('/auth/signin')
    }
  }
  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h5 className="card-title text-center">Sign Up</h5>
        <form onSubmit={this.onSubmit} className="form-signin">
          <div className="form-label-group">
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First  Name"
              required
              autoFocus
              name="first_name"
              value={account.first_name}
              onChange={this.hnadleChange}
              required
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
              name="last_name"
              value={account.last_name}
              onChange={this.hnadleChange}
              required
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
              name="phone"
              value={account.phone}
              onChange={this.hnadleChange}
              required
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
              name="email"
              value={account.email}
              onChange={this.hnadleChange}
              required
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
              name="password"
              value={account.password}
              onChange={this.hnadleChange}
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

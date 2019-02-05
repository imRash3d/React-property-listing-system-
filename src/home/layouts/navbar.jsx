import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    user: null
  };
  handleLogout = () => {
    localStorage.removeItem("user");
    this.setState({
      user: null
    });
  };
  componentDidMount() {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    this.setState({
      user
    });
  }
  render() {
    const {user} = this.state
    return (
      <div className="site-navbar mt-4">
        <div className="container py-1">
          <div className="row align-items-center">
            <div className="col-8 col-md-8 col-lg-4">
              <h1 className="mb-0">
                <a href="index.html" className="text-white h2 mb-0">
                  <strong>
                    Homeland<span className="text-danger">.</span>
                  </strong>
                </a>
              </h1>
            </div>
            <div className="col-4 col-md-4 col-lg-8">
              <nav
                className="site-navigation text-right text-md-right"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/admin">Admin</Link>
                  </li>
                  <li>
                    {user ? (
                      <React.Fragment>
                        <p className="user-label">
                          Welcome {user.first_name}{" "}
                          <span className="logout" onClick={this.handleLogout}>
                            {" "}
                            Logout
                          </span>{" "}
                        </p>
                      </React.Fragment>
                    ) : (
                      <Link to="/auth/sign-in">Login</Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

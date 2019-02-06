import React, { Component } from "react";
class TopHeader extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    });
  };

  handleLogout = () => {
       localStorage.removeItem('user');
    this.props.history.replace("/");
  };
  render() {
    return (
      <div className=" top-header">
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
            </div>
          </div>
          <div className="col-md-4 admin-top-profile text-right">
            <img
              onClick={this.handleToggle}
              src="https://dashboard.zawiastudio.com/demo/img/avatar-72.jpg"
              alt=""
            />
            <div
              className="menubar"
              style={
                this.state.isOpen ? { display: "block" } : { display: "none" }
              }
            >
              <ul>
                <li>
                  <i className="fas  fa-user" /> Profile
                </li>
                <li>
                  <i className="fas  fa-cog" /> Settings
                </li>
                <li onClick={this.handleLogout}>
                  <i className="fas  fa-power-off" /> Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;

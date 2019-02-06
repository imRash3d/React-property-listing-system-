import React, { Component } from "react";
import "./userDetails.css";
import PersonalInfo from "./personal-info";
import { Route, Switch, Redirect } from "react-router-dom";
import AccountSettings from "./account-settings";
import {Link} from 'react-router-dom'
class User extends Component {
  state = {
    user_id: ""
  };
  componentDidMount() {
    this.setState({
      user_id: this.props.match.params.id
    });
  }
  render() {
      const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="container-fluid profile-body">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic text-center">
                <img
                  src="https://yt3.ggpht.com/a-/AAuE7mD2UqKrcMwj_NfPbow_WqAmkQL3vtcwNvTN2g=s900-mo-c-c0xffffffff-rj-k-no"
                  className="img-responsive"
                  alt=""
                />
              </div>

              <div className="profile-usertitle">
                <div className="profile-usertitle-name">{user.first_name} {user.last_name}</div>
                {/* <div className="profile-usertitle-job">Developer</div> */}
              </div>

              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Message
                </button>
              </div>

              <div className="profile-usermenu">
                <ul className="nav">
                  <li className="active">
                   <Link to={`/user/${this.state.user_id}/profile`}>
                      <i className="glyphicon glyphicon-home" />
                      Overview
                   </Link>
                  </li>
                  <li>
                   <Link to={`/user/${this.state.user_id}/account-settings`}>
                      <i className="glyphicon glyphicon-user" />
                      Account Settings
                   </Link>
                  </li>
                  <li>
                   <Link to="" target="_blank">
                      <i className="glyphicon glyphicon-ok" />
                      WishList
                   </Link>
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              <Switch>
                <Route
                  path="/user/:id/account-settings"
                  component={AccountSettings}
                />
                <Route path="/user/:id/profile" component={PersonalInfo} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

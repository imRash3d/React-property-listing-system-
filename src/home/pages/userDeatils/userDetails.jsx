import React, { Component } from 'react';
import './userDetails.css'
import PersonalInfo from './personal-info';
import {Route, Switch , Redirect} from 'react-router-dom'
import AccountSettings from './account-settings';
class User extends Component {
    state = {  }
    render() { 
        return ( <div className="container-fluid profile-body">
        <div className="row profile">
            <div className="col-md-3">
                <div className="profile-sidebar">
                   
                    <div className="profile-userpic text-cente">
                        <img src="https://yt3.ggpht.com/a-/AAuE7mD2UqKrcMwj_NfPbow_WqAmkQL3vtcwNvTN2g=s900-mo-c-c0xffffffff-rj-k-no" className="img-responsive" alt=""/>
                    </div>
           
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            Marcus Doe
                        </div>
                        <div className="profile-usertitle-job">
                            Developer
                        </div>
                    </div>
                
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-success btn-sm">Follow</button>
                        <button type="button" className="btn btn-danger btn-sm">Message</button>
                    </div>
                 
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <li className="active">
                                <a href="#">
                                <i className="glyphicon glyphicon-home"></i>
                                Overview </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="glyphicon glyphicon-user"></i>
                                Account Settings </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                <i className="glyphicon glyphicon-ok"></i>
                                Tasks </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="glyphicon glyphicon-flag"></i>
                                Help </a>
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </div>
            <div className="col-md-9">
                <div className="profile-content">
               <Switch>
                   <Route path="/accountsettings" component ={AccountSettings} />
                 <Route path="/"  component ={PersonalInfo} /> 
                 <Redirect from="/" to="/profile"   /> 
            </Switch>
                </div>
            </div>
        </div>
    </div> );
    }
}
 
export default User;
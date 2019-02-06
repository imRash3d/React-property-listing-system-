import React, { Component } from "react";
import { getUser } from "../../../services/authService";

class PersonalInfo extends Component {
  state = {
    user: {}
  };
  async componentDidMount() {
    const user_id = this.props.match.params.id;
    const user = await getUser(user_id);
    this.setState({
      user
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div className=" section-content">
        <h5 className="section-title">User Details</h5>
        <div className="row">
          <div className="col-lg-12 pl-4 pr-4 payment-detailsbody">
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{user.phone} </td>
                </tr>
                <tr>
                  <th>User Id</th>
                  <td>{user.uid}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;

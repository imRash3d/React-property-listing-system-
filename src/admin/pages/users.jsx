import React, { Component } from "react";
class Users extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state.users;
    return (
      <div className="container">
        <div className="row" />
        <div className="row">
          <div className="col-md-12 admin-table">
            <h3>All Bookings</h3>
            <table className="  table table-bordered table-hover">
              <thead>
                <tr>
                  <th>User id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(item => (
                  <tr key={item.id}>
                    <td>{item.uid}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;

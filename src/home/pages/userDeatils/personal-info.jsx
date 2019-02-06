import React, { Component } from "react";
class PersonalInfo extends Component {
  state = {};
  render() {
    return (
      <div className=" section-content">
        <h5 className="section-title">Customer Details</h5>
        <div className="row">
          <div className="col-lg-12 pl-4 pr-4 payment-detailsbody">
            <table className="table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Rashed</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>Rashed</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>4 </td>
                </tr>
                <tr>
                  <th>Created</th>
                  <td>34</td>
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

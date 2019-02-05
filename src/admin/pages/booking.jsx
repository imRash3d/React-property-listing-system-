import React, { Component } from "react";
import { getBookings } from "../../services/propertyService";
import { FORMAT_DATE } from "./../../modules/functions";
import { Link } from "react-router-dom";
class Booking extends Component {
  state = {
    bookings: []
  };
  async componentDidMount() {
    const bookings = await getBookings();
    this.setState({
      bookings
    });
  }
  render() {
    const { bookings } = this.state;
    return (
      <div className="container">
        <div className="row" />
        <div className="row">
          <div className="col-md-12 admin-table">
            <h3>All Bookings</h3>
            <table className="  table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Property id</th>
                  <th>User id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(item => (
                  <tr key={item.id}>
                    <td>{item.property_id}</td>
                    <td>{item.uid}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.email}</td>
                    <td>{FORMAT_DATE(item.created)}</td>

                    <td>
                      <Link to={`/admin/booking/${item.id}`}>
                        <i className="fas mr-3 pointer fa-eye" />
                      </Link>

                      <i className="fas mr-3  pointer fa-trash-alt" />
                    </td>
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

export default Booking;

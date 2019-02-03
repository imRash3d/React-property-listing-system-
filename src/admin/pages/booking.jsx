import React, { Component } from "react";
class Booking extends Component {
  state = {
    bookings: [
      {
        id: 22323,
        property_id: "123231231",
        user_id: 21324223,
        name: "rashed",
        email: "rashed@gmail.com",
        date: "2019-5-1"
      }
    ]
  };
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
                    <td>{item.user_id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>

                    <td>
                      {/* <Link to={`/admin/property/details/${item.id}`}>
                        <i className="fas mr-3 pointer fa-eye" />
                      </Link>
                      <Link to={`/admin/edit/${item.id}`}>
                        <i className="fas mr-3  pointer fa-pencil-alt" />
                      </Link> */}

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

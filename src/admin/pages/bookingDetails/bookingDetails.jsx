import React, { Component } from "react";
import "./bookingDetails.css";
import { getBooking, getProperty } from "../../../services/propertyService";
import { FORMAT_DATE } from "../../../modules/functions";
class BookingDetails extends Component {
  state = {
    booking: {},
    property: {}
  };
  async componentDidMount() {
    const booking_id = this.props.match.params.id;
    const booking = await getBooking(booking_id);
    const property = await getProperty(booking.property_id);
    console.log(property);
    this.setState({
      booking,
      property
    });
  }
  render() {
    const { booking, property } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="user-info">
                  <div className=" section-content">
                    <h5 className="section-title">Customer Details</h5>
                    <div className="row">
                      <div className="col-lg-12 pl-4 pr-4 payment-detailsbody">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Name</th>
                              <td>
                                {" "}
                                {booking.first_name} {booking.last_name}
                              </td>
                            </tr>
                            <tr>
                              <th>Email</th>
                              <td>{booking.email} </td>
                            </tr>
                            <tr>
                              <th>Phone</th>
                              <td>{booking.phone} </td>
                            </tr>
                            <tr>
                              <th>Created</th>
                              <td>{FORMAT_DATE(booking.created)} </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="propertyDetails">
                  <div className=" section-content">
                    <h5 className="section-title">Property Details</h5>
                    <div className="row">
                      <div className="col-lg-12 pl-4 pr-4 payment-detailsbody">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Property Id </th>
                              <td>{property.id}</td>
                            </tr>
                            <tr>
                              <th>Property Name</th>
                              <td>{property.name}</td>
                            </tr>
                            {property.offer_type && (
                              <tr>
                                <th>Offert Type</th>
                                <td>{property.offer_type.name}</td>
                              </tr>
                            )}
                            {property.listing_type && (
                              <tr>
                                <th>Listing Type</th>
                                <td>{property.listing_type.name}</td>
                              </tr>
                            )}
                            <tr>
                              <th>Price</th>
                              <td>{property.price}</td>
                            </tr>
                            <tr>
                              <th>Per Square Ft Price </th>
                              <td>{property.per_sqr_price}</td>
                            </tr>
                            <tr>
                              <th>Area (SQR FT)</th>
                              <td>{property.area}</td>
                            </tr>
                            <tr>
                              <th>Beds</th>
                              <td>{property.beds}</td>
                            </tr>
                            <tr>
                              <th>Baths</th>
                              <td>{property.baths}</td>
                            </tr>
                            <tr>
                              <th>Address</th>
                              <td>{property.address}</td>
                            </tr>
                            <tr>
                              <th>Description</th>
                              <td>{property.description}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetails;

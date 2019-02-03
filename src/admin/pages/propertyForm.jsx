import React, { Component } from "react";
import Form from "./../../modules/form";
import { getPropery } from "../../services/homeServices";
class PropertyForm extends Form {
  state = {
    data: {
      name: "",
      price: "",
      description: "",
      baths: "",
      beds: "",
      area: "",
      offer_type: "",
      listing_type: "",
      address: "",
      city: "",
      per_sqr_price: ""
    },

    offer_types: [{ id: 1, name: "Rent" }, { id: 2, name: "Sale" }],

    listing_types: [
      { id: 1, name: "Condo" },
      { id: 2, name: "Commercial Building" },
      { id: 3, name: "Land" }
    ],

    cities: [
      { id: 1, name: "New York" },
      { id: 2, name: "Brooklyn" },
      { id: 3, name: "London" },
      { id: 4, name: "Japan" },
      { id: 5, name: "Philippines" }
    ],
    listings: {},
    property_id: ""
  };
  doSubmit() {
    console.log(this.state.data);
    this.props.history.push("/admin/listings");
  }

  mapProperty(id) {
    const property = getPropery(id);
    const data = {
      name: property.name,
      price: property.price,
      description: property.description,
      baths: property.baths,
      beds: property.beds,
      area: property.area,
      offer_type: 1,
      listing_type: 2,
      address: property.address,
      city: 1,
      per_sqr_price: property.per_sqr_price
    };
    console.log(data);
    this.setState({
      data
    });
  }

  handleCancel = () => {
    this.props.history.push("/admin/listings");
  };

  componentDidMount() {
    const property_id = this.props.match.params.id;
    this.setState({
      property_id: property_id
    });
    if (property_id) {
      this.mapProperty(property_id);
    }
  }
  render() {
    const { cities, offer_types, listing_types, property_id } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          {property_id ? <h2> Edit Property </h2> : <h2> Add Property </h2>}
          <form onSubmit={this.handleSubmit} className="col-md-10 admin-form">
            {this.renderInput("name", "Name")}
            <div className="row">
              <div className="col-md-6">
                {this.renderInput("price", "Price")}
              </div>
              <div className="col-md-6">{this.renderInput("area", "Area")}</div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {this.renderInput("baths", "Baths")}
              </div>
              <div className="col-md-6">{this.renderInput("beds", "Beds")}</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {this.renderSelect("offer_type", "Offer Type", offer_types)}
              </div>
              <div className="col-md-6">
                {this.renderSelect(
                  "listing_type",
                  "Listing Type",
                  listing_types
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {this.renderSelect("city", "City", cities)}
              </div>
              <div className="col-md-6">
                {this.renderInput("per_sqr_price", "Per square Price")}
              </div>
            </div>
            {this.renderTextArea("address", "Address")}
            {this.renderTextArea("contact_info", "Contact Information")}
            <div className="row">
              <div className="col-md-6">{this.renderButton("Save")}</div>
              <div className="form-group col-md-6">
                <button
                  type="button"
                  onClick={this.handleCancel}
                  className="btn col-md-4 btn-danger"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PropertyForm;

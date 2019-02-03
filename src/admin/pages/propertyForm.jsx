import React, { Component } from "react";
import { toast } from "react-toastify";
import Form from "./../../modules/form";
import { getPropery } from "../../services/homeServices";
import { getListing } from "./../../services/homeServices";
import {
  getListingTypes,
  getCities,
  saveProperty,
  getProperty,
  EditProperty
} from "../../services/propertyService";
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
      per_sqr_price: "",
      image: "",
      contact_info: ""
    },
    offer_types: [{ id: 1, name: "Rent" }, { id: 2, name: "Sale" }],
    listing_types: [],
    cities: [],
    listings: {},
    property_id: ""
  };
  async doSubmit() {
    const { data: property, offer_types, listing_types, cities } = this.state;
    const obj = {
      name: property.name,
      price: property.price,
      description: property.description,
      baths: property.baths,
      beds: property.beds,
      area: property.area,
      offer_type: this.findObj(Number(property.offer_type), offer_types),
      listing_type: this.findObj(property.listing_type, listing_types),
      address: property.address,
      image: property.image,
      city: this.findObj(property.city, cities),
      per_sqr_price: property.per_sqr_price,
      contact_info: property.contact_info
    };
    if (this.state.property_id) {
      const { data } = await EditProperty(this.state.property_id, obj);
      this.showAlert(data, "Property  edited  Successfuly");
    } else {
      const { data } = await saveProperty(obj);
      this.showAlert(data, "Property added Successfuly");
    }
  }
  findObj(id, items) {
    return items.find(item => item.id === id);
  }

  showAlert(data, message) {
    data.name ? toast.success(message) : toast.error("Data can not be added ");
    setTimeout(() => {
      this.props.history.push("/admin/listings");
    }, 3000);
  }
  async mapProperty(id) {
    const property = await getProperty(id);
    if (!property) {
      this.props.history.push("/admin/listings");
      return;
    }
    const data = {
      name: property.name,
      price: property.price,
      description: property.description,
      baths: property.baths,
      beds: property.beds,
      area: property.area,
      offer_type: property.offer_type.id,
      listing_type: property.listing_type.id,
      city: property.city.id,
      address: property.address,
      image: property.image,
      per_sqr_price: property.per_sqr_price,
      contact_info: property.contact_info
    };
    this.setState({
      data
    });
  }

  handleCancel = () => {
    this.props.history.push("/admin/listings");
  };

  async componentDidMount() {
    const property_id = this.props.match.params.id;
    this.setState({
      property_id: property_id
    });
    if (property_id) {
      this.mapProperty(property_id);
    }

    this.setState({
      listing_types: await getListingTypes(),
      cities: await getCities()
    });
  }
  render() {
    const { cities, offer_types, listing_types, property_id } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          {property_id ? <h2> Edit Property </h2> : <h2> Add Property </h2>}
          <form onSubmit={this.handleSubmit} className="col-md-10 admin-form">
            {this.renderInput("name", "Name")}
            {this.renderInput("image", "Image")}
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
            {this.renderTextArea("description", "Description")}
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

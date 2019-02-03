import React, { Component } from "react";
import { toast } from "react-toastify";
import Form from "../../modules/form";
import { addListingTypes, addCities } from "../../services/propertyService";
class Services extends Form {
  state = {
    data: {
      name: ""
    },
    type: "listing_type"
  };
  async doSubmit() {
    if (this.state.type === "listing_type") {
      const { data } = await addListingTypes(this.state.data);
      this.showAlert(data, "Listing types added Successfuly");
      this.clearInputField();
    } else {
      let { data } = await addCities(this.state.data);
      this.showAlert(data, "City  added Successfuly");
      this.clearInputField();
    }
  }
  showAlert(data, message) {
    data.name ? toast.success(message) : toast.error("Data can not be added ");
    this.clearInputField();
  }
  clearInputField() {
    setTimeout(() => {
      const data = { ...this.state.data };
      data["name"] = "";
      this.setState({
        data
      });
    }, 3000);
  }
  onHadleChange = e => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <b>Select Types</b>
          </div>
          <div className="col-md-3">
            <label>
              <input
                onChange={this.onHadleChange}
                type="radio"
                name="optradio"
                value="listing_type"
                checked={this.state.type === "listing_type"}
              />
              Listing Types
            </label>
          </div>
          <div className="col-md-3">
            <label>
              <input
                onChange={this.onHadleChange}
                type="radio"
                name="optradio"
                value="city"
                checked={this.state.type === "city"}
              />
              Cities
            </label>
          </div>
        </div>
        <div className="row  mt-5 justify-content-center">
          <div className="col-md-12 text-center">
            {this.state.type === "listing_type" ? (
              <h2>Add Listing Type</h2>
            ) : (
              <h2>Add City</h2>
            )}
          </div>
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;

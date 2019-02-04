import React, { Component } from "react";
import { toast } from "react-toastify";
import Form from "./../../modules/form";
import { saveBooking } from "../../services/propertyService";
class ContactAgent extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    }
  };

  async doSubmit() {
    console.log("do");
    const { data } = this.state;
    data["property_id"] = this.props.property_id;
    data["created"] = new Date().toString();
    data["user_id"] = "test001";
    saveBooking(data).then(res => {
      if (res.data) {
        toast.success("Booking Saved Successfully");
        const reset = {
          first_name: "",
          last_name: "",
          email: "",
          phone: ""
        };
        setTimeout(() => {
          this.setState({
            data: reset
          });
        }, 3000);
      } else {
        toast.success("Booking  can not Saved ");
      }
    });
  }
  render() {
    return (
      <div className="Contact-form">
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name", "Last Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default ContactAgent;

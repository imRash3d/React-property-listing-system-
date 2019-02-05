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
      phone: "",
      message: ""
    }
  };

  async doSubmit() {
    let data;
    if (localStorage.getItem("user")) {
      data = JSON.parse(localStorage.getItem("user"));
      delete data['rol_id'];
      data["message"] = this.state.data.message;
     
    } else {
      data = this.state.data;
      data["uid"] = "Guest";
    }

    data["property_id"] = this.props.property_id;
    data["created"] = new Date().toString();
    saveBooking(data).then(res => {
      if (res.data) {
        toast.success("Message send  to contact agent  Successfully");
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
          {!localStorage.getItem("user") && (
            <div>
              {this.renderInput("first_name", "First Name")}
              {this.renderInput("last_name", "Last Name")}
              {this.renderInput("email", "Email")}
              {this.renderInput("phone", "Phone")}
              {this.renderTextArea("message", "Message")}
              {this.renderButton("Submit")}
            </div>
          )}

          {localStorage.getItem("user") && (
            <div>
              {this.renderTextArea("message", "Message")}
              {this.renderButton("Contact Agent")}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default ContactAgent;

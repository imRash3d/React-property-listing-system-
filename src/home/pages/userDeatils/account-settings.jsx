import React, { Component } from "react";
import Form from "../../../modules/form";
import { toast } from "react-toastify";
import { UpdateUser, getUser } from "../../../services/authService";
import FileUpload from "../../../modules/file-upload/file-upload";
class AccountSettings extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: ""
    },
    user_id: ""
  };
  async componentDidMount() {
    const user_id = this.props.match.params.id;
    const data = await getUser(user_id);
    this.setState({
      data,
      user_id: user_id
    });
  }
  async doSubmit() {
    UpdateUser(this.state.user_id, this.state.data).then(res => {
      if (res) {
        toast.success("User updated  Successfully");
      } else {
        toast.error("User  can not be Saved ");
      }
    });
    console.log(this.state.data);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <FileUpload />
        </div>
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name", "Last Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("phone", "Phone")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default AccountSettings;

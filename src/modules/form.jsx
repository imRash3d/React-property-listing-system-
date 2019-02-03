import React, { Component } from "react";
class Form extends Component {
  state = {
    data: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  };
  handleChnages = e => {
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({
      data
    });
  };
  renderInput(name, label, type = "text") {
    const { data } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input
          value={data[name]}
          type={type}
          name={name}
          onChange={this.handleChnages}
          className="form-control"
        />
      </div>
    );
  }

  renderButton(label) {
    return (
      <div className="form-group">
        <button className="btn col-md-4 btn-success"> {label}</button>
      </div>
    );
  }
  renderSelect(name, label, items) {
    const { data } = this.state;
    const selectList = [{ id: 0, name: "Select" }, ...items];
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <select
          className="form-control"
          name={name}
          onChange={this.handleChnages}
          value={data[name]}
        >
          {selectList.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  renderTextArea(name, label) {
    const { data } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <textarea
          name={name}
          value={data[name]}
          className="form-control"
          rows="5"
          id="comment"
          onChange={this.handleChnages}
        />
      </div>
    );
  }
}

export default Form;

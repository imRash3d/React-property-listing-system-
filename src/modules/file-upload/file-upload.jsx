import "./file-upload.css";
import React, { Component } from "react";
import axios from "axios";
class FileUpload extends Component {
  state = {
    selectedFile: null,
    progress: null,
    preview: "",
    isClose: true
  };

  onDrop = e => {
    console.log(e);
  };

  onSelectedFileChange = event => {
    console.log(event.target.files[0]);
    // this.setState({
    //   selectedFile: event.target.files[0]
    // });
    // console.log(document.getElementById('preview'))
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById("preview");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    document.getElementById("close-icon").style.display = "block";
  };
  onUploadFile = async () => {
    var progress = 0;
    const { selectedFile } = this.state;
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "mf32tepp");
    formData.append("api_key", "311689546381299");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/de99mryom/image/upload",
      formData
    );
    const { data } = await res;
    if (data) {
      this.setState({
        downloadURL: data.url
      });
    }
  };

  removePreview = () => {
    document.getElementById("preview").src = "";
    document.getElementById("close-icon").style.display = "none";
  };
  render() {
    const { downloadURL } = this.state;
    return (
      <div className="file-upload">
        <div className="upload-img-container">
          <img
            onClick={() => this.fileInput.click()}
            style={{ width: "300px" }}
            src="http://ajaxuploader.com/images/drag-drop-file.gif"
            alt=""
          />

          <input
            ref={fileInput => (this.fileInput = fileInput)}
            style={{ display: "none" }}
            type="file"
            onChange={this.onSelectedFileChange}
          />
          <div className="progress-bar">
            <span
              className="progress-bar-fill"
              style={{ width: `${this.state.progress}` }}
            />
          </div>
        </div>
        <div className="preview-img-container">
          <img
            style={{
              width: "210px",
              height: "165px",
              marginLleft: "50px"
            }}
            src={downloadURL}
            alt=""
            id="preview"
          />
          <span
            onClick={this.removePreview}
            style={{ display: "none" }}
            id="close-icon"
          >
            <i className="fa fa-times" />
          </span>
        </div>
        <button className="uploadBtn" onClick={this.onUploadFile}>
          Upload
        </button>
      </div>
    );
  }
}

export default FileUpload;

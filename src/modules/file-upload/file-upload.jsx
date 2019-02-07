import "./file-upload.css";
import React, { Component } from "react";
import firebase from "../../firebase";
class FileUpload extends Component {
  state = {
    selectedFile: null,
    progress: null,
    downloadURL:''
  };

  onDrop = e => {
    console.log(e);
  };

  onSelectedFileChange = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  onUploadFile = () => {
    var progress = 0;
    var storageRef = firebase.storage().ref();
    const { selectedFile } = this.state;
    var metadata = {
      contentType: selectedFile.type
    };
    const formData = new FormData();
    formData.append("image", selectedFile, selectedFile.name);
    var uploadTask = storageRef
      .child("images/" + selectedFile.name)
      .put(selectedFile, metadata);
    uploadTask.on(
      "state_changed",
      function(snapshot) {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: 
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        // Handle unsuccessful uploads
      },
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        
        });
        
      }
    );
    console.log(process);
  };

  render() {
    return (
      <div className="file-upload">
        <div className="upload-img-container">
          <img
            onClick={() => this.fileInput.click()}
            style={{ width: "300px" }}
            src="http://ajaxuploader.com/images/drag-drop-file.gif"
            alt=""
          />
          <img style={{ width: "300px" }} src="" alt="" />
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
        <button className="uploadBtn" onClick={this.onUploadFile}>
          Upload
        </button>
      </div>
    );
  }
}

export default FileUpload;

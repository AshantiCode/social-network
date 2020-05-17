import React from "react";
import axios from "./axios";
import firebase from "./firebaseConfig";
// import firebase from "firebase/app";
// import "firebase/storage";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }
    async uploadFile(e) {
        try {
            const file = document.getElementById("file");
            const uploadedFile = file.files[0];
            // const formData = new FormData();
            const storage = firebase.storage();
            const storageRef = storage.ref();

            async function fireBaseUpload() {
                const name = new Date() + "-" + uploadedFile.name;
                const storedImage = storageRef.child(name);

                let response = await storedImage.put(uploadedFile);
                let imageUrl = await storedImage.getDownloadURL();
                return imageUrl;
            }

            let self = this;
            fireBaseUpload().then(function (imageUrl) {
                const formData = new FormData();
                // attach inputs to formData
                formData.append("file", uploadedFile);
                formData.append("imageUrl", imageUrl);

                axios.post("/upload", formData).then(function (response) {
                    self.props.updateProfileUrl(response.data.url);
                });

                //Clear Input
                file.value = "";
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    handleChange(e) {
        this.setState({
            file: e.target.files[0],
        });
    }
    render() {
        return (
            <div className="upload-modal">
                <h1> Upload a Profile Pic</h1>
                <input
                    type="file"
                    accept="image/*"
                    id="file"
                    onChange={this.handleChange}
                />
                <button onClick={this.uploadFile}>Upload</button>
            </div>
        );
    }
}

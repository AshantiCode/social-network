import React from "react";

export default function ProfilePic(props) {
    let url;

    if (props.pictureUrl == null) {
        url = "/assets/default-img.png";
    } else {
        url = props.pictureUrl;
    }
    let name = props.first + "" + props.last;

    return <img src={url} alt={name} onDoubleClick={props.showUploader} />;
}

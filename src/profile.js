import React from "react";
import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";
// import FriendButton from "./Friendbutton";

export default function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-img-container">
                <ProfilePic
                    showUploader={props.showUploader}
                    pictureUrl={props.pictureUrl}
                    updateProfileUrl={props.updateProfileUrl}
                />
            </div>

            <div className="profile-wrapper">
                <h1 className="profile-welcome">
                    Welcome, Unicorn-<span>{props.first}</span>{" "}
                </h1>

                {props.bio && <p className="about-padding">About you:</p>}
            </div>

            <BioEditor
                bio={props.bio}
                updateBio={props.updateBio}
                toggleBioEditor={props.toggleBioEditor}
            />
        </div>
    );
}

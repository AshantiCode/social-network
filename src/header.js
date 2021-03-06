import React from "react";
import Profilepic from "./profilepic";
import OnlineUsers from "./onlineUsers";
import Wall from "./wall";

import { BrowserRouter, Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-logo-container">
                {" "}
                <img id="header-logo" src="/assets/unicorn-logo.png" />
            </div>
            <div className="nav-bar">
                <p onClick={props.toggleWall} className="link">
                    {" "}
                    Wall
                </p>
                <p onClick={props.toggleOnlineUser} className="link">
                    {" "}
                    Online
                </p>
                <Link to="/friends" className="link">
                    Friends
                </Link>
                <Link to="/chat" className="link">
                    Chat
                </Link>
                <Link to="/allusers" className="link">
                    Member
                </Link>
                <a href="/logout" className="link">
                    <p>Log Out</p>
                </a>

                <div className="header-pic-container">
                    <Link to="/">
                        <Profilepic
                            showUploader={props.showUploader}
                            pictureUrl={props.pictureUrl}
                            updateProfileUrl={props.updateProfileUrl}
                            id="header-img"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

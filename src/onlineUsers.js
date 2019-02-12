import React from "react";
import { connect } from "react-redux";
import { allOnlineUsers } from "./actions";

class OnlineUsers extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(allOnlineUsers());
    }

    render() {
        const { onlineUsers } = this.props;
        if (!onlineUsers) {
            return null;
        }

        const listOnlineUsers = (
            <div>
                {onlineUsers.map(user => {
                    return (
                        <div key={user.id}>
                            <img src={user.url || "/assets/default-img.png"} />
                            <p>
                                {user.first}
                                {user.last}
                            </p>
                        </div>
                    );
                })}
            </div>
        );

        return (
            <div>
                <div>Hi i am OnlineUsers, what the heck!!!!</div>
                <div>
                    {!onlineUsers.length && <h3>Nobody is online</h3>}
                    {onlineUsers && listOnlineUsers}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    console.log("state in onlineusers-comp:", state);
    return {
        onlineUsers: state.onlineUsers
    };
};

export default connect(mapStateToProps)(OnlineUsers);

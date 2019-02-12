import React from "react";
import { connect } from "react-redux";
import { allOnlineUsers } from "./actions";
import { Link } from 'react-router-dom';

class OnlineUsers extends React.Component {
    constructor() {
        super();
    
    }

    render() {
        const { onlineUsers } = this.props;
        if (!onlineUsers) {
            return null;
        }

        let userUrl = onlineUsers.id
        const listOnlineUsers = (
            
            <div className="list-online-users">
                {onlineUsers.map(user => {
                    let url = user.id
                    return (
                        <div key={user.id} className="online-user-card">
                            <div className="card-image-container">
                               <Link to={`/user/${user.id}`} > <img
                                    src={user.url || "/assets/default-img.png"}
                                    className="card-image"/> 
                               </Link>
                            </div>

                            <p className="card-text">
                            <div className='circle'/>
                                {user.first} {''}
                                {user.last}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
console.log('listOnlineUser: ', listOnlineUsers);
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

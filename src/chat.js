import React from "react";
import { connect } from "react-redux";
import { initSocket } from "./socket";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.socket = initSocket();
    }

    handleChange(e) {
        this.chatBox = e.target.value;
    }

    submit(e) {
        this.socket.emit("singleMessage", {
            message: this.chatBox,
            first: this.props.first,
            last: this.props.last,
            pic: this.props.url,
        });
        //clears the chatbox after submiting message
        document.querySelector(".chat-textarea").value = "";
    }

    componentDidUpdate() {
        if (!this.elem) {
            return null;
        }
        this.elem.scrollTop = this.elem.scrollHeight;
    }

    render() {
        const { messages } = this.props;

        if (!messages) {
            return null;
        } else {
            var chatList = (
                <div>
                    {messages.map((message) => (
                        <div key={message.id} className="message-container">
                            <img
                                src={message.url || "/assets/default-img.png"}
                                className="chat-image"
                            />
                            <div className="sender-info-flex">
                                <p className="chat-sender-info">
                                    {" "}
                                    {message.first}
                                </p>
                                <p> {message.messages} </p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div>
                <h1 className="chat-heading"> Chat-Room</h1>
                <div className="chat-wrapper">
                    <div
                        className="chat-window"
                        ref={(elem) => (this.elem = elem)}
                    >
                        {!!messages.length && chatList}
                    </div>
                    <div className="">
                        <textarea
                            placeholder="Type your Message..."
                            onChange={this.handleChange}
                            name="chatBox"
                            rows="7"
                            className="chat-textarea"
                        />
                    </div>
                    <button className="chat-btn" onClick={this.submit}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        messages: state.messages,
    };
};

export default connect(mapStateToProps)(Chat);

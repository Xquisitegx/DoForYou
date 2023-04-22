function ChatStart(props) {
    return (
        <>
            <div className="chat-messages">
                <div className="chat-messages-chatting">
                    <div className="chat-chatting">
                        <div className="chat-before-chat">
                            <div className="chat-before-chat-arrow">
                                <i className="fa-solid fa-arrow-left fa-3x chat-arrow" />
                            </div>
                            <div className="chat-before-chat-text">
                                <div className="chat-before-chat-main">
                                    <div className="chat-before-chat-main-greeting">
                                        Hello,
                                    </div>
                                    <div className="chat-before-chat-main-username">
                                        {props.firstname}
                                    </div>
                                </div>
                                <div className="chat-before-chat-sub">
                                    Please select a chat to start chatting.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatStart;

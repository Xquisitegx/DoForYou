import axios from "axios";
import Cookies from "universal-cookie";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Link, useNavigate } from "react-router-dom";

import "./Chat.css";
import { Button } from "../../Button";
import ChatStart from "./ChatStart";
import ContactPhoto from "./ContactPhoto";
import Navbar from "../../Navbar";

const socket = io.connect("http://localhost:8000");

function Chat() {
    const cookies = new Cookies();

    const [firstname, setFirstname] = useState("");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState(undefined);
    const [roomId, setRoomId] = useState(undefined);
    const [chatRooms, setChatRooms] = useState([]);
    const [opponent, setOpponent] = useState({});

    useEffect(() => {
        setFirstname(cookies.get("firstname"));
        setRoomId(cookies.get("roomId"));
        axios.get(`http://localhost:8000/api/chat/rooms/getParticipatedRooms/${cookies.get("jwt")}`).then((data) => {
            setChatRooms(data.data.rooms);
        });
    }, []);

    useEffect(() => {
        if (roomId !== undefined) {
            socket.emit("join_room", { roomId, firstname });
            socket.on("send_previous_messages", (messages) => {
                setMessages(
                    messages.map((message) => {
                        return {
                            message: message.message,
                            sender: message.sender.firstname,
                        };
                    })
                );
            });
        }
    }, [roomId]);

    useEffect(() => {
        socket.on("retrieve_message", (msg) => {
            if (messages !== undefined) setMessages([...messages, msg]);
        });
    }, [messages, socket]);

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="chat">
                    <div className="chat-container">
                        {/* Start */}
                        <div className="chat-wrapper">
                            <div className="chat-contacts">
                                <div className="chat-contacts-title">Chats</div>
                                {chatRooms.map((room) => {
                                    let classname = "chat-contacts-person ";
                                    if (room._id === roomId) classname += "selected";

                                    const title = room.participants.filter((participant) => {
                                        return participant.user.firstname !== firstname;
                                    });

                                    return (
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            onClick={() => {
                                                cookies.set("roomId", room._id, { path: "/" });
                                                cookies.set("opponentId", title[0].user._id);
    
                                                window.location.reload();
                                            }}
                                        >
                                            <div className={classname}>
                                                <ContactPhoto username={title[0].user} />
                                                <div className="chat-contacts-person-name">
                                                    {title[0].user.firstname}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                            {roomId === undefined ? (
                                <ChatStart firstname={firstname} />
                            ) : (
                                <div className="chat-messages">
                                    {/*  */}
                                    {/*  */}
                                    <div className="chat-messages-chatting-after">
                                        <div className="chat-chatting">
                                            {/* after select chatting */}
                                            {messages &&
                                                messages.map((message) => {
                                                    let classname1 = "chat-message-box ";
                                                    let classname2 = "chat-message-from-";
                                                    if (message.sender === firstname) {
                                                        classname1 += "me";
                                                        classname2 += "me";
                                                    } else {
                                                        classname1 += "sender";
                                                        classname2 += "other";
                                                    }

                                                    return (
                                                        <>
                                                            {/*  */}
                                                            {/*  */}
                                                            <div className={classname1}>
                                                                <div className={classname2}>
                                                                    {message.message !== "~|+_" ? (
                                                                        message.message
                                                                    ) : (
                                                                        <>
                                                                            <div className="interest-alert-message">
                                                                                {message.sender} is interested in your
                                                                                task.
                                                                                <br />
                                                                                You can check the reviews about
                                                                                <br />
                                                                                performer to confirm if this performer
                                                                                <br />
                                                                                is suitable person to help you :)
                                                                                <br />
                                                                                <br />
                                                                                If you'd like to accept,
                                                                            </div>
                                                                            <div className="interest-alert-message-btn">
                                                                                <Button
                                                                                    buttonStyle="btn--primary-blue"
                                                                                    buttonSize="btn--medium-bold"
                                                                                    buttonRadius="btn--square"
                                                                                    onClick={() => {
                                                                                        axios.post(
                                                                                            "http://localhost:8000/api/tasks/assignPerformer",
                                                                                            {
                                                                                                token: cookies.get(
                                                                                                    "jwt"
                                                                                                ),
                                                                                                roomId,
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    Accept !
                                                                                </Button>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            socket.emit("send_message", {
                                                roomId,
                                                firstname,
                                                message: text,
                                            });
                                            setMessages([
                                                ...messages,
                                                {
                                                    message: text,
                                                    sender: firstname,
                                                },
                                            ]);
                                            setText("");
                                        }}
                                    >
                                        <div className="chat-message-input-box">
                                            <input
                                                className="chat-input"
                                                type="text"
                                                placeholder="Type your message here"
                                                onChange={(e) => {
                                                    setText(e.target.value);
                                                }}
                                                value={text}
                                            />
                                            <Button
                                                buttonStyle="btn--secondary-dark"
                                                buttonSize="btn--medium-bold"
                                                buttonRadius="btn--square"
                                                type="submit"
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                        {/* End */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;

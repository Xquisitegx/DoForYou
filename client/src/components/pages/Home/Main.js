import React from "react";
import { Button } from "../../Button";
import "../../../App.css";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    return (
        <div className="main-container">
            <div className="main-image">
                <img
                    className="main-image-png"
                    src={process.env.PUBLIC_URL + "images/main-home.png"}
                    alt="main"
                />
            </div>
            <div className="main-content">
                <div className="main-text">
                    <h2>Let us free you from worries</h2>
                    <h1>DoForYou</h1>
                    <div className="deco-cursor">
                        <div className="deco-cursor-line">
                            <div className="deco-cursor-text">
                                <div className="deco-cursor-text-block">
                                    <Link
                                        className="link-to-about-us"
                                        to="/about-us"
                                    >
                                        How?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-btns">
                    <div
                        className="main-get-started-btn-box"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        <div className="main-get-started-btn">
                            <div className="main-get-started-btn-name">
                                GET STARTED
                            </div>
                        </div>
                    </div>
                    <div
                        className="main-contact-us-btn-box"
                        onClick={() => {
                            navigate("/contact-us");
                        }}
                    >
                        <div className="main-contact-us-btn">
                            <div className="main-contact-us-btn-name">
                                CONTACT US
                            </div>
                            <div className="main-contact-us-btn-icon">
                                <i className="fa-solid fa-comments chat-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

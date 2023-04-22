import React from "react";
import { Button } from "../../Button";
import "./Categories.css";

function Categrories() {
    return (
        <div className="categories">
            <div className="categories-container">
                <div className="categories-wrapper">
                    <div className="categories-title">
                        <h1 className="title-main">Categories</h1>
                        <h5 className="title-sub">
                            15 categories are here for you with honest reviews:
                        </h5>
                    </div>
                    <div className="categories-list">
                        <div className="categories-list-row">
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-box cate-icon" />
                                    <div className="categories-btn-name">
                                        Courier Services
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-truck cate-icon" />
                                    <div className="categories-btn-name">
                                        Cargo Transportation
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-car-side cate-icon" />
                                    <div className="categories-btn-name">
                                        Transport Repair
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-star cate-icon" />
                                    <div className="categories-btn-name">
                                        Event and Promotions
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="categories-list-row">
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-desktop cate-icon" />
                                    <div className="categories-btn-name">
                                        Computer
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-laptop-code cate-icon" />
                                    <div className="categories-btn-name">
                                        Software Development
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-pen-fancy cate-icon" />
                                    <div className="categories-btn-name">
                                        Design
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-camera-retro cate-icon" />
                                    <div className="categories-btn-name">
                                        Photo, Video and Audio
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="categories-list-row">
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-hammer cate-icon" />
                                    <div className="categories-btn-name">
                                        Repair and Construction
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-broom cate-icon" />
                                    <div className="categories-btn-name">
                                        Cleaning and Household
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-plug cate-icon" />
                                    <div className="categories-btn-name">
                                        Installation
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-laptop cate-icon" />
                                    <div className="categories-btn-name">
                                        Repair of Digital Equipment
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="categories-list-row">
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-headset cate-icon" />
                                    <div className="categories-btn-name">
                                        Virtual Assistant
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-face-smile-beam cate-icon" />
                                    <div className="categories-btn-name">
                                        Beauty and Health
                                    </div>
                                </button>
                            </div>
                            <div className="categories-list-btn-box">
                                <button className="categories-btn-content">
                                    <i className="fa-solid fa-book cate-icon" />
                                    <div className="categories-btn-name">
                                        Tutors and Training
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categrories;

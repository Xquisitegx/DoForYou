import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./TasksAsPerformer.css";

function TasksAsPerformer() {
    return (
        <>
            <div id="container">
                <Navbar />

                <div className="tasks-performer">
                    <div className="tasks-performer-container">
                        <div className="tasks-performer-wrapper">
                            <div className="tasks-performer-title">
                                <h1 className="tasks-performer-title-main">
                                    My tasks
                                </h1>
                                <h5 className="tasks-performer-title-sub">
                                    <div className="tasks-customer-title-sub-text-upper">
                                        Check the tasks what you've assigned
                                    </div>
                                    <div className="tasks-customer-title-sub-text-lower">
                                        and review the customer after completing
                                        the task
                                    </div>
                                </h5>
                            </div>
                            <div className="tasks-performer-role-container">
                                <div className="tasks-performer-role-box">
                                    <div className="role-filter">
                                        <Link to="/my-tasks-customer">
                                            <button className="tasks-performer-role-customer-button">
                                                As a customer
                                            </button>
                                        </Link>
                                        <Link to="/my-tasks-performer">
                                            <button className="tasks-performer-role-performer-button">
                                                As a performer
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="tasks-performer-search-container">
                                <div className="tasks-performer-search-wrap">
                                    <div className="tasks-performer-search-box">
                                        <input
                                            type="text"
                                            className="tasks-performer-search-input"
                                            placeholder="Search the keyword"
                                        />
                                        <div className="tasks-performer-search-btn-box">
                                            <i class="fa-solid fa-magnifying-glass tasks-performer-search-btn"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tasks-performer-content">
                                <div className="tasks-performer-left-content">
                                    <div className="tasks-performer-left-content-title">
                                        Assigned
                                    </div>
                                    <div className="tasks-performer-left-content-list">
                                        {/* My tasks 1 */}
                                        <div className="tasks-performer-left-list-item">
                                            <div className="tasks-performer-left-list-item-top">
                                                <div className="tasks-performer-left-list-item-title">
                                                    Create a turnkey website
                                                </div>
                                                <div className="tasks-performer-left-list-item-price">
                                                    <div className="tasks-performer-left-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-performer-left-price-number">
                                                        225.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-performer-left-list-item-bottom">
                                                <div className="tasks-performer-left-list-item-desc">
                                                    <div className="tasks-performer-left-list-item-desc-address">
                                                        Can be done remotely
                                                    </div>
                                                    <div className="tasks-performer-left-list-item-desc-when">
                                                        <div className="tasks-performer-left-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-performer-left-list-item-desc-date-time">
                                                            <div className="tasks-performer-left-list-item-desc-starting-date">
                                                                Jan 4, 2023
                                                                12:00
                                                            </div>
                                                            <div className="tasks-performer-left-list-item-desc-ending-date">
                                                                - Jan 10, 2023
                                                                23:59
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tasks-performer-right-list-item-performer">
                                                    <div className="tasks-performer-right-list-done-by">
                                                        Written by
                                                    </div>
                                                    <div className="tasks-performer-right-list-item-performer-name">
                                                        Michael D.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* My tasks 2 */}
                                        <div className="tasks-performer-left-list-item">
                                            <div className="tasks-performer-left-list-item-top">
                                                <div className="tasks-performer-left-list-item-title">
                                                    Leetcode Tutor
                                                </div>
                                                <div className="tasks-performer-left-list-item-price">
                                                    <div className="tasks-performer-left-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-performer-left-price-number">
                                                        150.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-performer-left-list-item-bottom">
                                                <div className="tasks-performer-left-list-item-desc">
                                                    <div className="tasks-performer-left-list-item-desc-address">
                                                        Can be done remotely
                                                    </div>
                                                    <div className="tasks-performer-left-list-item-desc-when">
                                                        <div className="tasks-performer-left-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-performer-left-list-item-desc-date-time">
                                                            <div className="tasks-performer-left-list-item-desc-starting-date">
                                                                Jan 17, 2023
                                                                00:00
                                                            </div>
                                                            <div className="tasks-performer-left-list-item-desc-ending-date">
                                                                - Feb 17, 2023
                                                                23:59
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tasks-performer-right-list-item-performer">
                                                    <div className="tasks-performer-right-list-done-by">
                                                        Written by
                                                    </div>
                                                    <div className="tasks-performer-right-list-item-performer-name">
                                                        Edward T.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tasks-performer-right-content">
                                    <div className="tasks-performer-right-content-title">
                                        Completed
                                    </div>
                                    <div className="tasks-performer-right-content-list">
                                        {/* My tasks 1 */}
                                        <div className="tasks-performer-right-list-item">
                                            <div className="tasks-performer-right-list-item-top">
                                                <div className="tasks-performer-right-list-item-title">
                                                    Website logo design
                                                </div>
                                                <div className="tasks-performer-right-list-item-price">
                                                    <div className="tasks-performer-right-price-tag">
                                                        $
                                                    </div>
                                                    <div className="tasks-performer-right-price-number">
                                                        90.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tasks-performer-right-list-item-bottom">
                                                <div className="tasks-performer-right-list-item-desc">
                                                    <div className="tasks-performer-right-list-item-desc-address">
                                                        Can be done remotely
                                                    </div>
                                                    <div className="tasks-performer-right-list-item-desc-when">
                                                        <div className="tasks-performer-right-list-item-desc-date-title">
                                                            Date:
                                                        </div>
                                                        <div className="tasks-performer-right-list-item-desc-date-time">
                                                            <div className="tasks-performer-right-list-item-desc-starting-date">
                                                                Aug 24, 2022
                                                                12:00
                                                            </div>
                                                            <div className="tasks-performer-right-list-item-desc-ending-date">
                                                                - Aug 24, 2022
                                                                15:00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default TasksAsPerformer;

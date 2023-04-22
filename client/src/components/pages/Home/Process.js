import React from "react";
import { Link } from "react-router-dom";
import "./Process.css";

function Process() {
    return (
        <div className="process">
            <div className="process-container">
                <div className="process-wrapper">
                    <div className="process-title">
                        <h1>How does</h1>
                        <h5>DoForYou</h5>
                        <h1>work?</h1>
                    </div>
                    <div className="process-list">
                        <div className="process-list-start">
                            <div className="process-list-image-box">
                                <img
                                    className="process-list-image"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/process-2.png"
                                    }
                                    alt="main"
                                ></img>
                            </div>
                            <div className="process-list-link-box">
                                <Link
                                    to="/about-us"
                                    className="process-list-link"
                                >
                                    Learn more about us
                                </Link>
                            </div>
                        </div>
                        <div className="process-step">
                            <h2 className="step-numbering">1</h2>
                            <h3 className="step-title">Describe</h3>
                            <h6 className="step-desc">
                                Create new task and describe the details to put
                                on the list. It's free and takes 3-5 minutes.
                                More details, more response.
                            </h6>
                        </div>
                        <div className="process-step">
                            <h2 className="step-numbering">2</h2>
                            <h3 className="step-title">Get response</h3>
                            <h6 className="step-desc">
                                Response usually arrive within 30 minutes with
                                prices. If you get the response from more than
                                one performer, you can chat to select the proper
                                performer of them.
                            </h6>
                        </div>
                        <div className="process-step">
                            <h2 className="step-numbering">3</h2>
                            <h3 className="step-title">Select</h3>
                            <h6 className="step-desc">
                                Once you select the performer, contact them to
                                discuss the deadlines and give more details if
                                they'd like to know.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;

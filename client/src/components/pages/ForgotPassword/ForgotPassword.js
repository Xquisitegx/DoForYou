import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
    return (
        <div className="forgot-password">
            <div className="nav-small">
                <div className="nav-small-left">
                    <Link to="/" className="back-arrow">
                        <i className="fa-solid fa-arrow-left fa-2x" />
                    </Link>
                    <Link to="/" className="back-to-main" id="btn-register">
                        BACK
                    </Link>
                </div>
                <div className="nav-small-right">
                    <Link to="/login" className="go-to-another-step">
                        LOG IN
                    </Link>
                </div>
            </div>
            <div className="forgot-password-container">
                <div className="forgot-password-wrapper">
                    <div className="forgot-password-title">
                        <div className="forgot-password-title-main">
                            Forgot Password
                        </div>
                        <div className="forgot-password-title-sub">
                            Enter your account's email <br /> and we'll send you
                            and email to reset the password.
                        </div>
                    </div>
                    <div className="forgot-password-content">
                        <div className="forgot-password-form">
                            <form /*onSubmit={handleSubmit}*/>
                                <div className="forgot-password-input-field">
                                    <div className="forgot-password-input-label">
                                        Email Address
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        /*onChange={(e) =>
                                            setEmail(e.target.value)
                                        }*/
                                    />
                                </div>

                                <div className="forgot-password-submit">
                                    <button
                                        type="submit"
                                        className="btn-forgot-password"
                                    >
                                        <Link
                                            to="/password-alert"
                                            className="btn-send-email"
                                        >
                                            SEND EMAIL
                                        </Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forgot-password-container-bottom"></div>
        </div>
    );
}

export default ForgotPassword;

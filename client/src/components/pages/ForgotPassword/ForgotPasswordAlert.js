import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordAlert() {
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
                            Reset Password
                        </div>
                        <div className="forgot-password-title-sub">
                            An email has been sent. <br /> Click the link in the
                            email to reset your password.
                        </div>
                    </div>
                    <div className="forgot-password-content">
                        <div className="forgot-password-submit">
                            <button
                                type="submit"
                                className="btn-forgot-password"
                            >
                                <Link to="/login" className="btn-send-email">
                                    DONE
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forgot-password-container-bottom"></div>
        </div>
    );
}

import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Cookies from "universal-cookie";
import { Button } from "../../Button";

function Login() {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const showAlert = () => {
        if (errorMsg === "Incorrect email or password") {
            return (
                <div className="login-error-message">
                    <div className="login-error-message-text">{errorMsg}</div>
                </div>
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/login", {
                email,
                password,
            })
            .then((data) => {
                cookies.set("jwt", data.data.token, { path: "/" });
                cookies.set("firstname", data.data.user.firstname, {
                    path: "/",
                });
                navigate("/");
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setErrorMsg(error.response.data.message);
                }
            });
    };

    return (
        <div className="login">
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
                    <Link
                        to="/register"
                        className="go-to-another-step"
                        id="btn-register"
                    >
                        CREATE ACCOUNT
                    </Link>
                </div>
            </div>

            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-wrapper-left">
                        <div className="login-text">
                            <h2 className="login-text-main">Hello Again!</h2>
                            <h5 className="login-text-sub">Welcome back :)</h5>
                            <h5 className="login-text-sub">
                                you've been missed!
                            </h5>
                        </div>
                        <div className="login-image">
                            <div className="login-image-box">
                                <img
                                    className="login-image-png"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/process.png"
                                    }
                                    alt="main"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="login-wrapper-right">
                        <div className="login-wrapper-outline">
                            <div className="login-content">
                                <div className="login-title">
                                    <h1 className="login-title-main">Log in</h1>
                                </div>
                                <div className="login-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="login-input-field">
                                            <div className="login-input-label">
                                                Email
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="login-input-field">
                                            <div className="login-input-label">
                                                Password
                                            </div>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                        {showAlert()}
                                        <div className="login-submit">
                                            <Button
                                                buttonStyle="btn--primary-yellow"
                                                buttonSize="btn--medium-bold"
                                                type="submit"
                                            >
                                                LOG IN
                                            </Button>
                                        </div>
                                    </form>
                                    <div className="login-bottom">
                                        <Link
                                            to="/forgot-password"
                                            className="login-bottom-link"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-container-bottom"></div>
        </div>
    );
}
export default Login;

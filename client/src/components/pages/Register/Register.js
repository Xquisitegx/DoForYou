import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Register.css";
import { Button } from "../../Button";

function Register() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/users/signup", {
                firstname: firstName,
                lastname: lastName,
                email,
                password,
                phone,
                location: { address, city, province, zipcode: postalCode },
            })
            .then((data) => {
                cookies.set("jwt", data.data.token);
                cookies.set("firstname", data.data.data.user.firstname);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="register">
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
            <div className="register-container">
                <div className="register-wrapper">
                    <div className="register-title">
                        <h1>Create Account</h1>
                    </div>
                    <div className="register-content">
                        <div className="register-form">
                            <form onSubmit={handleSubmit}>
                                <div className="name-combine">
                                    <div className="name-combine-left">
                                        <div className="register-input-field">
                                            <div className="register-input-label">
                                                First Name
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="name-combine-right">
                                        <div className="register-input-field">
                                            <div className="register-input-label">
                                                Last Name
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="register-input-field">
                                    <div className="register-input-label">
                                        Email
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="register-input-field">
                                    <div className="register-input-label">
                                        Password
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="register-input-field">
                                    <div className="register-input-label">
                                        Phone
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="123-456-7890"
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="register-input-field">
                                    <div className="register-input-label">
                                        Address
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                    <div className="address-combine">
                                        <div className="address-combine-left">
                                            <div className="register-input-label">
                                                City
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="City"
                                                onChange={(e) =>
                                                    setCity(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="address-combine-right">
                                            <div className="register-input-label">
                                                Province
                                            </div>
                                            <select
                                                name=""
                                                id=""
                                                onChange={(e) =>
                                                    setProvince(e.target.value)
                                                }
                                            >
                                                <option
                                                    value=""
                                                    selected
                                                    disabled
                                                >
                                                    Select
                                                </option>
                                                <option value="Alberta">
                                                    Alberta
                                                </option>
                                                <option value="British Columbia">
                                                    British Columbia
                                                </option>
                                                <option value="Manitoba">
                                                    Manitoba
                                                </option>
                                                <option value="New Brunswick">
                                                    New Brunswick
                                                </option>
                                                <option value="Newfoundland">
                                                    Newfoundland
                                                </option>
                                                <option value="Nova Scotia">
                                                    Nova Scotia
                                                </option>
                                                <option value="Ontario">
                                                    Ontario
                                                </option>
                                                <option value="Prince Edward Island">
                                                    Prince Edward Island
                                                </option>
                                                <option value="Quebec">
                                                    Quebec
                                                </option>
                                                <option value="Saskatchewan">
                                                    Saskatchewan
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="register-input-label">
                                        Postal Code
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="A1B2C3"
                                        onChange={(e) =>
                                            setPostalCode(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="register-submit">
                                    <Button
                                        buttonStyle="btn--primary-blue"
                                        buttonSize="btn--wide"
                                        type="submit"
                                    >
                                        SIGN UP
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-container-bottom"></div>
        </div>
    );
}

export default Register;

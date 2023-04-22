import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyAccount.css";

function MyProfile() {
    const cookies = new Cookies();
    const [profilePicture, setProfilePicture] = useState(null);
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`).then((data) => {
            setUser(data.data.user);
            setFirstName(data.data.user);
            setFirstName(data.data.user.firstname);
            setLastName(data.data.user.lastname);
            setPhone(data.data.user.phone);
            setAddress(data.data.user.location.address);
            setCity(data.data.user.location.city);
            setProvince(data.data.user.location.province);
            setPostalCode(data.data.user.location.zipcode);
            setDescription(data.data.user.description);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/users/updateUser/${user._id}`, {
                firstname: firstName,
                lastname: lastName,
                phone,
                address,
                location: {
                    city,
                    province,
                    zipcode: postalCode,
                },
                description,
            })
            .then((response) => {
                setErrorMessage("");
                cookies.set("firstname", response.data.user.firstname);
                setSuccessMessage("Profile has been updated successfully!");

                window.location.reload();
            })
            .catch((error) => {
                setSuccessMessage("");
                setErrorMessage(error.message);
                console.log(error);
            });
    };

    const handlePhotoInputChange = (event) => {
        setProfilePicture(event.target.files[0]);
    };

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = async () => {
        const formData = new FormData();
        formData.append("photo", profilePicture);

        axios
            .post(`http://localhost:8000/api/users/profile/${user._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                window.location.reload(); // add this line
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeletePicture = () => {
        axios
            .put(`http://localhost:8000/api/users/profile/${user._id}`)
            .then((response) => {
                setProfilePicture(null);
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleUploadFileClick = async () => {
        const formData = new FormData();
        formData.append("file", file);

        axios
            .post(`http://localhost:8000/api/admin/files/${user._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                window.location.reload(); // add this line
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRemoveFile = () => {
        fileInputRef.current.value = ""; // clear the input box value
    };

    return (
        <>
            <div id="container">
                <Navbar />
                <div className="my-profile">
                    <div className="my-profile-container">
                        <div className="my-profile-wrapper">
                            <div className="responsive-profile-photo-box">
                                <div className="responsive-profile-photo">
                                    <div className="responsive-profile-photo-image">
                                        {user.img ? (
                                            <img
                                                src={`http://localhost:8000/api/users/profile/${user._id}`}
                                                alt="profile"
                                            />
                                        ) : (
                                            <img src="images/profile/default.png" alt="default profile" />
                                        )}
                                    </div>
                                </div>

                                <div className="responsive-my-profile-image-btns">
                                    <div className="responsive-my-profile-wrapper-right-profile-upload-box">
                                        <input
                                            id="pic-upload"
                                            type="file"
                                            class="upload-box"
                                            accept=".jpg,.jpeg,.png"
                                            onChange={handlePhotoInputChange}
                                        />
                                    </div>
                                    <div className="responsive-my-profile-wrapper-right-profile-btns">
                                        <Button
                                            id="my-profile-update-btn"
                                            buttonStyle="btn--outline"
                                            buttonSize="btn--small-wide"
                                            buttonRadius="btn--rounded"
                                            type="submit"
                                            onClick={handleUploadClick}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            id="my-profile-remove-btn"
                                            buttonStyle="btn--outline"
                                            buttonSize="btn--small-wide"
                                            buttonRadius="btn--rounded"
                                            type="submit"
                                            onClick={handleDeletePicture}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="my-profile-wrapper-top">
                                <div className="my-profile-wrapper-left">
                                    <div className="my-profile-wrapper-left-section-title">
                                        <div className="my-profile-wrapper-left-section-profile">
                                            <Link to="/my-account">Profile</Link>
                                        </div>
                                        <div className="my-profile-wrapper-left-section-reviews">
                                            <Link to="/my-reviews">Reviews</Link>
                                        </div>
                                    </div>
                                    <div className="my-profile-wrapper-left-profile-form">
                                        <form id="my-profile-action">
                                            <div className="my-profile-wrapper-left-profile-title">
                                                Personal Information
                                            </div>
                                            <div className="my-profile-name-combine">
                                                <div className="my-profile-name-combine-left">
                                                    <div className="my-profile-input-field">
                                                        <div className="my-profile-input-label">First Name</div>
                                                        <input
                                                            type="text"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="my-profile-name-combine-right">
                                                    <div className="my-profile-input-field">
                                                        <div className="my-profile-input-label">Last Name</div>
                                                        <input
                                                            type="text"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">Phone</div>
                                                <input
                                                    type="text"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-input-label">Address</div>
                                                <input
                                                    type="text"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                                <div className="my-profile-address-combine">
                                                    <div className="my-profile-address-combine-left">
                                                        <div className="my-profile-input-label">City</div>
                                                        <input
                                                            type="text"
                                                            value={city}
                                                            onChange={(e) => setCity(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="my-profile-address-combine-right">
                                                        <div className="my-profile-input-label">Province</div>
                                                        <select
                                                            name=""
                                                            id=""
                                                            value={province}
                                                            onChange={(e) => setProvince(e.target.value)}
                                                        >
                                                            <option selected disabled>
                                                                {province}
                                                            </option>
                                                            <option value="Alberta">Alberta</option>
                                                            <option value="British Columbia">British Columbia</option>
                                                            <option value="Manitoba">Manitoba</option>
                                                            <option value="New Brunswick">New Brunswick</option>
                                                            <option value="Newfoundland">Newfoundland</option>
                                                            <option value="Nova Scotia">Nova Scotia</option>
                                                            <option value="Ontario">Ontario</option>
                                                            <option value="Prince Edward Island">
                                                                Prince Edward Island
                                                            </option>
                                                            <option value="Quebec">Quebec</option>
                                                            <option value="Saskatchewan">Saskatchewan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="my-profile-input-label">Postal Code</div>
                                                <input
                                                    type="text"
                                                    value={postalCode}
                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                />
                                            </div>
                                            <div className="my-profile-input-field">
                                                <div className="my-profile-wrapper-left-profile-title">BIO</div>
                                                <textarea
                                                    className="my-profile-input-field-textarea"
                                                    rows={5}
                                                    value={description ? description : ""}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="my-profile-wrapper-right">
                                    <div className="my-profile-wrapper-right-profile-box">
                                        <div className="my-profile-wrapper-right-profile-photo">
                                            <div className="my-profile-wrapper-right-profile-photo-image">
                                                {user.img ? (
                                                    <img
                                                        src={`http://localhost:8000/api/users/profile/${user._id}`}
                                                        alt="profile"
                                                    />
                                                ) : (
                                                    <img src="images/profile/default.png" alt="default profile" />
                                                )}
                                            </div>
                                        </div>

                                        <div className="my-profile-wrapper-right-profile-upload-box">
                                            <input
                                                id="pic-upload"
                                                type="file"
                                                class="upload-box"
                                                accept=".jpg,.jpeg,.png"
                                                onChange={handlePhotoInputChange}
                                            />
                                        </div>
                                        <div className="my-profile-wrapper-right-profile-btns">
                                            <Button
                                                id="my-profile-update-btn"
                                                buttonStyle="btn--outline"
                                                buttonSize="btn--small-wide"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                                onClick={handleUploadClick}
                                            >
                                                Update
                                            </Button>
                                            <Button
                                                id="my-profile-remove-btn"
                                                buttonStyle="btn--outline"
                                                buttonSize="btn--small-wide"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                                onClick={handleDeletePicture}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="my-profile-wrapper-right-bottom">
                                        <div className="my-profile-wrapper-right-profile-verification-upload">
                                            <div className="my-profile-wrapper-right-profile-upload-title">
                                                Verification document
                                            </div>
                                            <div className="my-profile-wrapper-right-profile-upload-box">
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    class="verification-upload-box"
                                                    accept=".doc,.pdf,.docx"
                                                    onChange={handleFileInputChange}
                                                    ref={fileInputRef}
                                                />
                                            </div>
                                            <div className="my-profile-wrapper-right-profile-btns">
                                                <Button
                                                    id="my-profile-update-btn"
                                                    buttonStyle="btn--secondary-dark"
                                                    buttonSize="btn--small-wide"
                                                    buttonRadius="btn--rounded"
                                                    type="submit"
                                                    onClick={handleUploadFileClick}
                                                >
                                                    Submit
                                                </Button>
                                                <Button
                                                    id="my-profile-remove-btn"
                                                    buttonStyle="btn--secondary-dark"
                                                    buttonSize="btn--small-wide"
                                                    buttonRadius="btn--rounded"
                                                    type="submit"
                                                    onClick={handleRemoveFile}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="text-green-400">{successMessage}</p>
                                        <p className="text-red-400">{errorMessage}</p>
                                        <div className="my-profile-wrapper-right-bottom-save-btn">
                                            <Button
                                                buttonStyle="btn--primary-blue"
                                                buttonSize="btn--wide-bold"
                                                type="submit"
                                                form="my-profile-action"
                                                onClick={handleSubmit}
                                            >
                                                SAVE
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="responsive-profile-bottom-box">
                                <div className="my-profile-wrapper-right-profile-verification-upload">
                                    <div className="my-profile-wrapper-right-profile-upload-title">
                                        Verification document
                                    </div>
                                    <div className="my-profile-wrapper-right-profile-upload-box">
                                        <input
                                            id="file-upload"
                                            type="file"
                                            class="verification-upload-box"
                                            accept=".doc,.pdf,.docx"
                                            onChange={handleFileInputChange}
                                            ref={fileInputRef}
                                        />
                                    </div>
                                    <div className="my-profile-wrapper-right-profile-btns">
                                        <div className="my-profile-wrapper-right-profile-btns-responsive">
                                            <Button
                                                id="my-profile-update-btn"
                                                buttonStyle="btn--secondary-dark"
                                                buttonSize="btn--small-wide"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                                onClick={handleUploadFileClick}
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                id="my-profile-remove-btn"
                                                buttonStyle="btn--secondary-dark"
                                                buttonSize="btn--small-wide"
                                                buttonRadius="btn--rounded"
                                                type="submit"
                                                onClick={handleRemoveFile}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="responsive-profile-bottom-save-btn">
                                    <Button
                                        buttonStyle="btn--primary-blue"
                                        buttonSize="btn--wide-bold"
                                        type="submit"
                                        form="my-profile-action"
                                    >
                                        SAVE
                                    </Button>
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

export default MyProfile;

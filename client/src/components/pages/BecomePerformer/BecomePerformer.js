import axios from "axios";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import { Button } from "../../Button";
import "./BecomePerformer.css";

function Categories(props) {
    let index = 0;
    const counts = [3, 2, 3, 2, 2, 3];
    const categoryNames = Object.keys(props.categories);
    const categoryIcons = [
        "box",
        "truck",
        "car-side",
        "desktop",
        "laptop-code",
        "pen-fancy",
        "camera-retro",
        "star",
        "hammer",
        "broom",
        "plug",
        "laptop",
        "headset",
        "face-smile-beam",
        "book"
    ]

    return counts.map((iteration) => {
        const jsxArray = Array.from({ length: iteration }, (_) => {
            let style = {};
            let currentIndex = index;
            if (props.categories[categoryNames[currentIndex]] === true) 
                style = { border: "3px solid #000" };

            return (
                <div className="performer-categories-btn-box" key={index}>
                    <button 
                        style={style}
                        className="performer-categories-btn" 
                        onClick={e => {
                            e.preventDefault();
                            props.setCategories({
                                ...props.categories, 
                                [categoryNames[currentIndex]]: !props.categories[categoryNames[currentIndex]]
                            });
                        }}
                    >
                        <i className={`fa-solid fa-${categoryIcons[index]} cate-icon cate-icon-size`} />
                        <div className="cate-icon-small">{categoryNames[index++]}</div>
                    </button>
                </div>
            )
        }
        );
      
        return (
          <div className="performer-categories-list-row" key={iteration}>
            {jsxArray}
          </div>
        );
      });
}

function BecomePerformer() {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        // firstname: "",
        // lastname: "",
        // birthdate: "",
        // email: "",
        // phone: "",
        description: "",
        categories: []
    });
    const [categories, setCategories] = useState({
        "Courier Service": false,
        "Cargo Transportation": false,
        "Transport Repair": false,
        "Computer": false,
        "Software Development": false,
        "Design": false,
        "Photo Video Audio": false,
        "Event and Promotions": false,
        "Repair and Construction": false,
        "Cleaning and Household": false,
        "Installation": false,
        "Repair of Digital Devices": false,
        "Virtual Assistant": false,
        "Beauty and Health": false,
        "Tutors and Training": false
    });

    const backToMain = () => {
        navigate("/");
    };

    const handleSubmit = e => {
        e.preventDefault();
        let formObject = {...form};

        const selectedCategories = Object.keys(categories).filter(key => {
            if (categories[key] === true) {
                return key;
            }
        });

        // formObject = {
        //     ...formObject,
        //     birthdate: new Date(formObject.birthdate)
        // }

        if (selectedCategories.length > 0) {
            formObject = {
                ...formObject,
                $push: { categories: selectedCategories }
            }
        }
        delete formObject.categories;

        axios
            .post("http://localhost:8000/api/users/becomePerformer", { 
                formObject, 
                jwt: cookies.get("jwt")
            })
            .then(() => { navigate("/"); });
    }

    return (
        <div className="performer">
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
                    <Link to="/about" className="go-to-another-step">
                        ABOUT US
                    </Link>
                </div>
            </div>

            <div className="performer-container">
                <div className="performer-wrapper">
                    <div className="performer-wrapper-left">
                        <div className="performer-wrapper-left-box">
                            <div className="performer-wrapper-left-text">
                                <div className="performer-wrapper-left-text-box">
                                    <div className="performer-wrapper-left-text-main">
                                        3234 Tasks are waiting for performers!
                                    </div>
                                    <div className="performer-wrapper-left-text-sub">
                                        Please answer all questions in the form.
                                    </div>
                                    <div className="performer-wrapper-left-text-sub">
                                        to help others with your own skills.
                                    </div>
                                    <div className="performer-wrapper-left-text-sub">
                                        It will take less than 5 minutes.
                                    </div>
                                </div>
                            </div>

                            <div className="performer-image">
                                <div className="performer-image-box">
                                    <img
                                        className="performer-image-png"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "images/become-performer.png"
                                        }
                                        alt="become-performer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="performer-wrapper-right">
                        <div className="performer-wrapper-outline">
                            <div className="performer-content">
                                <div className="performer-title">
                                    <h1>Tell us about Yourself</h1>
                                </div>
                                <div className="performer-form">
                                    <form /*onSubmit={handleSubmit}*/>
                                        {/*}
                                        <div className="performer-info-combine">
                                            <div className="performer-info-combine-left">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        First Name
                                                    </div>
                                                    <input 
                                                        type="text" 
                                                        value={form.firstname}
                                                        onChange={e => {
                                                            setForm({
                                                                ...form,
                                                                firstname: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="performer-info-combine-center">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Last Name
                                                    </div>
                                                    <input 
                                                        type="text" 
                                                        value={form.lastname}
                                                        onChange={e => {
                                                            setForm({
                                                                ...form,
                                                                lastname: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="performer-info-combine-right">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Date of Birth
                                                    </div>
                                                    <input 
                                                        type="date" 
                                                        value={form.birthdate}
                                                        onChange={e => {
                                                            setForm({
                                                                ...form,
                                                                birthdate: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="performer-email-phone-combine">
                                            <div className="performer-email-phone-combine-left">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Email
                                                    </div>
                                                    <input 
                                                        type="email" 
                                                        value={form.email}
                                                        onChange={e => {
                                                            setForm({
                                                                ...form,
                                                                email: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="performer-email-phone-combine-right">
                                                <div className="performer-input-field">
                                                    <div className="performer-input-label">
                                                        Phone
                                                    </div>
                                                    <input 
                                                        type="text" 
                                                        value={form.phone}
                                                        onChange={e => {
                                                            setForm({
                                                                ...form,
                                                                phone: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        */}

                                        <div className="performer-input-field">
                                            <div className="performer-label-combine">
                                                <div className="performer-input-label">
                                                    Categories
                                                </div>
                                                <div className="performer-input-sub-label">
                                                    Select categories interested
                                                    in
                                                </div>
                                            </div>
                                            <div className="categories-field">
                                                <div className="categories-field-list">
                                                    <Categories categories={categories} setCategories={setCategories} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="performer-input-field">
                                            <div className="performer-label-combine">
                                                <div className="performer-input-label">
                                                    Share your experience
                                                </div>
                                                <div className="performer-input-sub-label">
                                                    Appeal yourself
                                                </div>
                                            </div>

                                            <textarea 
                                                rows={5} 
                                                value={form.description}
                                                onChange={e => {
                                                    setForm({
                                                        ...form,
                                                        description: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>

                                        <div className="performer-submit">
                                            <div className="performer-btn-cancel">
                                                <Button
                                                    buttonStyle="btn--cancel"
                                                    buttonSize="btn--wide-bold"
                                                    onClick={backToMain}
                                                >
                                                    CANCEL
                                                </Button>
                                            </div>
                                            <div className="performer-btn-submit">
                                                <Button
                                                    buttonStyle="btn--primary-yellow"
                                                    buttonSize="btn--wide-bold"
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                >
                                                    SUBMIT
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="performer-container-bottom"></div>
        </div>
    );
}

export default BecomePerformer;

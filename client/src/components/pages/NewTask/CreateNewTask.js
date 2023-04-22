import React, { useState, useEffect } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./CreateNewTask.css";
import { Button } from "../../Button";

function CreateNewTask() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { taskId } = useParams();

    const [user, setUser] = useState({});

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [isRemote, setIsRemote] = useState(true);
    const [isInPerson, setIsInPerson] = useState(false);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [details, setDetails] = useState("");
    const [budget, setBudget] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [phone, setPhone] = useState("");

    const backToMain = () => {
        navigate("/");
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`).then((data) => {
            setUser(data.data.user);
        });

        if (taskId !== undefined) {
            axios.get(`http://localhost:8000/api/tasks/${taskId}`).then((data) => {
                const task = data.data.task;
                setTitle(task.title);
                setCategory(task.category);
                setIsRemote(task.isRemote);
                setIsInPerson(!task.isRemote);
                setAddress(task.address);
                setProvince(task.province);
                setPostalCode(task.zipcode);

                const [start_date, start_time] = task.startDate.split("T");
                const [end_date, end_time] = task.endDate.split("T");

                setStartDate(start_date);
                setStartTime(start_time.slice(0, 5));
                setEndDate(end_date);
                setEndTime(end_time.slice(0, 5));

                setDetails(task.details);
                setBudget(task.budget);
                setPaymentMethod(task.paymentMethod);
                setPhone(task.phone);
            });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let object = {
            title,
            category,
            isRemote,
            location: { address, city, province, zipcode: postalCode },
            details,
            budget,
            paymentMethod,
            phone,
            startDate: new Date(`${startDate}T${startTime}:00`),
            endDate: new Date(`${endDate}T${endTime}:00`),
            uploadedUser: user._id,
        };

        if (isRemote === true) {
            delete object.location;
        }

        let url = "http://localhost:8000/api/tasks/";
        if (taskId === undefined) {
            url += "create";
        } else {
            url += `edit/${taskId}`;
        }

        axios
            .post(url, object)
            .then((data) => {
                console.log(data.data);
                navigate("/find-tasks");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="create-new-task">
                    <div className="create-new-task-container">
                        <div className="create-new-task-wrapper">
                            <div className="create-new-task-wrapper-left">
                                <div className="create-new-task-wrapper-left-box">
                                    <div className="create-new-task-wrapper-left-text">
                                        <div className="create-new-task-wrapper-left-text-box">
                                            <div className="create-new-task-wrapper-left-text-main">
                                                1205 Performers can help you
                                            </div>
                                            <div className="create-new-task-wrapper-left-text-sub">
                                                Please answer all questions in the form.
                                            </div>
                                            <div className="create-new-task-wrapper-left-text-sub">
                                                to get response from performers.
                                            </div>
                                            <div className="create-new-task-wrapper-left-text-sub">
                                                It will take less than 5 minutes.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="create-new-task-image">
                                        <div className="create-new-task-image-box">
                                            <img
                                                className="create-new-task-image-png"
                                                src={process.env.PUBLIC_URL + "images/create-task.png"}
                                                alt="become-create-new-task"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-new-task-wrapper-right">
                                <div className="create-new-task-outline">
                                    <div className="create-new-task-content">
                                        <div className="create-new-task-title">
                                            <h1>Tell us about your task</h1>
                                        </div>
                                        <div className="create-new-task-outline-box">
                                            <div className="create-new-task-inline-box">
                                                <div className="create-new-task-form">
                                                    {/* create-new-task-form */}
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                Title of task
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="create-new-task-input-field-input"
                                                                placeholder="Assemble the sofa from IKEA"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">Category</div>
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="create-new-task-input-select"
                                                                value={category}
                                                                onChange={(e) => setCategory(e.target.value)}
                                                                required
                                                            >
                                                                <option value="" disabled selected>
                                                                    Select
                                                                </option>
                                                                <option value="Courier Service">
                                                                    Courier Services
                                                                </option>
                                                                <option value="Cargo Transportation">
                                                                    Cargo Transportation
                                                                </option>
                                                                <option value="Transport Repair">
                                                                    Transport Repair
                                                                </option>
                                                                <option value="Computer">Computer</option>
                                                                <option value="Software Development">
                                                                    Software Development
                                                                </option>
                                                                <option value="Design">Design</option>
                                                                <option value="Photo Video Audio">
                                                                    Photo, Video and Audio
                                                                </option>
                                                                <option value="Event and Promotions">
                                                                    Event and Promotions
                                                                </option>
                                                                <option value="Repair and Construction">
                                                                    Repair and Construction
                                                                </option>
                                                                <option value="Cleaning and Household">
                                                                    Cleaning and Household
                                                                </option>
                                                                <option value="Installation">Installation</option>
                                                                <option value="Repair of Digital Equipment">
                                                                    Repair of Digital Equipment
                                                                </option>
                                                                <option value="Virtual Assistant">
                                                                    Virtual Assistant
                                                                </option>
                                                                <option value="Beauty and Health">
                                                                    Beauty and Health
                                                                </option>
                                                                <option value="Tutors and Training">
                                                                    Tutors and Training
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                Service remotely?
                                                            </div>
                                                            <div className="create-new-task-radio-combine">
                                                                <div className="create-new-task-radio-combine-left">
                                                                    <input
                                                                        className="create-new-task-radio"
                                                                        type="radio"
                                                                        value={isRemote}
                                                                        name="service"
                                                                        onChange={(e) => {
                                                                            setIsRemote(true);
                                                                            setIsInPerson(false);
                                                                        }}
                                                                        defaultChecked={isRemote}
                                                                        required
                                                                    />
                                                                    <div className="radio-combine-label">
                                                                        Can be done remotely
                                                                    </div>
                                                                </div>
                                                                <div className="create-new-task-radio-combine-right">
                                                                    <input
                                                                        className="create-new-task-radio"
                                                                        type="radio"
                                                                        value={isInPerson}
                                                                        name="service"
                                                                        onChange={(e) => {
                                                                            setIsRemote(false);
                                                                            setIsInPerson(true);
                                                                        }}
                                                                    />
                                                                    <div className="radio-combine-label">
                                                                        Need to be done in person
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {isInPerson && (
                                                            <div
                                                                className="create-new-task-input-field"
                                                                style={{
                                                                    marginBottom: "1.5rem",
                                                                }}
                                                            >
                                                                <div className="create-new-task-input-label">
                                                                    What is address?
                                                                </div>
                                                                <div className="create-new-task-input-sub-label">
                                                                    Address
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    placeholder="Address"
                                                                    value={address}
                                                                    onChange={(e) => setAddress(e.target.value)}
                                                                />
                                                                <div className="create-new-task-address-combine">
                                                                    <div className="create-new-task-address-combine-left">
                                                                        <div className="create-new-task-input-sub-label">
                                                                            City
                                                                        </div>
                                                                        <input
                                                                            type="text"
                                                                            className="create-new-task-input-field-sub-input"
                                                                            placeholder="City"
                                                                            value={city}
                                                                            onChange={(e) => setCity(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="create-new-task-address-combine-right">
                                                                        <div className="create-new-task-input-sub-label">
                                                                            Province
                                                                        </div>
                                                                        <select
                                                                            name=""
                                                                            id=""
                                                                            className="create-new-task-input-sub-select"
                                                                            value={province}
                                                                            onChange={(e) =>
                                                                                setProvince(e.target.value)
                                                                            }
                                                                        >
                                                                            <option value="" selected disabled>
                                                                                Select
                                                                            </option>
                                                                            <option value="Alberta">Alberta</option>
                                                                            <option value="British Columbia">
                                                                                British Columbia
                                                                            </option>
                                                                            <option value="Manitoba">Manitoba</option>
                                                                            <option value="New Brunswick">
                                                                                New Brunswick
                                                                            </option>
                                                                            <option value="Newfoundland">
                                                                                Newfoundland
                                                                            </option>
                                                                            <option value="Nova Scotia">
                                                                                Nova Scotia
                                                                            </option>
                                                                            <option value="Ontario">Ontario</option>
                                                                            <option value="Prince Edward Island">
                                                                                Prince Edward Island
                                                                            </option>
                                                                            <option value="Quebec">Quebec</option>
                                                                            <option value="Saskatchewan">
                                                                                Saskatchewan
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="create-new-task-input-sub-label">
                                                                    Postal Code
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="create-new-task-input-field-sub-input"
                                                                    placeholder="A1B2C3"
                                                                    value={postalCode}
                                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                                />
                                                            </div>
                                                        )}
                                                        <div
                                                            className="create-new-task-input-field"
                                                            style={{
                                                                marginBottom: "1.5rem",
                                                            }}
                                                        >
                                                            <div className="create-new-task-input-label">
                                                                When do you need to start work?
                                                            </div>
                                                            {/* <select
                                                                name=""
                                                                id=""
                                                                className="
                                                            create-new-task-input-sub-select"
                                                            >
                                                                <option
                                                                    value=""
                                                                    disabled
                                                                    selected
                                                                >
                                                                    Select
                                                                </option>
                                                                <option value="">
                                                                    Get started
                                                                </option>
                                                                <option value="">
                                                                    Finish the
                                                                    work
                                                                </option>
                                                                <option value="">
                                                                    Specify the
                                                                    period
                                                                </option>
                                                            </select> */}
                                                            <div className="create-new-task-date-and-time-combine">
                                                                <div className="create-new-task-date-and-time-combine-left">
                                                                    <div className="create-new-task-input-sub-label">
                                                                        Starting date
                                                                    </div>
                                                                    <input
                                                                        type="date"
                                                                        className="create-new-task-input-field-sub-input"
                                                                        value={startDate}
                                                                        onChange={(e) => setStartDate(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="create-new-task-date-and-time-combine-right">
                                                                    <div className="create-new-task-input-sub-label">
                                                                        Starting time
                                                                    </div>
                                                                    <input
                                                                        type="time"
                                                                        className="create-new-task-input-field-sub-input"
                                                                        value={startTime}
                                                                        onChange={(e) => setStartTime(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="create-new-task-date-and-time-combine">
                                                                <div className="create-new-task-date-and-time-combine-left">
                                                                    <div className="create-new-task-input-sub-label">
                                                                        Ending date
                                                                    </div>
                                                                    <input
                                                                        type="date"
                                                                        className="create-new-task-input-field-sub-input"
                                                                        value={endDate}
                                                                        onChange={(e) => setEndDate(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="create-new-task-date-and-time-combine-right">
                                                                    <div className="create-new-task-input-sub-label">
                                                                        Ending time
                                                                    </div>
                                                                    <input
                                                                        type="time"
                                                                        className="create-new-task-input-field-sub-input"
                                                                        value={endTime}
                                                                        onChange={(e) => setEndTime(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                Details of work
                                                            </div>
                                                            <textarea
                                                                className="create-new-task-input-field-textarea"
                                                                rows={5}
                                                                placeholder="Details"
                                                                value={details}
                                                                onChange={(e) => setDetails(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                What budget are you looking for?
                                                            </div>
                                                            <div className="create-new-task-input-budget-section">
                                                                <div className="create-new-task-input-dollar">$</div>
                                                                <input
                                                                    type="number"
                                                                    className="create-new-task-input-field-input"
                                                                    placeholder="0.00"
                                                                    value={budget}
                                                                    onChange={(e) => setBudget(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                How to pay?
                                                            </div>
                                                            <div className="create-new-task-radio-combine">
                                                                <div className="create-new-task-radio-combine-left">
                                                                    <input
                                                                        className="create-new-task-radio"
                                                                        type="radio"
                                                                        value="in-person"
                                                                        name="payment"
                                                                        onChange={(e) =>
                                                                            setPaymentMethod(e.target.value)
                                                                        }
                                                                        required
                                                                    />
                                                                    <div className="radio-combine-label">
                                                                        Directly pay in person
                                                                    </div>
                                                                </div>
                                                                <div className="create-new-task-radio-combine-right">
                                                                    <input
                                                                        className="create-new-task-radio"
                                                                        type="radio"
                                                                        value="e-transfer"
                                                                        name="payment"
                                                                        onChange={(e) =>
                                                                            setPaymentMethod(e.target.value)
                                                                        }
                                                                    />
                                                                    <div className="radio-combine-label">
                                                                        by Bank e-transfer
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="create-new-task-input-field">
                                                            <div className="create-new-task-input-label">
                                                                Your Contact
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="create-new-task-input-field-input"
                                                                placeholder="123-456-7890"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="new-task-bottom">
                                                            <div className="new-task-cancel">
                                                                <Button
                                                                    buttonStyle="btn--cancel"
                                                                    buttonSize="btn--wide-bold"
                                                                    onClick={backToMain}
                                                                >
                                                                    CANCEL
                                                                </Button>
                                                            </div>

                                                            <div className="new-task-submit">
                                                                <Button
                                                                    buttonStyle="btn--primary-blue"
                                                                    buttonSize="btn--wide-bold"
                                                                    type="submit"
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
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default CreateNewTask;

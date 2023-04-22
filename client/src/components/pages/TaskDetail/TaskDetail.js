import axios from "axios";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./TaskDetail.css";

import UploadedCustomerButton from "./UploadedCustomerButton";
import AssignedPerformerButton from "./AssignedPerformerButton";
import UnassignedPerformerButton from "./UnassignedPerformerButton";
import CustomerReview from "./CustomerReview";
import PerformerReview from "./PerformerReview";

function TaskDetail() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const params = useParams();

    const [task, setTask] = useState({});
    const [user, setUser] = useState({});
    // const [reviews, setReviews] = useState({});
    const [uploadedUser, setUploadedUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${params.taskId}`).then((data) => {
            setTask(data.data.task);
            setUploadedUser(data.data.task.uploadedUser);
        });

        axios.get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`).then((data) => {
            setUser(data.data.user);
        });
    }, []);

    const populateButton = () => {
        // if performer but unassigned
        if (user.role === "customer") {
            if (uploadedUser._id === user._id) {
                if (task.isCompleted === false) {
                    return (
                        <>
                            <Button
                                buttonStyle="btn--cancel"
                                buttonSize="btn--large-bold"
                                buttonRadius="btn--half-rounded"
                                onClick={() => {
                                    navigate(`/edit-task/${task._id}`);
                                }}
                            >
                                EDIT
                            </Button>
                            <div className="margin-1rem" style={{ margin: "0.25rem" }}></div>
                            <UploadedCustomerButton taskId={task._id} />
                        </>
                    );
                } else {
                    return task.isCompleted && <PerformerReview taskId={task._id} task={task} />;
                }
            } else {
                return null;
            }
        } else if (user.role === "performer") {
            if (task.assignedUser) {
                // when the task has assigned performer
                if (task.assignedUser._id === user._id) {
                    return !task.isCompleted ? (
                        <AssignedPerformerButton taskId={task._id} /> // showing complete button
                    ) : (
                        <CustomerReview taskId={task._id} task={task} />
                    );
                } else {
                    return (
                        <Button buttonStyle="btn--cancel" buttonSize="btn--large-bold" buttonRadius="btn--half-rounded">
                            Already Assigned
                        </Button>
                    );
                }
            } else {
                // logged in user is not assigned user
                // showing interest button
                return (
                    <UnassignedPerformerButton performerId={user._id} customerId={uploadedUser._id} taskId={task._id} />
                );
            }
        } else {
            if (task.isCompleted === true) {
                return (
                    <Button buttonStyle="btn--cancel" buttonSize="btn--large-bold" buttonRadius="btn--half-rounded">
                        Completed
                    </Button>
                );
            } else {
                return null;
            }
        }
    };

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="task-detail">
                    <div className="task-detail-container">
                        <div className="task-detail-wrapper">
                            <div className="task-detail-content">
                                <div className="task-detail-content-main">
                                    <div className="task-detail-title">{task.title}</div>
                                    <div className="task-detail-main-bottom">
                                        <div className="task-detail-written-date">
                                            <div className="written">Written</div>
                                            <div className="written-date">
                                                {new Date(task.updatedAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                        </div>
                                        {/* <div className="task-detail-views">
                                                <div className="views-number">
                                                    32
                                                </div>
                                                <div className="views">views</div>
                                            </div> */}
                                    </div>
                                </div>
                                <div className="task-detail-content-body">
                                    <div className="task-detail-content-body-address">
                                        <div className="task-detail-content-body-key">Address</div>
                                        <div className="task-detail-content-body-value">
                                            {task.isRemote
                                                ? "Can be done remotely"
                                                : `${task.location && task.location.address}`}
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-start">
                                        <div className="task-detail-content-body-key">Start date</div>
                                        <div className="task-detail-content-body-value">
                                            {new Date(task.startDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}{" "}
                                        </div>
                                    </div>
                                    <div className="task-detail-content-body-end">
                                        <div className="task-detail-content-body-key">End date</div>
                                        <div className="task-detail-content-body-value">
                                            {new Date(task.endDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}{" "}
                                        </div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-budget">
                                        <div className="task-detail-content-body-key">Budget</div>
                                        <div className="task-detail-content-body-value">$ {task.budget}.00</div>
                                    </div>
                                    <div className="task-detail-content-body-payment">
                                        <div className="task-detail-content-body-key">How to pay</div>
                                        <div className="task-detail-content-body-value">by {task.paymentMethod}</div>
                                    </div>
                                    <hr className="task-detail-horizontal-line" />
                                    <div className="task-detail-content-body-desc">
                                        <div className="task-detail-content-body-key">Details</div>
                                        <div className="task-detail-content-body-value">{task.details}</div>
                                    </div>
                                    <div className="task-detail-btn-interest">{populateButton()}</div>
                                </div>
                            </div>
                            <div className="task-detail-user-box">
                                <div className="task-detail-user-title">Customer Information</div>
                                <Link className="task-detail-user-image" to={`/profile/${uploadedUser._id}`}>
                                    {uploadedUser.img ? (
                                        <img
                                            src={`http://localhost:8000/api/users/profile/${uploadedUser._id}`}
                                            alt="profile"
                                        />
                                    ) : (
                                        <img src="../images/profile/default.png" alt="default profile" />
                                    )}
                                </Link>
                                <div className="task-detail-user-name">
                                    {uploadedUser.firstname} {uploadedUser.lastname}
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

export default TaskDetail;

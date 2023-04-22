import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FindTasksItem(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        // fetch customer data when component mounts
        axios
            .get(`http://localhost:8000/api/users/${props.task.uploadedUser}`)
            .then((response) => {
                setFirstName(response.data.user.firstname);
                setLastName(response.data.user.lastname);
            })
            .catch((error) => console.error(error));
    }, [props.task.uploadedUser]);

    return (
        <div className="find-task-list-item">
            <div className="find-task-list-item-top">
                <div className="find-task-list-item-title">
                    <Link className="find-task-list-item-title-link" to={`/tasks/${props.task._id}`}>
                        {props.task.title}
                    </Link>
                </div>
                <div className="find-task-list-item-price">
                    <div className="find-task-price-tag">$</div>
                    <div className="find-task-price-number">{props.task.budget}.00</div>
                </div>
            </div>
            <div className="find-task-list-item-bottom">
                <div className="find-task-list-item-desc">
                    <div className="find-task-list-item-desc-address">
                        {props.task.isRemote
                            ? "Can be done remotely"
                            : `${props.task.location.city}, ${props.task.location.province}`}
                    </div>
                    <div className="find-task-list-item-desc-when">
                        <div className="find-task-list-item-desc-date-title">Date:</div>
                        <div className="find-task-list-item-desc-date-time">
                            {/* change later */}
                            <div className="find-task-list-item-desc-date-start">
                                {new Date(props.task.startDate).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}{" "}
                            </div>
                            <div className="find-task-list-item-desc-date-end">
                                {"-" +
                                    new Date(props.task.endDate).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}{" "}
                            </div>
                        </div>
                    </div>
                </div>
                {/* change later */}
                <div className="find-task-list-item-uploader"> {`${firstName} ${lastName.charAt(0)}.`}</div>
            </div>
        </div>
    );
}

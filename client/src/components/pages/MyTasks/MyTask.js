import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./TasksAsPerformer.css";

function TasksAsPerformer() {
    const cookies = new Cookies();

    const [isSearch, setIsSearch] = useState("");
    const [search, setSearch] = useState("");

    const [user, setUser] = useState({});
    const [createdTasks, setCreatedTasks] = useState([]);
    const [createdCompletedTasks, setCreatedCompletedTasks] = useState([]);
    const [assignedTasks, setAssignedTasks] = useState([]);
    const [assignedCompletedTasks, setAssignedCompletedTasks] = useState([]);
    const [isCustomerSelected, setIsCustomerSelected] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`)
            .then(data => {
                setUser(data.data.user);

                axios
                    .get(`http://localhost:8000/api/tasks/getCreatedTasks/${data.data.user._id}?search=${search}`)
                    .then(data => {
                        setCreatedTasks(data.data.createdTasks);
                        setCreatedCompletedTasks(data.data.completedTasks);
                    });
                
                axios
                    .get(`http://localhost:8000/api/tasks/getAssignedTasks/${data.data.user._id}?search=${search}`)
                    .then(data => {
                        setAssignedTasks(data.data.assignedTasks);
                        setAssignedCompletedTasks(data.data.completedTasks);
                    });
            });

    }, [isSearch]);

    const customer_performer_button = () => {
        const role = isCustomerSelected ? "customer" : "performer";

        return (
            <div className="role-filter">
                <button
                    className={`tasks-${role}-role-customer-button`}
                    onClick={() => setIsCustomerSelected(true)}
                >
                    As a customer
                </button>
                {user.role === "performer" &&
                <button
                    className={`tasks-${role}-role-performer-button`}
                    onClick={() => setIsCustomerSelected(false)}
                >
                    As a performer
                </button>
                }
            </div>
        )
    }

    const description = () => {
        if (isCustomerSelected) {
            return (
                <h5 className="tasks-customer-title-sub">
                    <div className="tasks-customer-title-sub-text-upper">
                        Check the tasks what you've created
                    </div>
                    <div className="tasks-customer-title-sub-text-lower">
                        and review the performers after the task
                        is completed
                    </div>
                </h5>
            )
        } else {
            return (
                <h5 className="tasks-performer-title-sub">
                    <div className="tasks-customer-title-sub-text-upper">
                        Check the tasks what you've assigned
                    </div>
                    <div className="tasks-customer-title-sub-text-lower">
                        and review the customer after completing
                        the task
                    </div>
                </h5>
            )
        }
    }

    const leftTasks = () => {
        let leftTasks;
        if (isCustomerSelected === true) {
            leftTasks = createdTasks;
        } else {
            leftTasks = assignedTasks;
        }

        return leftTasks.map(task => 
            <>
                <div className="tasks-performer-left-list-item">
                    <div className="tasks-performer-left-list-item-top">
                        <div className="tasks-performer-left-list-item-title">
                            <Link
                                className="find-task-list-item-title-link"
                                to={`/tasks/${task._id}`}
                            >
                                {task.title}
                            </Link>
                        </div>
                        <div className="tasks-performer-left-list-item-price">
                            <div className="tasks-performer-left-price-tag">
                                $
                            </div>
                            <div className="tasks-performer-left-price-number">
                                {task.budget}.00
                            </div>
                        </div>
                    </div>
                    <div className="tasks-performer-left-list-item-bottom">
                        <div className="tasks-performer-left-list-item-desc">
                            <div className="tasks-performer-left-list-item-desc-address">
                                {task.isRemote
                                    ? "Can be done remotely"
                                    : `${task.location.city}, ${task.location.province}`}
                            </div>
                            <div className="tasks-performer-left-list-item-desc-when">
                                <div className="tasks-performer-left-list-item-desc-date-title">
                                    Date:
                                </div>
                                <div className="tasks-performer-left-list-item-desc-date-time">
                                    <div className="tasks-performer-left-list-item-desc-starting-date">
                                        {new Date(
                                            task.startDate
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                        })}{" "}
                                    </div>
                                    <div className="tasks-performer-left-list-item-desc-ending-date">
                                        {"-" + new Date(
                                            task.endDate
                                        ).toLocaleDateString("en-US", {
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
                        <div className="tasks-performer-right-list-item-performer">
                            <div className="tasks-performer-right-list-done-by">
                                Written by
                            </div>
                            <div className="tasks-performer-right-list-item-performer-name">
                                {task.uploadedUser.firstname} {task.uploadedUser.lastname}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const rightTasks = () => {
        let rightTasks;
        if (isCustomerSelected === true) {
            rightTasks = createdCompletedTasks;
        } else {
            rightTasks = assignedCompletedTasks;
        }

        return rightTasks.map(task => 
            <>
                <div className="tasks-performer-right-list-item">
                    <div className="tasks-performer-right-list-item-top">
                        <div className="tasks-performer-right-list-item-title">
                            <Link
                                className="find-task-list-item-title-link"
                                to={`/tasks/${task._id}`}
                            >
                                {task.title}
                            </Link>
                        </div>
                        <div className="tasks-performer-right-list-item-price">
                            <div className="tasks-performer-right-price-tag">
                                $
                            </div>
                            <div className="tasks-performer-right-price-number">
                                {task.budget}.00
                            </div>
                        </div>
                    </div>
                    <div className="tasks-performer-right-list-item-bottom">
                        <div className="tasks-performer-right-list-item-desc">
                            <div className="tasks-performer-right-list-item-desc-address">
                                {task.isRemote
                                    ? "Can be done remotely"
                                    : `${task.location.city}, ${task.location.province}`}
                            </div>
                            <div className="tasks-performer-right-list-item-desc-when">
                                <div className="tasks-performer-right-list-item-desc-date-title">
                                    Date:
                                </div>
                                <div className="tasks-performer-right-list-item-desc-date-time">
                                    <div className="tasks-performer-right-list-item-desc-starting-date">
                                        {new Date(
                                            task.startDate
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                        })}{" "}
                                    </div>
                                    <div className="tasks-performer-right-list-item-desc-ending-date">
                                        {"-" + new Date(
                                            task.endDate
                                        ).toLocaleDateString("en-US", {
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
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="tasks-performer">
                    <div className="tasks-performer-container">
                        <div className="tasks-performer-wrapper">
                            <div className="tasks-performer-title">
                                <h1 className="tasks-performer-title-main">
                                    My tasks
                                </h1>
                                {description()}
                            </div>
                            <div className="tasks-performer-role-container">
                                <div className="tasks-performer-role-box">
                                    {customer_performer_button()}
                                </div>
                            </div>

                            <div className="tasks-performer-search-container">
                                <div className="tasks-performer-search-wrap">
                                    <div className="tasks-performer-search-box">
                                        <form onSubmit={e => {
                                            e.preventDefault();

                                            setIsSearch(!isSearch);
                                        }}>

                                            <input
                                                type="text"
                                                className="tasks-performer-search-input"
                                                placeholder="Search the keyword"
                                                value={search}
                                                onChange={e => setSearch(e.target.value)}
                                            />
                                            <div className="tasks-performer-search-btn-box">
                                                <i class="fa-solid fa-magnifying-glass tasks-performer-search-btn"></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="tasks-performer-content">
                                <div className="tasks-performer-left-content">
                                    <div className="tasks-performer-left-content-title">
                                        {isCustomerSelected ? "Created" : "Assigned"}
                                    </div>
                                    <div className="tasks-performer-left-content-list">
                                        {leftTasks()}
                                    </div>
                                </div>

                                <div className="tasks-performer-right-content">
                                    <div className="tasks-performer-right-content-title">
                                        Completed
                                    </div>
                                    <div className="tasks-performer-right-content-list">
                                        {rightTasks()}
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

export default TasksAsPerformer;

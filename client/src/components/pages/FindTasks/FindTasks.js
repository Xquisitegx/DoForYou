import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./FindTasks.css";
import axios from "axios";
import FindTasksItem from "./FindTasksItem";

function FindTasks() {
    const [search, setSearch] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filterString, setFilterString] = useState("");
    const [categories, setCategories] = useState({
        "Courier Service": false,
        "Cargo Transportation": false,
        "Transport Repair": false,
        "Event and Promotions": false,
        "Computer": false,
        "Software Development": false,
        "Design": false,
        "Photo Video Audio": false,
        "Repair and Construction": false,
        "Cleaning and Household": false,
        "Installation": false,
        "Repair of Digital Equipment": false,
        "Virtual Assistant": false,
        "Beauty and Health": false,
        "Tutors and Training": false,
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks`).then((data) => {
            setTasks(data.data.tasks);
        });
    }, []);

    useEffect(() => {
        const selectedCategories = Object.keys(categories).filter(key => categories[key] === true);
        let filterString = "";
        if (selectedCategories.length > 0) {
            filterString = `category=${selectedCategories.join(',')}&search=${search}`;
        }

        setFilterString(filterString);

        axios.get(`http://localhost:8000/api/tasks?${filterString}`).then((data) => {
            setTasks(data.data.tasks);
        });
    }, [categories]);

    const handleCheckbox = (key) => {
        setCategories({
            ...categories,
            [key]: !categories[key]
        });
    }

    return (
        <>
            <div id="container">
                <Navbar />

                <div className="find-tasks">
                    <div className="find-tasks-container">
                        <div className="find-tasks-wrapper">
                            <div className="find-tasks-title">
                                <h1 className="find-tasks-title-main">
                                    All tasks
                                </h1>
                                <h5 className="find-tasks-title-sub">
                                    Let's search the task which needs your help
                                </h5>
                            </div>
                            <div className="find-tasks-search-container">
                                <div className="find-tasks-search-wrap">
                                    <div className="search-box">
                                        <form onSubmit={e => {
                                            e.preventDefault();

                                            const selectedCategories = Object.keys(categories).filter(key => categories[key] === true);
                                            let filterString = `search=${search}`;
                                            if (selectedCategories.length > 0) {
                                                filterString += `&category=${selectedCategories.join(',')}`;
                                            }

                                            console.log(filterString);
                                            axios.get(`http://localhost:8000/api/tasks?${filterString}`).then((data) => {
                                                console.log(filterString);
                                                setTasks(data.data.tasks);
                                            });
                                        }}>
                                            <input
                                                type="text"
                                                className="search-input"
                                                placeholder="Search the keyword"
                                                value={search}
                                                onChange={e => setSearch(e.target.value)}
                                            />
                                            <div className="button button_common">
                                                SEARCH
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="find-tasks-content">
                                <div className="find-tasks-filter">
                                    <div className="find-tasks-filter-list">
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Courier Service"]}
                                                onChange={() => handleCheckbox("Courier Service")}
                                            />
                                            <div className="filter-label">
                                                Courier Services
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Cargo Transportation"]}
                                                onChange={() => handleCheckbox("Cargo Transportation")}
                                            />
                                            <div className="filter-label">
                                                Cargo Transportation
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Transport Repair"]}
                                                onChange={() => handleCheckbox("Transport Repair")}
                                            />
                                            <div className="filter-label">
                                                Transport Repair
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Event and Promotions"]}
                                                onChange={() => handleCheckbox("Event and Promotions")}
                                            />
                                            <div className="filter-label">
                                                Event and Promotions
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Computer"]}
                                                onChange={() => handleCheckbox("Computer")}
                                            />
                                            <div className="filter-label">
                                                Computer
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Software Development"]}
                                                onChange={() => handleCheckbox("Software Development")}
                                            />
                                            <div className="filter-label">
                                                Software Development
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Design"]}
                                                onChange={() => handleCheckbox("Design")}
                                            />
                                            <div className="filter-label">
                                                Design
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Photo Video Audio"]}
                                                onChange={() => handleCheckbox("Photo Video Audio")}
                                            />
                                            <div className="filter-label">
                                                Photo, Video and Audio
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Repair and Construction"]}
                                                onChange={() => handleCheckbox("Repair and Construction")}
                                            />
                                            <div className="filter-label">
                                                Repair and Construction
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Cleaning and Household"]}
                                                onChange={() => handleCheckbox("Cleaning and Household")}
                                            />
                                            <div className="filter-label">
                                                Cleaning and Household
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Installation"]}
                                                onChange={() => handleCheckbox("Installation")}
                                            />
                                            <div className="filter-label">
                                                Installation
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Repair of Digital Equipment"]}
                                                onChange={() => handleCheckbox("Repair of Digital Equipment")}
                                            />
                                            <div className="filter-label">
                                                Repair of Digital Equipment
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Virtual Assistant"]}
                                                onChange={() => handleCheckbox("Virtual Assistant")}
                                            />
                                            <div className="filter-label">
                                                Virtual Assistant
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Beauty and Health"]}
                                                onChange={() => handleCheckbox("Beauty and Health")}
                                            />
                                            <div className="filter-label">
                                                Beauty and Health
                                            </div>
                                        </div>
                                        <div className="find-tasks-filter-list-row">
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                value={categories["Tutors and Training"]}
                                                onChange={() => handleCheckbox("Tutors and Training")}
                                            />
                                            <div className="filter-label">
                                                Tutors and Training
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="find-tasks-list">
                                    {tasks.map((task) => (
                                        <FindTasksItem task={task} />
                                    ))}
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

export default FindTasks;

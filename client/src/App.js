import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import "./App.css";
import CreateNewTask from "./components/pages/NewTask/CreateNewTask";
import FindTasks from "./components/pages/FindTasks/FindTasks";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Register from "./components/pages/Register/Register";
import BecomePerformer from "./components/pages/BecomePerformer/BecomePerformer";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import ForgotPasswordAlert from "./components/pages/ForgotPassword/ForgotPasswordAlert";
import TaskDetail from "./components/pages/TaskDetail/TaskDetail";

import Chat from "./components/pages/Chat/Chat";

import TasksAsCustomer from "./components/pages/MyTasks/TasksAsCustomer";
import TasksAsPerformer from "./components/pages/MyTasks/TasksAsPerformer";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import MyProfile from "./components/pages/Profile/MyAccount";
import MyReviews from "./components/pages/MyReviews/MyReviews";
import TaskDetailAsCustomer from "./components/pages/MyTasks/TaskDetailAsCustomer";
import TaskDetailAsPerformer from "./components/pages/MyTasks/TaskDetailAsPerformer";
import MyTask from "./components/pages/MyTasks/MyTask";

function App() {
    const cookies = new Cookies();

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/create-new-task"
                        element={<CreateNewTask />}
                    />
                    <Route path="/edit-task/:taskId" element={<CreateNewTask />} />
                    <Route path="/find-tasks" element={<FindTasks />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/become-performer"
                        element={<BecomePerformer />}
                    />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/password-alert"
                        element={<ForgotPasswordAlert />}
                    />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/my-tasks" element={<MyTask />} />
                    <Route path="/tasks/:taskId" element={<TaskDetail />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/profile/:userId" element={<MyProfile />} />
                    <Route path="/my-reviews" element={<MyReviews />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

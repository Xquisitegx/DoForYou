import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./ModalCancel.css";

const ModalCancel = (props) => {
    const navigate = useNavigate();
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-cancel" onClick={props.onClose}>
            <div
                className="modal-cancel-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-cancel-header">
                    <h4 className="modal-cancel-title">Cancel the task</h4>
                </div>
                <div className="modal-cancel-body">
                    <div className="modal-cancel-body-text">
                        Are you sure you'd like to cancel the task?
                    </div>
                </div>
                <div className="modal-cancel-btns">
                    <div className="modal-cancel-no-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            No
                        </Button>
                    </div>
                    <div className="modal-cancel-yes-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={() => {
                                console.log(props.taskId);
                                axios
                                    .delete(`http://localhost:8000/api/tasks/delete/${props.taskId}`)
                                    .then((data) => {
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                                navigate("/find-tasks");
                            }}
                        >
                            Yes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCancel;

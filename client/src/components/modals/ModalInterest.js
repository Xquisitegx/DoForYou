import axios from "axios";
import React from "react";
import { Button } from "../Button";
import "./ModalInterest.css";
import { useNavigate } from "react-router-dom";

const ModalInterest = (props) => {
    const navigate = useNavigate();
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal-interest" onClick={props.onClose}>
            <div className="modal-interest-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-interest-header">
                    <h4 className="modal-interest-title">Ready for sending message</h4>
                </div>
                <div className="modal-interest-body">
                    <div className="modal-interest-body-text-main">
                        <div className="modal-interest-body-text-line">If you're chosen by the customer,</div>
                        <div className="modal-interest-body-text-line">they will contact you.</div>
                    </div>
                    <div className="modal-interest-body-text-sub">
                        <div className="modal-interest-body-text-sub-line">
                            Do you really have a interest in this task?
                        </div>
                    </div>
                </div>
                <div className="modal-interest-btns">
                    <div className="modal-interest-no-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            No
                        </Button>
                    </div>
                    <div className="modal-interest-yes-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={() => {
                                console.log(props.customerId, props.performerId, props.taskId);
                                axios
                                    .post("http://localhost:8000/api/chat/rooms", {
                                        customerId: props.customerId,
                                        performerId: props.performerId,
                                        taskId: props.taskId,
                                    })
                                    .then((data) => {
                                        console.log(data.data);
                                    });
                                navigate("/find-tasks");
                                window.location.reload();
                                props.onClose();
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

export default ModalInterest;

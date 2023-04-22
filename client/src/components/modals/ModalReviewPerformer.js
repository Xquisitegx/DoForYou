import axios from "axios";
import React, { useState } from "react";
import { Button } from "../Button";
import "./ModalReviewPerformer.css";
import { useNavigate } from "react-router-dom";

const ModalReviewPerformer = (props) => {
    const navigate = useNavigate();
    const [isStarClicked, setIsStarClicked] = useState([false, false, false, false, false]);
    const [star, setStar] = useState(1);
    const [review, setReview] = useState("");

    const handleImgError = (e) => {
        e.target.src = "../images/profile/default.png";
    };
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-review-performer" onClick={props.onClose}>
            <div className="modal-review-performer-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-review-performer-header">
                    <h4 className="modal-review-performer-title">Review the performer</h4>
                </div>
                <div className="modal-review-performer-body">
                    <div className="modal-review-performer-user-image-box">
                        <div className="modal-review-performer-user-image">
                            {props.task.assignedUser ? (
                                <img
                                    src={`http://localhost:8000/api/users/profile/${props.task.assignedUser._id}`}
                                    onError={handleImgError}
                                    alt="default profile"
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="modal-review-performer-body-username">
                        {props.task.assignedUser.firstname} {props.task.assignedUser.lastname}
                    </div>
                    <div className="modal-review-performer-stars-box">
                        <div className="modal-review-performer-stars">
                            {isStarClicked.map((_, i) => {
                                let classname = "fa-star fa-xl review-performer-star fa-";
                                if (i < star) {
                                    classname += "solid";
                                } else {
                                    classname += "regular";
                                }
                                return (
                                    <div className="modal-review-performer-star">
                                        <i
                                            className={classname}
                                            onClick={() => {
                                                setStar(i + 1);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="modal-review-performer-body-opinion-box">
                        <textarea
                            className="modal-review-performer-body-opinion-textarea"
                            rows={7}
                            placeholder="Share your opinion about this performer"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                </div>
                <div className="modal-review-performer-btns">
                    <div className="modal-review-performer-submit-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={() => {
                                axios
                                    .post("http://localhost:8000/api/reviews/reviewPerformer", {
                                        task: props.taskId,
                                        // performer: props.task.assignedUser,
                                        rating: star,
                                        review,
                                    })
                                    .then((data) => {
                                        console.log(data.data.review);
                                    });
                                navigate("/my-tasks");
                                window.location.reload();
                                props.onClose();
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="modal-review-performer-cancel-btn">
                        <Button
                            buttonStyle="btn--cancel"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={props.onClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalReviewPerformer;

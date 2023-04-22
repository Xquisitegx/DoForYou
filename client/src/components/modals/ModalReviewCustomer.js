import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import "./ModalReviewCustomer.css";
import { useNavigate } from "react-router-dom";

function GoodTags(props) {
    let index = 0;
    const counts = [2, 2, 2];
    const goodTagNames = Object.keys(props.goodTags);

    return counts.map((iteration) => {
        const jsxArray = Array.from({ length: iteration }, (_) => {
            let style = "btn--slim-category";
            let currentIndex = index;
            if (props.goodTags[goodTagNames[currentIndex]] === true) style += "-clicked";

            return (
                <div className="performer-categories-btn-box" key={index}>
                    <Button
                        buttonStyle={style}
                        buttonSize="btn--small"
                        buttonRadius="btn--rounded"
                        onClick={(e) => {
                            e.preventDefault();
                            props.setGoodTags({
                                ...props.goodTags,
                                [goodTagNames[currentIndex]]: !props.goodTags[goodTagNames[currentIndex]],
                            });
                        }}
                    >
                        <div className="cate-icon-small">{goodTagNames[index++]}</div>
                    </Button>
                </div>
            );
        });

        return (
            <div className="review-customer-good-keyword-row" key={iteration}>
                {jsxArray}
            </div>
        );
    });
}

function BadTags(props) {
    let index = 0;
    const counts = [2, 2, 2];
    const badTagNames = Object.keys(props.badTags);

    return counts.map((iteration) => {
        const jsxArray = Array.from({ length: iteration }, (_) => {
            let style = "btn--slim-category";
            let currentIndex = index;
            if (props.badTags[badTagNames[currentIndex]] === true) style += "-clicked";
            return (
                <Button
                    buttonStyle={style}
                    buttonSize="btn--small"
                    buttonRadius="btn--rounded"
                    onClick={(e) => {
                        e.preventDefault();
                        props.setBadTags({
                            ...props.badTags,
                            [badTagNames[currentIndex]]: !props.badTags[badTagNames[currentIndex]],
                        });
                    }}
                >
                    <div className="cate-icon-small">{badTagNames[index++]}</div>
                </Button>
            );
        });

        return (
            <div className="review-customer-good-keyword-row" key={iteration}>
                {jsxArray}
            </div>
        );
    });
}

const ModalReviewCustomer = (props) => {
    const navigate = useNavigate();
    const [isClickGood, setIsClickGood] = useState(false);
    const [isClickBad, setIsClickBad] = useState(false);

    const [goodTags, setGoodTags] = useState({
        "Punctual payment": false,
        "Good manners": false,
        Friendly: false,
        "Great Communication": false,
        "Reasonable request": false,
        Positive: false,
    });
    const [badTags, setBadTags] = useState({
        "Payment delay": false,
        "Lack of description": false,
        Rude: false,
        "Poor Communication": false,
        "Unreasonable request": false,
        Negative: false,
    });

    const selectGoodThumbs = () => {
        let classname = "fa-regular fa-thumbs-up fa-3x modal-review-thumbs-up ";
        if (isClickGood) {
            classname += "selected-thumbs";
        }
        return (
            <i
                class={classname}
                onClick={() => {
                    setIsClickGood(true);
                    setIsClickBad(false);
                }}
            />
        );
    };
    const selectBadThumbs = () => {
        let classname = "fa-regular fa-thumbs-down fa-3x fa-flip-horizontal modal-review-thumbs-down ";
        if (isClickBad) {
            classname += "selected-thumbs";
        }
        return (
            <i
                class={classname}
                onClick={() => {
                    setIsClickBad(true);
                    setIsClickGood(false);
                }}
            />
        );
    };
    const showKeywordBox = () => {
        if (isClickGood) {
            return (
                <div className="modal-review-customer-good-keyword">
                    <GoodTags goodTags={goodTags} setGoodTags={setGoodTags} />
                </div>
            );
        } else if (isClickBad) {
            return (
                <div className="modal-review-customer-bad-keyword">
                    <BadTags badTags={badTags} setBadTags={setBadTags} />
                </div>
            );
        } else {
            return <></>;
        }
    };
    const handleImgError = (e) => {
        e.target.src = "../images/profile/default.png";
    };
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-review-customer" onClick={props.onClose}>
            <div className="modal-review-customer-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-review-customer-header">
                    <h4 className="modal-review-customer-title">Review the customer</h4>
                </div>
                <div className="modal-review-customer-body">
                    <div className="modal-review-customer-user-image-box">
                        <div className="modal-review-customer-user-image">
                            {props.task.uploadedUser ? (
                                <img
                                    src={`http://localhost:8000/api/users/profile/${props.task.uploadedUser._id}`}
                                    onError={handleImgError}
                                    alt="default profile"
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="modal-review-customer-body-username">
                        {props.task.uploadedUser.firstname} {props.task.uploadedUser.lastname}
                    </div>
                    <div className="modal-review-customer-good-bad-box">
                        <div className="modal-review-customer-good">{selectGoodThumbs()}</div>
                        <div className="modal-review-customer-bad">{selectBadThumbs()}</div>
                    </div>
                    <div className="modal-review-customer-body-keyword-box">{showKeywordBox()}</div>
                </div>
                <div className="modal-review-customer-btns">
                    <div className="modal-review-customer-submit-btn">
                        <Button
                            buttonStyle="btn--primary-yellow"
                            buttonSize="btn--wide-bold"
                            buttonRadius="btn--square"
                            onClick={() => {
                                const object = isClickGood ? goodTags : badTags;
                                const selectedTags = Object.keys(object).filter((key) => {
                                    if (object[key] === true) {
                                        return key;
                                    }
                                });

                                axios
                                    .post("http://localhost:8000/api/reviews/reviewCustomer", {
                                        task: props.taskId,
                                        like: isClickGood ? true : false,
                                        tags: selectedTags,
                                    })
                                    .then((data) => {});

                                navigate("/my-tasks");
                                window.location.reload();
                                props.onClose();
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                    <div className="modal-review-customer-cancel-btn">
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

export default ModalReviewCustomer;

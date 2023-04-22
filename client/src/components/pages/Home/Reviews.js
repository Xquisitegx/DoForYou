import React, { Component } from "react";
import { Button } from "../../Button";
import "./Reviews.css";
import ReviewSlide from "./ReviewSlide";
// import ReviewsItem from "./ReviewsItem";

function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="reviews-title">
                        <h1 className="title-main">Reviews</h1>
                        <h5 className="title-sub">
                            What customers say about our performers?
                        </h5>
                    </div>
                    <div className="reviews-content">
                        {/* The slider will be here */}
                        <ReviewSlide />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;

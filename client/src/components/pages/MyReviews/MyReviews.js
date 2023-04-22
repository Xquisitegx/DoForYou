import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./MyReviews.css";
import axios from "axios";
import Cookies from "universal-cookie";

function MyReviews() {
    const cookies = new Cookies();
    const [customerReviewValues, setCustomerReviewValues] = useState([]);
    const [positiveCounts, setPositiveCounts] = useState([]);
    const [negativeCounts, setNegativeCounts] = useState([]);
    const [performerReview, setPerformerReview] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/getLoggedInUser/${cookies.get("jwt")}`).then((data) => {
            setUser(data.data.user);
            const userId = data.data.user._id;

            axios.get(`http://localhost:8000/api/reviews/reviewCustomer/${userId}`).then((data) => {
                setPositiveCounts(Object.values(data.data.positiveCounts));
                setNegativeCounts(Object.values(data.data.negativeCounts));
            });

            axios.get(`http://localhost:8000/api/reviews/reviewPerformer/${userId}`).then((data) => {
                setPerformerReview(data.data.reviews);
            });
        });
    }, []);

    const populatePerformerReview = () => {
        return performerReview.map((review) => {
            const populateStars = () => {
                const stars = [];
                const rating = review.rating;
                for (let i = 1; i <= 5; ++i) {
                    if (rating >= i) {
                        stars.push(<i className="fa-solid fa-star star-icon" key={i} />);
                    } else {
                        stars.push(<i className="fa-regular fa-star star-end-icon" key={i} />);
                    }
                }

                return <div className="review-stars">{stars}</div>;
            };
            return (
                <div className="my-reviews-as-performer-review-box">
                    <div className="my-reviews-as-performer-review-left">
                        <div className="my-reviews-as-performer-review-stars">
                            {populateStars()}
                            <div className="reviews-numbers">
                                <div className="reviews-num">{review.rating}</div>
                                <div className="reviews-out-of-num">/ 5</div>
                            </div>
                        </div>
                        <div className="my-reviews-as-performer-review-bottom">
                            <div className="my-reviews-as-performer-review-writer">
                                {`${review.task.uploadedUser.firstname} ${review.task.uploadedUser.lastname.charAt(
                                    0
                                )}.`}
                            </div>
                        </div>
                    </div>
                    <div className="my-reviews-as-performer-review-right">
                        <div className="my-reviews-as-performer-review-title">{review.task.title}</div>
                        <div className="my-reviews-as-performer-review-desc">{review.review}</div>
                    </div>
                </div>
            );
        });
    };

    const populateGoodReviews = () => {
        const list = [
            "Punctual Payment",
            "Good Manners",
            "Friendly",
            "Great Communication",
            "Reasonable Request",
            "Positive",
        ];

        return (
            <div className="my-reviews-as-customer-evaluation-good-section">
                <div className="my-reviews-as-customer-evaluation-good-thumbs-section">
                    <div className="my-reviews-as-customer-evaluation-good-thumbs">
                        <i class="fa-regular fa-thumbs-up fa-2x my-reviews-thumbs-up" />
                    </div>
                </div>
                <div className="my-reviews-as-customer-evaluation-good-keywords">
                    {positiveCounts.map((value, i) => {
                        if (value > 0) {
                            return (
                                <div className="evaluation-good">
                                    <div className="evaluation-good-keyword">
                                        <div className="evaluation-good-keyword-punctual-payment">{list[i]}</div>
                                        <div className="evaluation-good-keyword-number">{value}</div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    };

    const populateBadReviews = () => {
        const list = [
            "Payment Delay",
            "Lack of Description",
            "Rude",
            "Poor Communication",
            "Unreasonable Request",
            "Negative",
        ];

        return (
            <div className="my-reviews-as-customer-evaluation-bad-section">
                <div className="my-reviews-as-customer-evaluation-bad-thumbs-section">
                    <div className="my-reviews-as-customer-evaluation-bad-thumbs">
                        <i class="fa-regular fa-thumbs-down fa-2x fa-flip-horizontal my-reviews-thumbs-down" />
                    </div>
                </div>
                <div className="my-reviews-as-customer-evaluation-bad-keywords">
                    {negativeCounts.map((value, i) => {
                        if (value > 0) {
                            return (
                                <div className="evaluation-bad">
                                    <div className="evaluation-bad-keyword">
                                        <div className="evaluation-bad-keyword-number">{value}</div>
                                        <div className="evaluation-bad-keyword-punctual-payment">{list[i]}</div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    };

    return (
        <>
            <div id="container">
                <Navbar />
                <div className="my-reviews">
                    <div className="my-reviews-container">
                        <div className="my-reviews-wrapper">
                            <div className="my-reviews-wrapper-top">
                                <div className="responsive-profile-photo-box">
                                    <div className="responsive-profile-photo">
                                        <div className="responsive-profile-photo-image">
                                            {user.img ? (
                                                <img
                                                    src={`http://localhost:8000/api/users/profile/${user._id}`}
                                                    alt="profile"
                                                />
                                            ) : (
                                                <img src="images/profile/default.png" alt="default profile" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-reviews-wrapper-bottom">
                                <div className="my-reviews-wrapper-left">
                                    <div className="my-reviews-wrapper-left-section-title">
                                        <div className="my-reviews-wrapper-left-section-profile">
                                            <Link to="/my-account">Profile</Link>
                                        </div>
                                        <div className="my-reviews-wrapper-left-section-reviews">
                                            <Link to="/my-reviews">Reviews</Link>
                                        </div>
                                    </div>
                                    <div className="my-reviews-as-customer">
                                        <div className="my-reviews-as-customer-title">As a Customer</div>
                                        <div className="my-reviews-as-customer-evaluation">
                                            {populateGoodReviews()}
                                            {populateBadReviews()}
                                        </div>
                                    </div>
                                    {user.role === "performer" && (
                                        <div className="my-reviews-as-performer">
                                            <div className="my-reviews-as-performer-title">As a Performer</div>
                                            <div className="my-reviews-as-performer-reviews">
                                                {populatePerformerReview()}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="my-reviews-wrapper-right">
                                    <div className="my-reviews-wrapper-right-profile-box">
                                        <div className="my-reviews-wrapper-right-profile-photo">
                                            <div className="my-reviews-wrapper-right-profile-photo-image">
                                                {user.img ? (
                                                    <img
                                                        src={`http://localhost:8000/api/users/profile/${user._id}`}
                                                        alt="profile"
                                                    />
                                                ) : (
                                                    <img src="images/profile/default.png" alt="default profile" />
                                                )}
                                            </div>
                                        </div>
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

export default MyReviews;

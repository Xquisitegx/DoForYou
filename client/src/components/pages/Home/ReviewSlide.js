import React from "react";
import "./ReviewSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function ReviewSlide() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2160,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1880,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1575,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Repair speaker
                                </div>
                                <div className="review-price">$ 65.00</div>
                                <div className="review-desc">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Victoria K.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.5
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>21</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Math tutor grade 9
                                </div>
                                <div className="review-price">$ 110.00</div>
                                <div className="review-desc">
                                    eveniet ut et voluptates repudiandae sint et
                                    molestiae non recusandae. Itaque earum rerum
                                    hic tenetur a sapiente delectus, ut aut
                                    reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus
                                    asperiores repellat.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f2.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Alex B.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.7
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>74</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Host for the event
                                </div>
                                <div className="review-price">$ 360.00</div>
                                <div className="review-desc">
                                    Quis autem vel eum iure reprehenderit qui in
                                    ea voluptate velit esse quam nihil molestiae
                                    consequatur, vel illum qui dolorem eum
                                    fugiat quo voluptas nulla pariatur?
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/m1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Dmitry G.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.8
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>34</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Do hair and make up for party
                                </div>
                                <div className="review-price">$ 90.00</div>
                                <div className="review-desc">
                                    Nam libero tempore, cum soluta nobis est
                                    eligendi optio cumque nihil impedit quo
                                    minus id quod maxime placeat facere
                                    possimus, omnis voluptas assumenda est,
                                    omnis dolor repellendus.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f3.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Bonnie A.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.9
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>13</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Simple web design
                                </div>
                                <div className="review-price">$ 120.00</div>
                                <div className="review-desc">
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti quos dolores et quas molestias
                                    excepturi sint occaecati cupiditate non
                                    provident, similique sunt in culpa qui
                                    officia deserunt.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/m3.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Tom H.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.9
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>22</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Figure drawing tutor
                                </div>
                                <div className="review-price">$ 320.00</div>
                                <div className="review-desc">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/m2.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Nalden V.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.8
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>16</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Pick up the package from personal locker
                                </div>
                                <div className="review-price">$ 25.00</div>
                                <div className="review-desc">
                                    Suspendisse maximus sollicitudin ligula id
                                    viverra. Nullam vel sapien arcu.
                                    Pellentesque sit amet nisl id justo volutpat
                                    malesuada. Nulla auctor, est vitae tincidunt
                                    pretium, massa risus varius risus, a cursus
                                    leo sem non sapien. Sed sem felis
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/m4.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Garret Q.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.6
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>19</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Replace the ram
                                </div>
                                <div className="review-price">$ 50.00</div>
                                <div className="review-desc">
                                    euismod vitae orci et, rhoncus lobortis
                                    quam. Etiam lacinia ligula ante. In hac
                                    habitasse platea dictumst. Curabitur
                                    porttitor sem justo. Curabitur ac ipsum in
                                    felis luctus volutpat non eu arcu. Cras
                                    condimentum porta quam eu lobortis.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f6.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Hannah Y.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.9
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>23</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Clean the room for dog
                                </div>
                                <div className="review-price">$ 60.00</div>
                                <div className="review-desc">
                                    Donec id fringilla ex, non hendrerit eros.
                                    Donec vestibulum, tellus at vestibulum
                                    suscipit, nunc erat pulvinar lacus,
                                    scelerisque tempus est leo finibus elit. Sed
                                    porttitor cursus elit eget pellentesque.
                                    Pellentesque pharetra odio ac ante placerat
                                    efficitur. Cras tempus pulvinar blandit.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f5.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Zyne G.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.9
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>6</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-content">
                        <div className="single-review-card">
                            <div className="single-review-card-text">
                                <div className="single-review-quotes">
                                    <i class="fa-solid fa-quote-left fa-2x" />
                                </div>
                                <div className="review-title">
                                    Personal Training at gym
                                </div>
                                <div className="review-price">$ 280.00</div>
                                <div className="review-desc">
                                    Aliquam erat volutpat. Etiam tincidunt elit
                                    eu arcu auctor, id rutrum urna cursus. Nam
                                    dolor nisi, bibendum sit amet pellentesque
                                    in, vestibulum blandit erat. Sed sed ante et
                                    urna pellentesque viverra. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                            <div className="review-performer-info">
                                <div className="review-performer-pic">
                                    <a href="/">
                                        <img
                                            src="images/profile/f4.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="review-performer-details">
                                    <div className="review-performer-user-name">
                                        Soo O.
                                    </div>
                                    <div className="review-performer-user-rating">
                                        Rating:
                                        <i className="fas fa-star"></i>
                                        4.8
                                    </div>
                                    <div className="review-performer-user-completed">
                                        completed <b>15</b> tasks
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ReviewSlide;

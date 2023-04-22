import React from "react";
import { Button } from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "./ContactUs.css";

function ContactUs() {
    return (
        <>
            <div id="container">
                <Navbar />

                <div className="contact">
                    <div className="contact-container">
                        <div className="contact-wrapper">
                            <div className="contact-content">
                                <div className="contact-left-content">
                                    <div className="contact-left-content-title">
                                        Let's Chat!
                                    </div>
                                    <div className="contact-left-content-sub-title">
                                        <div className="contact-left-content-sub-title-upper-line">
                                            We'd like to hear
                                        </div>
                                        <div className="contact-left-content-sub-title-lower-line">
                                            Your Opinion.
                                        </div>
                                    </div>
                                    <div className="contact-left-content-desc">
                                        Let's make the balanced environment
                                    </div>
                                    <div className="contact-left-content-mail-box">
                                        <div className="contact-left-content-mail">
                                            <div className="contact-left-content-mail-left">
                                                <i class="fa-regular fa-at fa-3x"></i>
                                            </div>
                                            <div className="contact-left-content-mail-right">
                                                <div className="contact-left-content-mail-desc">
                                                    Mail me at
                                                </div>
                                                <div className="contact-left-content-mail-email">
                                                    doforyou@doforyou.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-right-content">
                                    <div className="contact-right-content-title">
                                        Send us a message
                                    </div>
                                    <div className="contact-right-content-form">
                                        <form>
                                            <div className="contact-right-content-sub-title">
                                                Your information
                                            </div>
                                            <div className="contact-name-combine">
                                                <div className="contact-name-combine-left">
                                                    <div className="contact-input-field">
                                                        <div className="contact-input-label">
                                                            First Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="contact-name-combine-right">
                                                    <div className="contact-input-field">
                                                        <div className="contact-input-label">
                                                            Last Name
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact-input-field">
                                                <div className="contact-input-label">
                                                    Email
                                                </div>
                                                <input
                                                    type="email"
                                                    placeholder="name@example.com"
                                                />
                                            </div>
                                            <div className="contact-input-field">
                                                <div className="contact-input-label">
                                                    Phone
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="123-456-7890"
                                                />
                                            </div>

                                            <div className="contact-right-content-sub-title">
                                                Message
                                            </div>

                                            <div className="contact-input-field">
                                                <div className="contact-input-label">
                                                    Subject
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                />
                                            </div>

                                            <div className="contact-input-field">
                                                <div className="contact-input-label">
                                                    Contents
                                                </div>
                                                <textarea
                                                    rows={5}
                                                    placeholder="Type your message here"
                                                />
                                            </div>

                                            <div className="contact-submit">
                                                <Button
                                                    buttonStyle="btn--secondary-dark"
                                                    buttonSize="btn--wide"
                                                    type="submit"
                                                >
                                                    SUBMIT
                                                </Button>
                                            </div>
                                        </form>
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

export default ContactUs;

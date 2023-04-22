import React, { useState } from "react";
import { Button } from "../../Button";
import Footer from "../../Footer";
import ModalCancel from "../../modals/ModalCancel";
import Navbar from "../../Navbar";
import "./TaskDetailAsCustomer.css";

function TaskDetailAsCustomer() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id="container">
                <Navbar />

                <div className="detail-as-customer">
                    <div className="detail-as-customer-container">
                        <div className="detail-as-customer-wrapper">
                            <div className="detail-as-customer-content">
                                <div className="detail-as-customer-content-main">
                                    <div className="detail-as-customer-title">
                                        Create a turnkey website
                                    </div>
                                    <div className="detail-as-customer-main-bottom">
                                        <div className="detail-as-customer-written-date">
                                            <div className="written">
                                                Written
                                            </div>
                                            <div className="written-date">
                                                Jan 1, 2023
                                            </div>
                                        </div>
                                        <div className="detail-as-customer-views">
                                            <div className="views-number">
                                                32
                                            </div>
                                            <div className="views">views</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-as-customer-content-body">
                                    <div className="detail-as-customer-content-body-address">
                                        <div className="detail-as-customer-content-body-key">
                                            Address
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            Can be done remotely
                                        </div>
                                    </div>
                                    <div className="detail-as-customer-content-body-start">
                                        <div className="detail-as-customer-content-body-key">
                                            Start date
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            Jan 4, 2023 12:00
                                        </div>
                                    </div>
                                    <div className="detail-as-customer-content-body-end">
                                        <div className="detail-as-customer-content-body-key">
                                            End date
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            Jan 10, 2023 23:59
                                        </div>
                                    </div>
                                    <hr className="detail-as-customer-horizontal-line" />
                                    <div className="detail-as-customer-content-body-budget">
                                        <div className="detail-as-customer-content-body-key">
                                            Budget
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            $ 225.00
                                        </div>
                                    </div>
                                    <div className="detail-as-customer-content-body-payment">
                                        <div className="detail-as-customer-content-body-key">
                                            How to pay
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            by Bank e-transfer
                                        </div>
                                    </div>
                                    <hr className="detail-as-customer-horizontal-line" />
                                    <div className="detail-as-customer-content-body-desc">
                                        <div className="detail-as-customer-content-body-key">
                                            Details
                                        </div>
                                        <div className="detail-as-customer-content-body-value">
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt.
                                        </div>
                                    </div>
                                    <div className="detail-as-customer-btns">
                                        <div className="detail-as-customer-edit-btn">
                                            <Button
                                                buttonStyle="btn--secondary-dark"
                                                buttonSize="btn--wide-bold"
                                                buttonRadius="btn--half-rounded"
                                                type="submit"
                                            >
                                                EDIT
                                            </Button>
                                        </div>
                                        <div className="detail-as-customer-cancel-btn">
                                            <Button
                                                buttonStyle="btn--cancel"
                                                buttonSize="btn--wide-bold"
                                                buttonRadius="btn--half-rounded"
                                                onClick={() => setShow(true)}
                                            >
                                                CANCEL
                                            </Button>
                                        </div>
                                        <ModalCancel
                                            onClose={() => setShow(false)}
                                            show={show}
                                        />
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

export default TaskDetailAsCustomer;

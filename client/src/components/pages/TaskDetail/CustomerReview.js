import { useState } from "react";

import { Button } from "../../Button";
import ModalReviewCustomer from "../../modals/ModalReviewCustomer";

function CustomerReview(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                buttonStyle="btn--primary-yellow"
                buttonSize="btn--large-bold"
                buttonRadius="btn--half-rounded"
                type="submit"
                onClick={() => setShow(true)}
            >
                WRITE REVIEW FOR CUSTOMER
            </Button>

            <ModalReviewCustomer
                onClose={() => setShow(false)}
                show={show}
                taskId={props.taskId}
                task={props.task}
            />
        </>
    );
}

export default CustomerReview;

import { useState } from "react";

import { Button } from "../../Button";
import ModalCancel from "../../modals/ModalCancel";

function UploadedCustomerButton(props) {
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
                CANCEL
            </Button>

            <ModalCancel onClose={() => setShow(false)} show={show} taskId={props.taskId} />
        </>
    );
}

export default UploadedCustomerButton;

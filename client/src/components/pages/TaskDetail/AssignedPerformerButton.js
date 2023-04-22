import { useState } from "react";

import { Button } from "../../Button";
import ModalComplete from "../../modals/ModalComplete";

function AssignedPerformerButton(props) {
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
                COMPLETED
            </Button>

            <ModalComplete onClose={() => setShow(false)} show={show} taskId={props.taskId} />
        </>
    );
}

export default AssignedPerformerButton;

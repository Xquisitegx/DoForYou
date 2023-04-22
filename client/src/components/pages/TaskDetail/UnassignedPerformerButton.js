import { useState } from "react";

import { Button } from "../../Button";
import ModalInterest from "../../modals/ModalInterest";

function UnassignedPerformerButton(props) {
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
                I'M INTERESTED
            </Button>

            <ModalInterest
                onClose={() => setShow(false)}
                show={show}
                performerId={props.performerId}
                customerId={props.customerId}
                taskId={props.taskId}
            />
        </>
    )
}

export default UnassignedPerformerButton;
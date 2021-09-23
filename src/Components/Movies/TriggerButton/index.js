import React from 'react';
import '../style.css';

const Trigger = ({ buttonRef, showModal }) => {

    return (
        <button
            className="btnEditt"
            ref={buttonRef}
            onClick={showModal}
        >
        Edit
        </button>
    );
};
export default Trigger;

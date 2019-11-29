import React from 'react';

const ResetButton = (props) => (
    <div className="reset">
        <button className="reset-btn" onClick={props.clicked}>Reset</button>
    </div>
);

export default ResetButton;
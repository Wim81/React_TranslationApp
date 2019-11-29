import React from 'react';

const LanguageSwitch = (props) => (
        <div className="language-switch-wrapper">
            <button className="language-switch" onClick={props.clicked}>
                <i className="fas fa-exchange-alt"></i>
            </button>
        </div>
)

export default LanguageSwitch;
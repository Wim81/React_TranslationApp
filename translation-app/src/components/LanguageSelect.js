import React from 'react';

const LanguageSelect = (props) => (
    <select className={props.classes} value={props.value} onChange={props.changed}>
        {props.children}
    </select>
);

export default LanguageSelect;
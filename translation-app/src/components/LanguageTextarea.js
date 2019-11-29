import React from 'react';

const LanguageTextarea = (props) => (
    <textarea className={props.classes} onChange={props.changed} value={props.value} disabled={props.disabled}/>
);

export default LanguageTextarea;
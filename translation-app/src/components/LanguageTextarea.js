import React from 'react';
import styled from 'styled-components';

const StyledLanguageTextarea = styled.textarea`
    min-height: 100px;
    padding: 0.5rem;
    border: 1px solid #ffb008;
    background-color: transparent;
    color: #ffb008;
    
    &:first-of-type {
        border-bottom: none;
    }
`;

const LanguageTextarea = (props) => (
    <StyledLanguageTextarea className={props.classes} onChange={props.changed} value={props.value} disabled={props.disabled}/>
);

export default LanguageTextarea;
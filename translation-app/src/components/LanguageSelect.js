import React from 'react';
import styled from 'styled-components';

const StyledLanguageSelect = styled.select`
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border: 1px solid #ffb008;
    background-color: #ffb008;
    color: #555555;
`;

const LanguageSelect = (props) => (
        <StyledLanguageSelect className={props.classes} value={props.value} onChange={props.changed}>
            {props.children}
        </StyledLanguageSelect>
);

export default LanguageSelect;
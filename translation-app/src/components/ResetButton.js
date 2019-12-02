import React from 'react';
import styled from 'styled-components';

const StyledResetButton = styled.button`
    width: 100%;
    padding: 0.75rem 1.5rem;
    color: #ffb008;
    background-color: #555555;
    border: 1px solid #ffb008;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  
    &:hover {
        color: #555555;
        background-color: #c1fd00;
        border: 1px solid #c1fd00;
    }
`;

const ResetButton = (props) => (
        <StyledResetButton onClick={props.clicked}>Reset</StyledResetButton>
);

export default ResetButton;
import React from 'react';
import styled from 'styled-components';

const StyledLanguageSwitchWrapper = styled.div`
    transform: rotate(90deg);
    text-align: center;
`;

const StyledLanguageSwitch = styled.button`
    background-color: transparent;
    color: #ffb008;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1.2rem;
    
    i {
        transition: all 0.3s ease-in-out;
    }
    
    &:hover i {
        color: #c1fd00;
    }
`;

const LanguageSwitch = (props) => (
        <StyledLanguageSwitchWrapper>
            <StyledLanguageSwitch onClick={props.clicked}>
                <i className="fas fa-exchange-alt"></i>
            </StyledLanguageSwitch>
        </StyledLanguageSwitchWrapper>
)

export default LanguageSwitch;
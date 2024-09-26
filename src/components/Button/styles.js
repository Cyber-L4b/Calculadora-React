import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 5px;
    cursor: pointer;

    &.number {
    background-color: #4F4F4F; 
    color: #FFFFFF; 
    }

    &.operation {
    background-color: #ff9500; 
    color: #fff; 
    }

    &:hover {
        opacity: 0.6;
    }
`
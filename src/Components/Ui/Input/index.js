import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    margin: 18px 0;
`;

const Label = styled.label`
    white-space: nowrap;
    margin: 0 10px 0 0;
    font-weight: 600;
    color: #aaa;
`;

const InputField = styled.input`
    width: -webkit-fill-available;
    margin: 12px 0 0 0;
    padding: 8px 10px;
    border-radius: 3px;
    height: 30px;
    border: 1px solid #aaa;
    :hover{
        border: 1px solid #133357;
    }
    :focus{
        outline: none;
        border: 1px solid #133357;
    }
    @media(max-width: 600px){
        height: 20px;
    }
`;

export const Input = ({label, value, method, maxLength, placeholder, onChange, required}) => (
    <InputContainer>
        {label && <Label>{label}{required && <span style={{color: 'red', marginLeft: '2px'}}>*</span>}</Label>}
        <InputField value={value} maxLength={maxLength} type={method} placeholder={(placeholder && placeholder.length > 0) ? placeholder : `Enter the ${label}`} onChange={onChange} required={required} />
    </InputContainer>
);
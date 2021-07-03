import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    margin: 18px 0;
`;

const Label = styled.label`
    white-space: nowrap;
    margin: 0 10px 0 0;
    font-weight: 400;
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
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    [type=number] {
        -moz-appearance: textfield;
    }
    :focus{
        outline: none;
        border: 1px solid #133357;
    }
    @media(max-width: 600px){
        height: 20px;
    }
`;

export const Input = ({status, label, value, method, maxLength, placeholder, onChange, required}) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return(
        <InputContainer>
            {label && <Label>{label}{required && <span style={{color: '#9b2226', marginLeft: '2px'}}>*</span>}</Label>}
            <InputField value={value} maxLength={maxLength} type={method} placeholder={(placeholder && placeholder.length > 0) ? placeholder : `Enter the ${label}`} onChange={onChange} required={required} />
            {(status === false) && ((value === '') ? <p style={{color: '#9b2226', fontSize: 14, margin: '4px 0 0 0'}}>{label} is required</p>
                : ((method === 'number') ? ((value.length === maxLength) ? '' : <p style={{color: '#9b2226', fontSize: 14, margin: '4px 0 0 0'}}>Invalid {label}</p>)
                : ((method === 'email') ? (emailRegex.test(value) ? '' : <p style={{color: '#9b2226', fontSize: 14, margin: '4px 0 0 0'}}>Invalid {label}</p>) : '')
            ))}
        </InputContainer>
    );
};
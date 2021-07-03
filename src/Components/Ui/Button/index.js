import styled from "styled-components";

export const Button = styled.button`
    width: 160px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    font-weight: 500;
    background: linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(212, 64%, 21%, 1) 100%);
    :hover{
        opacity: 0.98;
    }
    @media(max-width: 600px){
        width: 140px;
        font-weight: 500;
        font-size: 16px;
    }
`;
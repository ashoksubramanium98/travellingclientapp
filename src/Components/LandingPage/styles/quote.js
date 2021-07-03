import styled from "styled-components";

export const QuoteOuterContainer = styled.div`
    margin: 40px auto;
`;

export const QuoteInnerContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    @media(max-width: 1200px){
        width: 50%;
    }
    @media(max-width: 600px){
        width: 80%;
    }
`;

export const QuoteTitle = styled.h2`
    font-size: 34px;
    color: #133357;
    text-align: center;
    margin-top: 0;
    @media(max-width: 600px){
        font-size: 20px;
    }
    @media(max-width: 333px){
        font-size: 18px;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
    color: #666;
    padding: 10px;
    background: #caffbf;
    border-radius: 3px;
    font-weight: 500;
`;
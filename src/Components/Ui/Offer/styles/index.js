import styled from "styled-components";

export const OfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(212, 64%, 21%, 1) 100%);
    @media(max-width: 600px){
        padding: 10px 0;
    }
`;

export const OfferText = styled.p`
    color: #fff;
    font-weight: 400;
    font-size: 17px;
    margin-top: 20px;
    @media(max-width: 600px){
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        width: 90%;
    }
`;

export const OfferTime = styled.p`
    font-weight: 500;
    margin-top: 8px;
    font-size: 17px;
    margin-bottom: 16px;
    color: #fff;
    @media(max-width: 600px){
        font-size: 12px;
        margin-bottom: 12px;
    }
`;
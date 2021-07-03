import styled from "styled-components";

export const HeaderOuter = styled.div`
    width: 100%;
    background: #fff;
`;

export const HeaderInner = styled.div`
    width: 80%;
    margin: 0 auto;
    @media(max-width: 1200px){
        width: 96%;
    }
`;

export const HeaderNavOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    @media(max-width: 600px){
        justify-content: center;
    }
`;

export const NavOption = styled.h4`
    font-weight: 400;
    margin-right: 50px;
    font-size: 18px;
    :last-child{
        margin-right: 0;
    }
    @media(max-width: 600px){
        margin-right: 20px;
        font-size: 16px;
    }
    @media(max-width: 360px){
        font-size: 14px;
    }
`;
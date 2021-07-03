import styled from "styled-components";

export const PromoContainer = styled.div`
    height: 600px;
    position: relative;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    @media (max-width: 1200px){
        height: 450px;
    }
    @media (max-width: 900px){
        height: 325px;
    }
    @media (max-width: 600px){
        height: 200px;
    }
`;

export const PromoTitle = styled.h2`
    color: #fff;
    position: absolute;
    bottom: 150px;
    left: 110px;
    font-size: 60px;
    letter-spacing: 4px;
    @media (max-width: 1200px){
        bottom: 100px;
        left: 50px;
    }
    @media (max-width: 800px){
        left: 50px;
        bottom: 80px;
        font-size: 30px;
    }
    @media (max-width: 600px){
        left: 20px;
        font-size: 18px;
        bottom: 75px;
        font-weight: 500;
        letter-spacing: 3px;
    }
`;

export const PromoDescription = styled.h2`
    color: #fff;
    position: absolute;
    bottom: 70px;
    left: 110px;
    font-size: 30px;
    letter-spacing: 2px;
    @media (max-width: 1200px){
        bottom: 45px;
        left: 50px;
    }
    @media (max-width: 800px){
        font-size: 20px;
        bottom: 30px;
        left: 50px;
    }
    @media (max-width: 600px){
        left: 20px;
        font-size: 14px;
        font-weight: 400;
        bottom: 35px;
        letter-spacing: 1px;
    }
`;
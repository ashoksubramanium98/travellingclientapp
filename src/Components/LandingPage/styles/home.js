import styled from "styled-components";

export const HomeOuterContainer = styled.div`
    width: 100%;
`;

export const HomeInnerContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    width: 80%;
    margin: 55px auto;
    @media(max-width: 1200px){
        width: 90%;
        grid-column-gap: 50px;
    }
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 600px){
        margin: 30px auto;
    }
`;

export const HomeImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeImg = styled.img`
    width: auto;
    height: 400px;
    @media(max-width: 600px){
        height: 300px;
    }
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 800px){
        margin-top: 40px;
        align-items: center;
    }
`;

export const HomeTitle = styled.h2`
    font-size: 50px;
    margin: 0;
    @media(max-width: 800px){
        text-align: center;
    }
    @media(max-width: 600px){
        font-size: 26px;
    }
`;

export const HomeDescription = styled.p`
    margin: 25px 0;
    font-size: 18px;
    font-weight: 400;
    word-spacing: 2px;
    line-height: 24px;
    @media(max-width: 800px){
        text-align: center;
    }
    @media(max-width: 600px){
        margin-bottom: 30px;
    }
`;
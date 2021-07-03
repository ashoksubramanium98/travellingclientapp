import styled from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

export const DestinationOuterContainer = styled.div`
    width: 100%;
    margin: 0 0 60px 0;
    @media(max-width: 600px){
        margin: 0 0 30px 0;
    }
`;

export const DestinationInnerContainer = styled.div`
    margin: 0 auto 0 10%;
    @media (max-width: 1200px){
        margin: 0 auto 0 5%;
    }
`;

export const DestinationTitle = styled.h4`
    margin: 0;
    color: #133357;
    font-size: 24px;
    padding: 0 0 20px 0;
    font-family: 'Roboto Slab', serif;
    @media(max-width: 600px){
        font-size: 18px;
    }
`;

export const DestinationDivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const DestinationDiv = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 25px 0 auto;
    :last-child{
        margin: 0 auto;
    }
    @media(max-width: 800px){
        width: 90%;
    }
`;

export const DestinationImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px 10px 10px 0px;
`;

export const DestinationCity = styled.p`
    font-weight: 400;
    color: #707070;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
`;
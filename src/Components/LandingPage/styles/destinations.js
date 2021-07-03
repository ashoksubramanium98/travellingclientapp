import styled from "styled-components";

export const DestinationOuterContainer = styled.div`
    width: 100%;
    margin: 0 0 60px 0;
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

`;
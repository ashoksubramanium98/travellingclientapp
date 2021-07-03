import styled from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

export const WeatherOuterContainer = styled.div`
    width: 100%;
    margin: 20px 0 60px 0;
    @media(max-width: 600px){
        margin: 20px 0 30px 0;
    }
`;

export const WeatherInnerContainer = styled.div` 
    width: 80%;
    margin: 0 auto;
    @media (max-width: 1200px){
        width: 90%;
    }
`;

export const WeatherTitle = styled.h4`
    background: #133357;
    color: #fff;
    margin: 0;
    font-size: 24px;
    padding: 20px 25px;
    font-weight: 500;
    @media(max-width: 600px){
        font-size: 18px;
        padding: 15px;
        text-align: center;
    }
`;

export const WeatherDivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px){
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

export const WeatherDiv = styled.div`
    width: 25%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: ${props => (props.index === 0) ? '#0D7E88' : ((props.index === 1) ? '#D09378' : ((props.index === 2) ? '#405B5D' : '#74A748'))};
    @media(max-width: 800px){
        width: 100%;
    }
`;

export const WeatherCity = styled.p`
    color: #fff;
    font-size: 24px;
    margin: 0 0 15px 0;
    font-weight: 400;
    @media(max-width: 800px){
        font-size: 18px;
    }
`;

export const WeatherIcon = styled.img`
    width: 50px;
    height: auto;
`;

export const WeatherCelsius = styled.p`
    color: #fff;
    font-size: 80px;
    margin: 15px 0 0 0;
    @media(max-width: 800px){
        font-size: 30px;
        margin: 15px 0;
    }
`;
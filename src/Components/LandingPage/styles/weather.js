import styled from "styled-components";

export const WeatherOuterContainer = styled.div`
    width: 100%;
    margin: 20px 0 60px 0;
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
`;

export const WeatherDivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px){
        display: grid;
        grid-template-columns: 50% 50%;
        overflow: hidden;
    }
`;

export const WeatherDiv = styled.div`
    width: 25%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background: ${props => (props.index === 0) ? '#0D7E88' : ((props.index === 1) ? '#D09378' : ((props.index === 2) ? '#405B5D' : '#74A748'))};
    @media(max-width: 800px){
        width: 90%;
    }
`;

export const WeatherCity = styled.p`
    color: #fff;
    font-size: 30px;
    margin: 0 0 15px 0;
    font-weight: 600;
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
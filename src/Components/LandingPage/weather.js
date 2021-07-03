import React, {useState, useEffect} from 'react';
import * as api from '../../Apis/landingPage';
import {WeatherOuterContainer, WeatherInnerContainer, WeatherTitle, WeatherDivContainer, WeatherDiv, WeatherCity, WeatherIcon, WeatherCelsius} from './styles/weather';

const Weather = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        api.getWeather().then(res => {
            if(res && res.result){
                setWeather(res.result);
            }
        })
    }, []);

    return(
        <WeatherOuterContainer>
            <WeatherInnerContainer>
                <WeatherTitle>THE WEATHER CHANNEL</WeatherTitle>
                <WeatherDivContainer>
                    {weather.map(({city, temp_Celsius}, index) => (
                        <WeatherDiv index={index}>
                            <WeatherCity>{city}</WeatherCity>
                            <WeatherIcon src={'/Assets/LandingPage/cloud.svg'} />
                            <WeatherCelsius>{temp_Celsius}<>&#176;</></WeatherCelsius>
                        </WeatherDiv>
                    ))}
                </WeatherDivContainer>
            </WeatherInnerContainer>
        </WeatherOuterContainer>
    );
};

export default Weather;
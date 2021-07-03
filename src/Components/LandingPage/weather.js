import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';
import * as api from '../../Apis/landingPage';
import {LoaderContainer, WeatherOuterContainer, WeatherInnerContainer, WeatherTitle, WeatherDivContainer, WeatherDiv, WeatherCity, WeatherIcon, WeatherCelsius} from './styles/weather';

const Weather = () => {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        setLoading(true);
        api.getWeather().then(res => {
            if(res && res.result){
                setLoading(false);
                setWeather(res.result);
            }
        })
    }, []);

    return(
        <WeatherOuterContainer>
            <WeatherInnerContainer>
                <WeatherTitle>THE WEATHER CHANNEL</WeatherTitle>
                {loading && <LoaderContainer><Loader type="ThreeDots" color="#133357" height={30} width={30} /></LoaderContainer>}
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
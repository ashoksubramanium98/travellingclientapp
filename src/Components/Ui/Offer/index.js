import React from 'react';
import Timer from "react-compound-timer";
import {OfferContainer, OfferText, OfferTime} from './styles';
import styled from 'styled-components';

const TimerOptionsDiv = styled.span`
    display: inline-block;
    margin: 0 2px;
    color: #fff;
    @media (max-width: 400px){
        margin: 0 2px;
    }
`;

export const OfferBar = () => {
    const STARTING_TODAY = 3, ENDING_TODAY = 7;
    let endDate = new Date(); endDate.setDate(STARTING_TODAY + ENDING_TODAY); endDate.setHours(23); endDate.setMinutes(59); endDate.setSeconds(59); endDate = Math.floor(endDate/1000);

    const CURRENT_DATE = Date.now();
    const offerDuration = (endDate*1000 - CURRENT_DATE);
    return(
        <OfferContainer>
            <OfferText>Book now to get exciting travel deals. Upto 40% off on credit card payments</OfferText>
            <OfferTime>Offers ends in 
                <Timer initialTime={offerDuration} direction="backward">
                    <TimerOptionsDiv>
                        <Timer.Days />d
                    </TimerOptionsDiv>
                    <TimerOptionsDiv>
                        <Timer.Hours />h
                    </TimerOptionsDiv>
                    <TimerOptionsDiv>
                        <Timer.Minutes />m
                    </TimerOptionsDiv>
                    <TimerOptionsDiv>
                        <Timer.Seconds />s
                    </TimerOptionsDiv>
                </Timer>
            </OfferTime>
        </OfferContainer>
    );
};
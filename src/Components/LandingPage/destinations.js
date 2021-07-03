import React, {useState, useEffect} from 'react';
import * as api from '../../Apis/landingPage';
import {DestinationOuterContainer, DestinationInnerContainer, DestinationTitle, DestinationDivContainer, DestinationDiv, DestinationCity, DestinationImg} from './styles/destinations';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        api.getDestinations().then(res => {
            if(res && res.result){
                setDestinations(res.result);
            }
        })
    }, []);

    return(
        <DestinationOuterContainer>
            <DestinationInnerContainer>
                <DestinationTitle>Featured Destinations</DestinationTitle>
                <DestinationDivContainer>
                    {destinations.map(({imageUrl, city}, index) => (
                        <DestinationDiv index={index}>
                            <DestinationImg src={imageUrl} />
                            <DestinationCity>{city}</DestinationCity>
                        </DestinationDiv>
                    ))}
                </DestinationDivContainer>
            </DestinationInnerContainer>
        </DestinationOuterContainer>
    );
};

export default Destinations;
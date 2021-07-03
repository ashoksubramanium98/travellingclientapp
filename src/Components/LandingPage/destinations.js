import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';
import * as api from '../../Apis/landingPage';
import {LoaderContainer, DestinationOuterContainer, DestinationInnerContainer, DestinationTitle, DestinationDivContainer, DestinationDiv, DestinationCity, DestinationImg} from './styles/destinations';

const Destinations = () => {
    const [loading, setLoading] = useState(false);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        setLoading(true);
        api.getDestinations().then(res => {
            if(res && res.result){
                setLoading(false);
                setDestinations(res.result);
            }
        })
    }, []);

    return(
        <DestinationOuterContainer>
            <DestinationInnerContainer>
                <DestinationTitle>Featured Destinations</DestinationTitle>
                {loading && <LoaderContainer><Loader type="ThreeDots" color="#133357" height={30} width={30} /></LoaderContainer>}
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
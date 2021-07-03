import React from 'react';
import {Button} from '../Ui/Button';
import {HomeOuterContainer, HomeInnerContainer, HomeImgContainer, HomeImg, HomeContent, HomeTitle, HomeDescription} from './styles/home';

const Home = () => (
    <HomeOuterContainer>
        <HomeInnerContainer>
            <HomeImgContainer>
                <HomeImg src={'/Assets/LandingPage/home.svg'} />
            </HomeImgContainer>
            <HomeContent>
                <HomeTitle>List is short<br /> and the world is wide!</HomeTitle>
                <HomeDescription>Stay at the comfort of your homes and book a trip to travel after the post pandemic era.</HomeDescription>
                <Button>PLAN A TRIP</Button>
            </HomeContent>
        </HomeInnerContainer>
    </HomeOuterContainer>
);

export default Home;
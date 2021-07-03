import React from 'react';
import {OfferBar} from '../Ui/Offer';
import Header from '../Ui/Header';
import Home from './home';
import Weather from './weather';
import Destinations from './destinations';
import Footer from '../Ui/Footer';

const LandingPage = () => (
    <div>
        <OfferBar />
        <Header />
        <Home />
        <Weather />
        <Destinations />
        <Footer />
    </div>
);

export default LandingPage;
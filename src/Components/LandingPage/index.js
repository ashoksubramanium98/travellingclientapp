import React from 'react';
import {Element} from 'react-scroll';
import {OfferBar} from '../Ui/Offer';
import Header from '../Ui/Header';
import Home from './home';
import Weather from './weather';
import Destinations from './destinations';
import Promo from './promo';
import Quote from './quote';
import Footer from '../Ui/Footer';

const LandingPage = () => (
    <div>
        <OfferBar />
        <Header />
        <Home />
        <Element name="weather" id="weather">
            <Weather />
        </Element>
        <Element name="destinations" id="destinations">
            <Destinations />
        </Element>
        <Promo />
        <Element name="getAQuote" id="getAQuote">
            <Quote />
        </Element>
        <Footer />
    </div>
);

export default LandingPage;
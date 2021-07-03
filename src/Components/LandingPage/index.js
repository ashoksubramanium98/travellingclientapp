import React from 'react';
import {OfferBar} from '../Ui/Offer';
import Header from '../Ui/Header';
import Home from './home';
import Footer from '../Ui/Footer';

const LandingPage = () => (
    <div>
        <OfferBar />
        <Header />
        <Home />
        <Footer />
    </div>
);

export default LandingPage;
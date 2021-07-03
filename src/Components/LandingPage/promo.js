import React from 'react';
import {PromoContainer, PromoTitle, PromoDescription} from './styles/promo';

const Promo = () => (
    <PromoContainer bgImg={'/Assets/LandingPage/plan.png'}>
        <PromoTitle>PLAN A TRIP</PromoTitle>
        <PromoDescription>Make your vacation the most <br /> memorable one</PromoDescription>
    </PromoContainer>
);

export default Promo;
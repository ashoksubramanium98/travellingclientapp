import React from 'react';
import {scroller} from 'react-scroll';
import {HeaderOuter, HeaderInner, HeaderNavOptions, NavOption} from './styles';

let navOptions = [
    {label: 'Weather', value: 'weather'},
    {label: 'Destinations', value: 'destinations'},
    {label: 'Get A Quote', value: 'getAQuote'}
];

const Header = () => {
    
    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: 0
        });
    }
    
    return(
        <HeaderOuter>
            <HeaderInner>
                <HeaderNavOptions>
                    {navOptions.map(({label, value}) => <NavOption key={value} onClick={() => scrollTo(value)}>{label.toUpperCase()}</NavOption>)}
                </HeaderNavOptions>
            </HeaderInner>
        </HeaderOuter>
    );
};

export default Header;
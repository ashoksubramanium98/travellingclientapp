import React from 'react';
import {HeaderOuter, HeaderInner, HeaderNavOptions, NavOption} from './styles';

let navOptions = [
    {label: 'Weather', value: 'weather'},
    {label: 'Destinations', value: 'destinations'},
    {label: 'Get A Quote', value: 'getAQuote'}
];

const Header = () => (
    <HeaderOuter>
        <HeaderInner>
            <HeaderNavOptions>
                {navOptions.map(({label, value}) => <NavOption key={value}>{label.toUpperCase()}</NavOption>)}
            </HeaderNavOptions>
        </HeaderInner>
    </HeaderOuter>
);

export default Header;
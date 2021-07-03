import React from 'react';
import {FooterOuterContainer, FooterInnerContainer, FooterDiv, FooterDivTitle, FooterOptionName} from './styles';

let footerOptions = [
    {
        title: "Tripzone",
        options: ["About", "Awards", "Contact Us", "Feedback"]
    },
    {
        title: "Main Offices",
        options: ["The United States", "India", "Brazil", "Canada"]
    },
    {
        title: "Sub Offices",
        options: ["Australia", "England", "France", "Germany"]
    }
];

const Footer = () => (
    <FooterOuterContainer>
        <FooterInnerContainer>
            {footerOptions.map(({title, options}) => (<FooterDiv key={title}>
                <FooterDivTitle>{title}</FooterDivTitle>
                {options.map(opt => <FooterOptionName key={opt}>{opt}</FooterOptionName>)}
            </FooterDiv>))}
            <FooterDiv>
                <FooterDivTitle>Disclaimer</FooterDivTitle>
                <FooterOptionName>This layout is created as a part of Sirius UI Recruitments.<br />All the above content has no direct relation with Sirius business.</FooterOptionName>
            </FooterDiv>
        </FooterInnerContainer>
    </FooterOuterContainer>
);

export default Footer;
import styled from "styled-components";

export const FooterOuterContainer = styled.div`
    width: 100%;
    background: linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(212, 64%, 21%, 1) 100%);
`;

export const FooterInnerContainer = styled.div`
    display: grid;
    grid-template-columns: 19% 20% 19% 42%;
    width: 80%;
    margin: 0 auto;
    padding: 40px 0;
    justify-content: space-between;
    @media(max-width: 1200px){
        width: 96%;
    }
    @media(max-width: 800px){
        grid-template-columns: 33% 33% 33%;
    }
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 800px){
        padding: 30px 20px;
    }
`;

export const FooterDivTitle = styled.h4`
    color: #fff;
    font-weight: 500;
    font-size: 22px;
    margin: 0 0 18px 0;
`;

export const FooterOptionName = styled.p`
    color: #fff;
    margin: 6px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    @media(min-width: 600px) and (max-width: 800px){
        font-weight: 300;
        :last-child{
           white-space: nowrap;
        }
    }
`;
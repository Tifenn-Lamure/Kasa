import styled from "styled-components";
import { Fragment } from "react";
import LogoKasaWhite from "../../assets/logo_kasa_white.png"

const FooterDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    height : 10rem;
    width: 100%;
    margin-top: auto;

    @media screen and (min-width: 1024px){
        justify-content: space-around;
        padding-top: 40px;
    }
`

const KasaWhiteLogo = styled.img`
    height: 2.5em;
`
const KasaRights = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: white;
    margin-top: 0.5rem;
    text-align: center;
    width: 30%;
    padding-inline: auto;

    @media screen and (min-width: 1024px){
        font-size: 24px;
    }
`

function Footer() {
    return(
        <Fragment>
            <FooterDisplay>
                <KasaWhiteLogo src={LogoKasaWhite} alt="logo de Kasa"/>
                <KasaRights>© 2020 Kasa. All rights reserved</KasaRights>
            </FooterDisplay>
        </Fragment>
    )
}

export default Footer;
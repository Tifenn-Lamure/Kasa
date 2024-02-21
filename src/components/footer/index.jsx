import styled from "styled-components";
import { Fragment } from "react";
import LogoKasaWhite from "../../assets/logo_kasa_white.png"

const FooterDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: black;
    height : 15rem;
    width: 100%;
    padding-top: 15px;
`

const KasaWhiteLogo = styled.img`
    height: 3em;
`
const KasaRights = styled.div`
    font-weight: 400;
    font-size: 24px;
    color: white;
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
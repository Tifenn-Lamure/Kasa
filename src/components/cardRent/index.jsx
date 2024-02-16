import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Fragment } from "react";

const CardAppartment = styled.div`
    width: 100%;
    aspect-ratio: 1;
    margin: auto;
    border-radius: 15px;
    position: relative;
`

const Cardtitle = styled.div`
    position: absolute;
    font-weight: 700;
    font-size: 16px;
    color: white;
    bottom: 0;
    padding: 0 20px 40px 20px;
`
const CardGradient = styled.div`
    position: absolute;
    bottom: 4px;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%);
`

const BGPic = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`

function CardRent({rentName, rentPic}) {
    return(
        <CardAppartment>
            <CardGradient></CardGradient>
            <Cardtitle>{rentName}</Cardtitle>
            <BGPic src={rentPic} alt="photos des appartements"></BGPic>
        </CardAppartment>
    )
}

export default CardRent;
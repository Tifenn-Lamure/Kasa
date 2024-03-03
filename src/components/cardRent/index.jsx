import styled from "styled-components";

const CardAppartment = styled.div`
    width: 100%;
    aspect-ratio: 3/2;
    margin: auto;
    border-radius: 15px;
    position: relative;

    @media screen and (min-width: 480px){
        aspect-ratio: 1;
    }
`

const CardTitle = styled.div`
    position: absolute;
    font-weight: 700;
    font-size: 16px;
    color: white;
    bottom: 30px;
    left: 20px;
    right: 20px;
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
            <CardTitle>{rentName}</CardTitle>
            <BGPic src={rentPic} alt="photos des appartements"></BGPic>
        </CardAppartment>
    )
}

export default CardRent;
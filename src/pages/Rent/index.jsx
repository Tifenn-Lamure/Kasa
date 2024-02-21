import styled from "styled-components";
import { Fragment } from "react";
import { useParams } from "react-router";
import Slideshow from "../../components/Slideshow";

import logements from "../../data/logements";
import colors from "../../utils/styles/colors";

const RentTitle = styled.div`
    color: ${colors.pink};
    font-weight: 300;
    font-size: 30px;
`

function Rent() {

    const params = useParams();
    const rentId = params.id;
    const foundLogement = logements.find(lgt => lgt.id === rentId)
    console.log('foundLogement', foundLogement)

    return(
        <Fragment>
            <Slideshow pictures={foundLogement.pictures} />
            <RentTitle>{foundLogement.title}</RentTitle>
        </Fragment>
    )
}

export default Rent;
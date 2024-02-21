import styled from "styled-components";
import { Fragment } from "react";
import { useParams } from "react-router";
import Slideshow from "../../components/Slideshow";
import NotFound404 from '../../pages/NotFound404'
// import { Navigate } from "react-router-dom";


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

    if(foundLogement) {
        return(
            <Fragment>
                <Slideshow pictures={foundLogement.pictures} />
                <RentTitle>{foundLogement.title}</RentTitle>
            </Fragment>
        )
    }else{
        return(
            <NotFound404/>
            // <Navigate to="/error404" replace={true} />
        )
    }
    
}

export default Rent;
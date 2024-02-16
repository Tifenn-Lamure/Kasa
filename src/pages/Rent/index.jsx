import styled from "styled-components";
import { Fragment } from "react";
import { useParams } from "react-router";

import logements from "../../data/logements";

function Rent() {

    const params = useParams();
    const rentId = params.id;
    const foundLogement = logements.find(lgt => lgt.id === rentId)
    console.log('foundLogement', foundLogement)

    return(
        <Fragment>
            <div>{foundLogement.title}</div>
            {/* <rentTitle rentTitle={logement.title}></rentTitle> */}
        </Fragment>
    )
}

export default Rent;
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import BannerImage from "../../components/BannerImage";
import CardRent from "../../components/CardRent";

import logements from "../../data/logements";
import Source1 from "../../assets/source_1.png";

const GreyBG = styled.div`
    background-color: ${colors.lightGrey};
    margin-top: 50px;
    padding: 50px;
    border-radius: 25px;
`

const Grid = styled.div`
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    border-radius: 25px;
` 

function Home() {
    return(
        <Fragment>
            <BannerImage
                bannerUrl={Source1}
                bannerText="Chez vous, partout et ailleurs"
                bannerOpacity="0.5"
            />
            <GreyBG>
                <Grid>
                    {logements.map((logement) => (
                        <Link key={logement.id} to={`/rent/${logement.id}`}>
                            <CardRent
                                key={logement.id}
                                rentName={logement.title}
                                rentPic={logement.cover}
                            >
                            </CardRent>
                        </Link>
                    ))}
                </Grid>
            </GreyBG>
        </Fragment>
    )
}

export default Home;
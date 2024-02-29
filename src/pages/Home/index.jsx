import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import BannerImage from "../../components/BannerImage";
import CardRent from "../../components/CardRent";

import logements from "../../data/logements";
import Source1 from "../../assets/source_1.png";

const GreyBG = styled.div`
    margin: 30px 0;
    border-radius: 25px;

    @media screen and (min-width: 1024px){
        gap: 30px;
        padding: 30px;
        background-color: ${colors.lightGrey};
    }
    @media screen and (min-width: 1440px){
        gap: 50px;
        padding: 50px;
        margin: 50px 0;
        background-color: ${colors.lightGrey};
    }
`

const Grid = styled.div`
    justify-items: center;
    align-items: center;
    display: flex;
    gap: 30px;
    flex-direction: column;    
    border-radius: 25px;

    @media screen and (min-width: 640px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    @media screen and (min-width: 1440px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
    }
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
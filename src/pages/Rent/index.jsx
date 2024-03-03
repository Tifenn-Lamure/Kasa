import styled from "styled-components";
import { Fragment } from "react";
import { useParams } from "react-router";
import Slideshow from "../../components/Slideshow";
import { Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logements from "../../data/logements";
import colors from "../../utils/styles/colors";

const RentInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 1024px){
        flex-direction: row;
        margin-top: 30px;
    }
`

const RentTitle = styled.div`
    margin-top: 0;
    color: ${colors.pink};
    font-weight: 500;
    font-size: 24px;

    @media screen and (min-width: 480px){
        margin-top: 0.8rem;
        font-size: 36px;
    }
`

const RentLocation = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;

    @media screen and (min-width: 480px){
        font-size: 18px;
    }
`

const RentTags = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.8rem 0;

    @media screen and (min-width: 480px){
        margin-top: 1.5rem;
    }
`

const RentTag = styled.div`
    background-color: ${colors.pink};
    min-width: 6rem;
    color: white;
    font-weight: 600;
    padding: 0.3rem 0.15rem;
    text-align: center;
    border-radius: 6px;
    font-size: 10px;
    width: fit-content;

    @media screen and (min-width: 480px){
        min-width: 9rem;
        font-size: 14px;
        padding: 0.3rem 0.15rem;
    }
`

const RentProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    @media screen and (min-width: 360px){
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: 1024px){
        flex-direction: column;
        justify-content: start;
    }
`

const RentOwner = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media screen and (min-width: 480px){
        justify-content: end;
    }
`

const RentOwnerPicture = styled.img`
    height: 2.5em;
    width: 2.5em;
    border-radius: 9999px;
    background: url("${({pictureUrl}) => pictureUrl}");
    object-fit: cover;

    @media screen and (min-width: 360px){
        height: 3.5em;
        width: 3.5em;
    }
    @media screen and (min-width: 480px){
        height: 5em;
        width: 5em;
    }
`

const RentOwnerName = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.pink};
    font-size: 14px;
    font-weight: 500;
    text-align: right;

    @media screen and (min-width: 480px){
        font-size: 18px;
    }
`

const RentRating = styled.div`
    display: flex;
    gap: 0.4rem;
    margin-top: 1rem;

    @media screen and (min-width: 480px){
        gap: 0.8rem;
    }
`

const IconStar = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${({isPink}) => isPink ? `${colors.pink}` : `${colors.lightGrey}`};

    @media screen and (min-width: 480px){
        font-size: 24px;
    }
`

const RentCollapses= styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    gap: 1.5em;

    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5em;
    }
`

function Rent() {

    const params = useParams();
    const rentId = params.id;
    const foundLogement = logements.find(lgt => lgt.id === rentId)

    if(foundLogement) {
        return(
            <Fragment>
                <Slideshow pictures={foundLogement.pictures} />
                <RentInfo>
                    <div>
                        <RentTitle>{foundLogement.title}</RentTitle>
                        <RentLocation>{foundLogement.location}</RentLocation>
                        <RentTags>
                            {foundLogement.tags.map((tag, index) => (
                                <RentTag key={index}>{tag}</RentTag>
                            ))}
                        </RentTags>
                    </div>
                    <RentProfile>
                        <RentOwner>
                            <RentOwnerName>
                                <div>{foundLogement.host.name.split(' ')[0]}</div>
                                <div>{foundLogement.host.name.split(' ')[1]}</div>
                            </RentOwnerName>
                            <RentOwnerPicture src={foundLogement.host.picture}></RentOwnerPicture>
                        </RentOwner>

                        <RentRating>
                            {Array.from({length: 5}, (_, index) => (
                                <IconStar isPink={index < foundLogement.rating} key={index} icon={faStar}/>
                            ))}                        
                        </RentRating>
                    </RentProfile>
                </RentInfo>
                <RentCollapses>
                    <Collapse
                        collapseTitle="Description"
                        collapseText={foundLogement.description}
                    ></Collapse>
                    <Collapse
                        collapseTitle="Équipements"
                        collapseText={foundLogement.equipments}
                    ></Collapse>
                </RentCollapses>
            </Fragment>
        )
    }else{
        return(
            <Navigate to="/error404" replace={true} />
        )
    }
    
}

export default Rent;
import styled from "styled-components";
import { Fragment, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const DisplayPictures = styled.div`
    position: relative;
    display: flex;
`

const SlideImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    user-select: none;
`

const IconChevronLeft = styled(FontAwesomeIcon)`
    color: white;
    font-size: 5em;
    transform: rotate(270deg);
    position: absolute;
    left:0;
    bottom: 45%;
    transform-origin: center;
    cursor: pointer;
    user-select: none;
`
const IconChevronRight = styled(FontAwesomeIcon)`
    color: white;
    font-size: 5em;
    transform: rotate(90deg);
    position: absolute;
    right:0;
    bottom: 45%;
    transform-origin: center;
    cursor: pointer;
    user-select: none;
`

const CurrentSlide = styled.div`
    position: absolute;
    color: white;
    left: 50%;
    bottom: 5%;
    user-select: none;
`

function Slideshow({pictures}) {
    const [currentIndex, changeIndex] = useState(0);

    return(
        <DisplayPictures>
            <SlideImage src={pictures[currentIndex]} alt="" />
            {pictures.length > 1 && 
            <Fragment>
                <IconChevronLeft icon={faChevronUp} onClick={() => changeIndex(currentIndex > 0 ? currentIndex - 1 : pictures.length - 1)}/>
                <IconChevronRight icon={faChevronUp} onClick={() => changeIndex(currentIndex < pictures.length - 1 ? currentIndex + 1 : 0)}/>
            </Fragment>}
            <CurrentSlide>{currentIndex + 1}/{pictures.length}</CurrentSlide>
        </DisplayPictures>
    )
}

export default Slideshow;
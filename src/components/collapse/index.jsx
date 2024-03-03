import styled from "styled-components";
import { useState } from "react";
import colors from "../../utils/styles/colors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapseParent = styled.div`
    overflow: hidden;
`

const CollapseHead = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.pink};
    padding: 0.8rem;
    border-radius: 7px;
`

const Title = styled.div`
    color: white;
    font-weight: 700;
    font-size: 18px;

    @media screen and (min-width: 480px){
        font-size: 24px;
    }
`

const CollapseBody = styled.div`
    position: relative;
    max-height: ${({isCollapseActive}) => isCollapseActive ? '100%' : '0'};
    transform: ${({isCollapseActive}) => isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
    z-index: -1;
    transition: all 0.5s;
    background-color: ${colors.lightGrey};
    border-radius: 0 0 7px 7px;
    > *{
        padding: 1rem;
        max-height: ${({isCollapseActive}) => isCollapseActive ? '100%' : '0'};
        transform: ${({isCollapseActive}) => isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
        transition: all 0.5s;
        overflow: hidden;
    }
`

const IconChevron = styled(FontAwesomeIcon)`
    color: white;
    transform: ${({isCollapseActive}) => isCollapseActive ? 'rotate(-180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
`

const ListFormat = styled.ul`
    list-style: none;
    margin: 0;
`

function Collapse({collapseTitle, collapseText}) {

    const [isCollapseActive, updateCollapseActive] = useState(false);

    return(
        <CollapseParent>
            <CollapseHead onClick={() => updateCollapseActive(!isCollapseActive)}>
                <Title>{collapseTitle}</Title>
                <IconChevron icon={faChevronUp} size="2xl" isCollapseActive={isCollapseActive}/>
            </CollapseHead>
            <CollapseBody isCollapseActive={isCollapseActive}>
                {(typeof collapseText === 'string') && <div>{collapseText}</div>}
                {(typeof collapseText === 'object') &&
                    <ListFormat>
                        {collapseText.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ListFormat>
                }               
            </CollapseBody>
        </CollapseParent>
    )
}

export default Collapse;
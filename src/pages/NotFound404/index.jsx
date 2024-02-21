import styled from "styled-components";
import colors from "../../utils/styles/colors";
import { Link } from "react-router-dom"

const PageDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    margin: 0px 0 70px 0;
`
const E404 = styled.div`
    color: ${colors.pink};
    font-weight: 700;
    font-size: 200px;
`

const ErrorText = styled.div`
    color: ${colors.pink};
    font-weight: 500;
    font-size: 25px;
`

const HomePageLink = styled(Link)`
color: black;
font-weight: 600;
font-size: 13px;
`

function NotFound404() {
    return(
        <PageDisplay>
            <E404>404</E404>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <HomePageLink to="/">Retourner sur la page d'accueil</HomePageLink>
        </PageDisplay>
    )
}

export default NotFound404;
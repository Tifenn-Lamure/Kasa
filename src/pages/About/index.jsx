import styled from "styled-components";

import BannerImage from "../../components/BannerImage";
import Collapse from "../../components/Collapse";

import Source2 from "../../assets/source_2.png";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px 0;

    @media screen and (min-width: 480px){
        margin: 30px 80px;
    }
`

function About() {

    const aboutInfos = [
        {
            "id": 1,
            "title": "Flexibilité",
            "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "id": 2,
            "title": "Respect",
            "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": 3,
            "title": "Service",
            "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": 4,
            "title": "Solidarité",
            "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]

    return(
        <div>
            <BannerImage
                bannerUrl={Source2}
                bannerOpacity="0.7"
            />
            <Layout>
                {aboutInfos.map((info) => (
                    <Collapse
                        key={info.id}
                        collapseTitle={info.title}
                        collapseText={info.text}
                    ></Collapse>
                ))}
            </Layout>
        </div>
    )
}

export default About;
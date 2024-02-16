import { Fragment } from "react";
import styled from "styled-components";

import Source1 from "../../assets/source_1.png";

const Banner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BannerImg = styled.img`
    height: 220px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    filter: brightness(50%);
    box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.38);
`

const Title = styled.div` 
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    text-shadow: 0px 0px 3px black;
`

function BannerImage() {
  return (
    <Banner>
      <BannerImg src={Source1} alt="" />
      <Title>Chez vous, partout et ailleurs</Title>
    </Banner>
  );
}

export default BannerImage;

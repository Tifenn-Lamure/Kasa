import styled from "styled-components";

const Banner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BannerImg = styled.img`
    height: 120px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.38);
    filter: brightness(${({bannerOpacity}) => bannerOpacity});

    @media screen and (min-width: 480px){
      height: 220px;
    }
`

const Title = styled.div` 
    position: absolute;
    color: white;
    font-weight: 700;
    text-shadow: 0px 0px 3px black;
    font-size: 24px;
    text-align: left;
    padding: 1.5rem;

    @media screen and (min-width: 480px){
      font-size: 32px;
    }

    @media screen and (min-width: 1024px){
      font-size: 48px;
      text-align: center;
    }
`

function BannerImage({bannerUrl, bannerText, bannerOpacity}) {

  return (
    <Banner>
      <BannerImg src={bannerUrl} alt="" bannerOpacity={bannerOpacity} />
      <Title>{bannerText}</Title>
    </Banner>
  );
}

export default BannerImage;

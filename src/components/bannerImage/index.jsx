import styled from "styled-components";


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
    box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.38);
    filter: brightness(${({bannerOpacity}) => bannerOpacity});
`

const Title = styled.div` 
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    text-shadow: 0px 0px 3px black;
`

function BannerImage({bannerUrl, bannerText, bannerOpacity}) {

  console.log(bannerOpacity)

  return (
    <Banner>
      <BannerImg src={bannerUrl} alt="" bannerOpacity={bannerOpacity} />
      <Title>{bannerText}</Title>
    </Banner>
  );
}

export default BannerImage;

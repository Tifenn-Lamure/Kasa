import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoKasa from "../../assets/logo_kasa.png";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  gap: 1rem;
`

const Img = styled.img`
  height: 30px;

  @media screen and (min-width: 480px){
    height: 40px;
  }
  @media screen and (min-width: 1024px){
    height: 65px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: space-between;
  gap: 1rem;

  @media screen and (min-width: 1024px){
    gap: 3rem;
  }
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;

  @media screen and (min-width: 480px){
    font-size: 16px;
  }
  @media screen and (min-width: 1024px){
    font-size: 26px;
    text-transform: capitalize;
  }
  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderDiv>
      <Img src={LogoKasa} alt="Logo de Kasa" />
      <Nav>
        <LinkNav to="/" className="pageLink">Accueil</LinkNav>
        <LinkNav to="/about" className="pageLink">A Propos</LinkNav>
      </Nav>
    </HeaderDiv>
  );
}

export default Header;

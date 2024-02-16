import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoKasa from "../../assets/logo_kasa.png";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
`

const Img = styled.img`
  height: 65px;
`

const Nav = styled.nav`
  display: flex;
  align-items: space-between;
  gap: 3rem;
`

const LinkNav = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 26px;
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

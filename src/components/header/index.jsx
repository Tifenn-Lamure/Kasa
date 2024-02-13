import "./header.scss";
import { Link } from "react-router-dom";

import LogoKasa from "../../assets/logo_kasa.png";

function Header() {
  return (
    <header>
      <img src={LogoKasa} alt="Logo de Kasa" />
      <nav>
        <Link to="/" className="pageLink">Accueil</Link>
        <Link to="/about" className="pageLink">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;

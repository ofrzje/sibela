import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="navbar-brand">
          <img src={logo} alt="logo" width="85" height="85" />
          <h2>SIBELA</h2>
        </div>
      </section>
      <section id="navbar">
        <nav>
          <Link to="/">Beranda</Link>
          <Link to="/donasi">Donasi</Link>
          <Link to="/tentang">Tentang Kami</Link>
        </nav>
      </section>
    </div>
  )
}

export default Header;

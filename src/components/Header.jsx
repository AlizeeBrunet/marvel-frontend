import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo Marvel" className="logo" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/characters" className="nav-link">
              Personnages
            </Link>
          </li>
          <li>
            <Link to="/comics" className="nav-link">
              Comics
            </Link>
          </li>
          <li>
            <Link to="/favoris" className="nav-link">
              Favoris
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

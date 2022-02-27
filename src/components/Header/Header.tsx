import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="header-container-top">
        <nav className="header-top">
          <h1 className="header-heading">
            <Link className="menu-link" to="/">
              DEMO Streaming
            </Link>
          </h1>
          <div className={`header-menu ${isMenuOpen && "menuOpen"}`}>
            <div className="menu">
              <Link className="menu-link" to="/series">
                Series
              </Link>
              <Link className="menu-link" to="/movies">
                Movies
              </Link>
            </div>
            <div className="login">
              <Link to="/" className="header-btn-login">
                Log in
              </Link>
              <Link to="/" className="header-btn-trial">
                Start your free trial
              </Link>
            </div>
          </div>
          <button
            className={`hamburger-icon ${isMenuOpen && "hamburgerOpen"}`}
            onClick={handleMenu}
          >
            <div className="hamburger-icon-line line1"></div>
            <div className="hamburger-icon-line line2"></div>
            <div className="hamburger-icon-line line3"></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container-top">
        <nav className="header-top">
          <h1 className="header-heading">
            <Link className="menu-link" to="/">
              DEMO Streaming
            </Link>
          </h1>
          <div className="menu">
            <Link className="menu-link" to="/series">
              Series
            </Link>
            <Link className="menu-link" to="/movies">
              Movies
            </Link>
          </div>
          <div className="login">
            <button className="header-btn-login">Log in</button>
            <button className="header-btn-trial">Start your free trial</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

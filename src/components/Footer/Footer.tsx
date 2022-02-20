import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/termsAndCondition">Terms of conditions</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <Link to="/collection">Collection Statement</Link>
          <Link to="/help">Help</Link>
          <Link to="/account">Manage Account</Link>
        </nav>
        <p className="copyRight">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className="socialLinks">
          <div className="socialMedia">
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook"></img>
            </a>
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="socialDownload">
            <a href="https://www.apple.com/app-store/">
              <img src={appStore} alt="instagram" />
            </a>
            <a href="https://play.google.com/store">
              <img src={playStore} alt="instagram" />
            </a>
            <a href="https://www.microsoft.com/en-us/store/apps">
              <img src={windowsStore} alt="windowsStore" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

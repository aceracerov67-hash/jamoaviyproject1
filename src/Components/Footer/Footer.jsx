import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__brand">
            <h2 className="footer__logo">LOGO</h2>
            <p className="footer__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="footer__copy-at">@Lorem</span>
          </div>

          <div className="footer__links">
            <h3>About us</h3>
            <ul>
              <li><a href="#">Zeux</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h3>Contact us</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className="footer__phone">+908 89097 890</p>
          </div>

          <div className="footer__social">
            <div className="social__icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer__bottom">
        <hr />
        <p>Copyright ® 2022 prodesignar All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
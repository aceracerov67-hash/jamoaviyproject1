import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobil menyuni ochish/yopish funksiyasi
  const toggleMenu = () => setIsOpen(!isOpen);

  // Linklar ro'yxati (App.jsx dagi pathlar bilan mos bo'lishi kerak)
  const navItems = ["Home", "About", "Portfolio", "News"];

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__flex">
            
            {/* Logo */}
            <Link to="/" className="logo__box">
              <h1 className="logo__img">LOGO</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav__desktop">
              <ul className="nav__links">
                {navItems.map((item) => (
                  <li key={item} className="nav__item">
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().trim()}`}
                      className="link__text"
                    >
                      {item}
                    </Link>
                    <span className="underline__effect"></span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="btn__clone">Contact us</button>
              </Link>
            </nav>

            {/* Hamburger Menu Button */}
            <button
              className="mobile__toggle"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <div className={`bar ${isOpen ? "active-1" : ""}`}></div>
              <div className={`bar ${isOpen ? "hide" : ""}`}></div>
              <div className={`bar ${isOpen ? "active-2" : ""}`}></div>
            </button>

            {/* Mobile Overlay Menu */}
            <div className={`mobile__overlay ${isOpen ? "show" : ""}`}>
              <ul className="mobile__list">
                {navItems.map((item) => (
                  <li key={item} onClick={() => setIsOpen(false)}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().trim()}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="btn__clone-mobile">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
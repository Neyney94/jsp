import React from 'react';
import './Header.css';


const Header: React.FC = () => (
  <header className="header">
    <div className="header__menu">
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className="header__logo">
      <img src="/logo-ulm.png" alt="ULM Records Logo" height={40} />
      <span className="header__brand">ULM <span className="header__brand--thin">RECORDS</span></span>
    </div>
  </header>
);

export default Header;

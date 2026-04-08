import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__copyright">
      © 2026 ULM Records. Tous droits réservés.
    </div>
    <div className="footer__links">
      <a href="#" className="footer__link">Politique de confidentialité</a>
      <span> | </span>
      <a href="#" className="footer__link">Mentions légales</a>
    </div>
  </footer>
);

export default Footer;

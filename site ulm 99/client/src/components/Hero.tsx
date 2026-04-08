import React, { useState } from 'react';
import './Hero.css';
import ModalRdv from './ModalRdv';

const Hero: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="hero public-view show" id="publicHomeView">
        <div className="hero-glow"></div>
        <div className="hero-chainback" aria-hidden="true"></div>
        <div className="hero-content">
          <h1 className="hero-title">ULM</h1>
          <p className="hero-records">Records</p>
          <div className="hero-divider">
            <div className="hero-divider-line"></div>
            <div className="hero-divider-dot"></div>
            <div className="hero-divider-line"></div>
          </div>
          <p className="hero-sub">Nous façonnons les artistes de demain et portons leur son aux quatre coins du monde.</p>
          <div className="hero-btns">
            <a href="#" className="btn btn-chrome">Découvrir nos artistes</a>
            <button className="btn btn-solid" onClick={() => setOpenModal(true)}>Prendre rendez-vous</button>
            <a href="https://discord.gg/QaNNaNPtfm" className="btn btn-discord" target="_blank" rel="noreferrer">Nous rejoindre</a>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-footer-copy">© 2026 ULM Records. Tous droits réservés.</div>
          <div className="hero-footer-links">
            <a href="#">Politique de confidentialité</a>
            <span className="hero-footer-separator">|</span>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </section>
      <ModalRdv open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Hero;

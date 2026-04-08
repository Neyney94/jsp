import React from 'react';

const Galerie: React.FC = () => (
  <section className="page page--galerie">
    <h2 className="page__subtitle">ULM RECORDS</h2>
    <h1 className="page__title">GALERIE / PORTFOLIO</h1>
    <p className="page__desc">Découvrez nos projets musicaux, clips, albums et singles produits par ULM Records.</p>
    <div className="galerie__filters">
      <button className="galerie__filter galerie__filter--active">Tous</button>
      <button className="galerie__filter">Albums</button>
      <button className="galerie__filter">Singles</button>
      <button className="galerie__filter">Clips</button>
      <button className="galerie__filter">Autre</button>
    </div>
    <div className="page__box">Aucun projet pour le moment.</div>
  </section>
);

export default Galerie;

import React from 'react';

const Evenements: React.FC = () => (
  <section className="page page--evenements">
    <h2 className="page__subtitle">ULM RECORDS</h2>
    <h1 className="page__title">ÉVÉNEMENTS</h1>
    <p className="page__desc">Découvrez les événements à venir organisés par ULM Records.</p>
    <div className="evenements__nav">
      <button className="evenements__btn">&#x25C0;</button>
      <button className="evenements__btn">&#x25B6;</button>
    </div>
    <div className="evenements__list">
      <div className="page__box">Aucun événement à venir pour le moment.</div>
    </div>
  </section>
);

export default Evenements;

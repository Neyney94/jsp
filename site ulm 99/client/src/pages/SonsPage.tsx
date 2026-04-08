import React from 'react';

const SonsPage: React.FC = () => {
  return (
    <section className="public-view" id="publicSonsSection">
      <div className="public-events-page">
        <div className="public-sons-header">
          <div className="public-sons-kicker">ULM Records</div>
          <h2 className="public-sons-title">Nos Sons</h2>
          <p className="public-sons-subtitle">Retrouvez toutes les sorties musicales de l'ULM Records. Sortie des sons : Mardi · Jeudi · Samedi</p>
        </div>
        <div className="public-sons-grid" id="publicSonsGrid"></div>
      </div>
    </section>
  );
};

export default SonsPage;

import React from 'react';

const EvenementsPage: React.FC = () => {
  return (
    <section className="public-view" id="publicEventsSection">
      <div className="public-events-page">
        <div className="public-events-header">
          <div className="public-events-kicker">ULM Records</div>
          <h2 className="public-events-title">Événements</h2>
          <p className="public-events-subtitle">Découvrez les événements à venir organisés par ULM Records.</p>
        </div>
        <div className="cal-nav" id="publicCalNav">
          <button className="cal-nav-btn" id="calPrev" type="button">◀</button>
          <span className="cal-nav-label" id="calLabel"></span>
          <button className="cal-nav-btn" id="calNext" type="button">▶</button>
        </div>
        <div className="cal-grid" id="publicCalGrid"></div>
        <h3 style={{fontFamily:'Barlow Condensed, sans-serif',fontSize:'1.1rem',fontWeight:700,color:'#e8e8e8',margin:'30px 0 14px'}}>Liste des événements</h3>
        <div className="public-events-grid" id="publicEventsGrid"></div>
      </div>
    </section>
  );
};

export default EvenementsPage;

import React from 'react';

const GaleriePage: React.FC = () => {
  return (
    <section className="public-view" id="gallerySection">
      <div className="public-events-page">
        <div className="gallery-header">
          <div className="gallery-kicker">ULM Records</div>
          <h2 className="gallery-title">Galerie / Portfolio</h2>
          <p className="gallery-subtitle">Découvrez nos projets musicaux, clips, albums et singles produits par ULM Records.</p>
        </div>
        <div className="gallery-filters" id="galleryFilters">
          <button className="gallery-filter-btn active" data-filter="all">Tous</button>
          <button className="gallery-filter-btn" data-filter="album">Albums</button>
          <button className="gallery-filter-btn" data-filter="single">Singles</button>
          <button className="gallery-filter-btn" data-filter="clip">Clips</button>
          <button className="gallery-filter-btn" data-filter="autre">Autre</button>
        </div>
        <div className="gallery-grid" id="galleryGrid"></div>
      </div>
    </section>
  );
};

export default GaleriePage;

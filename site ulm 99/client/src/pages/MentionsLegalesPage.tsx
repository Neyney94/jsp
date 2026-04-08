import React from 'react';

const MentionsLegalesPage: React.FC = () => {
  return (
    <section className="legal-page public-view" id="legalNoticesSection">
      <div className="legal-shell">
        <div className="legal-header">
          <div className="legal-kicker">ULM Records</div>
          <h2 className="legal-title">Mentions légales</h2>
          <p className="legal-subtitle">Informations légales concernant l'éditeur du site et la gestion des données fictives.</p>
        </div>
        <div className="legal-stack">
          <div className="legal-card emphasis">
            <div className="legal-card-title">Éditeur du site</div>
            <div className="legal-card-body">
              <strong>ULM Records</strong><br />
              Communauté GTA RP<br />
              Contact Discord : <span className="privacy-highlight">@2society</span> (ID : <span className="privacy-highlight">504587089921310720</span>)
            </div>
          </div>
          <div className="legal-card">
            <div className="legal-card-title">Hébergement</div>
            <div className="legal-card-body">
              Hébergement statique (GitHub Pages ou équivalent).<br />
              Aucune donnée réelle n'est stockée sur un serveur externe.
            </div>
          </div>
          <div className="legal-card">
            <div className="legal-card-title">Données personnelles</div>
            <div className="legal-card-body">
              Toutes les données saisies sont fictives et utilisées uniquement dans le cadre du jeu de rôle GTA RP.<br />
              Aucune exploitation commerciale ou revente.
            </div>
          </div>
          <div className="legal-card">
            <div className="legal-card-title">Contact</div>
            <div className="legal-card-body">
              Pour toute question, contactez-nous via Discord ou le formulaire de contact du site.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegalesPage;

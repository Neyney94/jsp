import React from 'react';

const ConfidentialitePage: React.FC = () => {
  return (
    <section className="legal-page public-view" id="privacySection">
      <div className="legal-shell">
        <div className="legal-header">
          <div className="legal-kicker">ULM Records</div>
          <h2 className="legal-title">Politique de confidentialité</h2>
          <p className="privacy-updated">Dernière mise à jour : 31/03/2026</p>
        </div>
        <div className="privacy-accordion">
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">I</span>
                <span className="privacy-summary-title">Introduction</span>
              </span>
            </button>
            <div className="privacy-body">
              <p>Bienvenue sur le site <span className="privacy-highlight">ULM Records</span>, dédié à la communauté GTA Roleplay (RP). Cette page explique comment nous traitons les informations saisies sur ce site, dans le respect de la confidentialité et dans le cadre strict du jeu de rôle.</p>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">D</span>
                <span className="privacy-summary-title">Données collectées</span>
              </span>
            </button>
            <div className="privacy-body">
              <ul className="privacy-list">
                <li>Toutes les informations demandées sur ce site sont <span className="privacy-highlight">fictives</span> et utilisées uniquement dans le cadre du jeu de rôle GTA RP.</li>
                <li>Aucune donnée personnelle réelle n'est requise, collectée ou exploitée à des fins commerciales ou personnelles.</li>
                <li>Les comptes, profils et informations saisis sont strictement liés à l'univers fictif du serveur RP.</li>
              </ul>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">U</span>
                <span className="privacy-summary-title">Utilisation des données</span>
              </span>
            </button>
            <div className="privacy-body">
              <ul className="privacy-list">
                <li>Les données saisies servent uniquement à enrichir l'expérience de jeu de rôle sur le serveur GTA RP.</li>
                <li>Aucune exploitation commerciale, marketing ou revente n'est effectuée.</li>
                <li>Les administrateurs s'engagent à ne jamais utiliser les informations à d'autres fins que le jeu de rôle.</li>
              </ul>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">S</span>
                <span className="privacy-summary-title">Conservation & Sécurité</span>
              </span>
            </button>
            <div className="privacy-body">
              <ul className="privacy-list">
                <li>Les données fictives enregistrées par ce site sont conservées localement dans le navigateur utilisé pour y accéder.</li>
                <li>Aucune transmission automatique vers un serveur externe n'est effectuée par ce site statique.</li>
                <li>Des mesures techniques sont mises en place dans l'interface pour limiter les accès non souhaités et permettre la suppression des données enregistrées.</li>
                <li>En cas de demande de suppression de compte, les données associées peuvent être retirées de l'interface d'administration ou du stockage local concerné.</li>
              </ul>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">V</span>
                <span className="privacy-summary-title">Vos droits</span>
              </span>
            </button>
            <div className="privacy-body">
              <ul className="privacy-list">
                <li>Vous pouvez à tout moment demander la suppression de votre compte RP et des données associées via le support du serveur ou le formulaire de contact.</li>
                <li>Vous pouvez demander à consulter, modifier ou corriger les informations de votre personnage RP.</li>
                <li>Si vous estimez que vos droits ne sont pas respectés, vous pouvez consulter la CNIL : <a className="legal-inline-link" href="https://www.cnil.fr/" target="_blank" rel="noreferrer">www.cnil.fr</a>.</li>
              </ul>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">C</span>
                <span className="privacy-summary-title">Contact</span>
              </span>
            </button>
            <div className="privacy-body">
              <p>Pour toute question concernant la confidentialité ou la gestion de vos données RP, contactez l'équipe via le support Discord du serveur ou le <a href="#" className="legal-inline-link" data-public-link="contact">formulaire de contact du site</a>.</p>
            </div>
          </article>
          <article className="privacy-item emphasis open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">!</span>
                <span className="privacy-summary-title">Avertissement</span>
              </span>
            </button>
            <div className="privacy-body">
              <p className="privacy-note strong">Toutes les informations collectées sur ce site sont strictement fictives et utilisées uniquement dans le cadre du jeu de rôle GTA RP. Aucune donnée réelle ne doit être saisie ni stockée à des fins personnelles ou commerciales.</p>
              <p className="privacy-note closing">Merci de votre confiance et bon jeu sur ULM Records.</p>
            </div>
          </article>
          <article className="privacy-item open">
            <button className="privacy-summary" type="button" aria-expanded="true">
              <span className="privacy-summary-main">
                <span className="privacy-summary-icon">R</span>
                <span className="privacy-summary-title">Responsable du site</span>
              </span>
            </button>
            <div className="privacy-body">
              <p>Le responsable du traitement des données fictives affichées et manipulées sur ce site est :<br /><span className="privacy-highlight">@2society</span> sur Discord (ID : <span className="privacy-highlight">504587089921310720</span>).<br />Pour toute question, vous pouvez nous contacter via le support Discord ou le formulaire de contact du site.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialitePage;

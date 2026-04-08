import React from 'react';

const RecrutementPage: React.FC = () => {
  return (
    <section className="contract-view public-view" id="recruitmentSection">
      <div className="contract-shell recruitment-shell">
        <div className="contract-card recruitment-card">
          <div className="recruitment-intro">
            <div className="recruitment-kicker">ULM Records</div>
            <h2 className="contract-title">Recrutement</h2>
            <p className="recruitment-subtitle">Envoyez votre candidature pour rejoindre l'équipe ULM. Les demandes arrivent directement dans l'administration.</p>
          </div>
          <form className="contract-form" id="recruitmentForm">
            <div className="recruitment-grid">
              <div className="contract-field full-width">
                <label htmlFor="recruitmentFullName">Nom & Prénom</label>
                <input className="contract-input" id="recruitmentFullName" type="text" />
              </div>
              <div className="contract-field">
                <label htmlFor="recruitmentBirth">Date de naissance</label>
                <input className="contract-input" id="recruitmentBirth" type="date" />
              </div>
              <div className="contract-field">
                <label htmlFor="recruitmentPhone">N° de téléphone</label>
                <input className="contract-input" id="recruitmentPhone" type="text" />
              </div>
              <div className="contract-field full-width">
                <label htmlFor="recruitmentAvailability">Vos disponibilités détaillées pour travailler</label>
                <textarea className="contract-input" id="recruitmentAvailability"></textarea>
              </div>
              <div className="contract-field full-width">
                <label htmlFor="recruitmentPresentation">Votre présentation</label>
                <textarea className="contract-input" id="recruitmentPresentation"></textarea>
              </div>
              <div className="contract-field full-width">
                <label htmlFor="recruitmentMotivation">Vos motivations</label>
                <textarea className="contract-input" id="recruitmentMotivation"></textarea>
              </div>
            </div>
            <button className="contract-submit" type="submit">Envoyer la candidature</button>
            <p className="contract-feedback" id="recruitmentFeedback">Candidature envoyée.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecrutementPage;

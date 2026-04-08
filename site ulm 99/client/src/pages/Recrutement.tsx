import React from 'react';

const Recrutement: React.FC = () => (
  <section className="page page--recrutement">
    <h2 className="page__subtitle">ULM RECORDS</h2>
    <h1 className="page__title">RECRUTEMENT</h1>
    <p className="page__desc">Envoyez votre candidature pour rejoindre l’équipe ULM. Les demandes arrivent directement dans l’administration.</p>
    <form className="recrutement__form">
      <div className="form__row">
        <input type="text" placeholder="Nom & Prénom" />
      </div>
      <div className="form__row form__row--split">
        <input type="text" placeholder="Date de naissance" />
        <input type="text" placeholder="N° de téléphone" />
      </div>
      <div className="form__row">
        <textarea placeholder="Vos disponibilités détaillées pour travailler" />
      </div>
      <div className="form__row">
        <textarea placeholder="Votre présentation" />
      </div>
      <div className="form__row">
        <textarea placeholder="Vos motivations" />
      </div>
      <div className="form__row">
        <button type="submit" className="form__btn">Envoyer la candidature</button>
      </div>
    </form>
  </section>
);

export default Recrutement;

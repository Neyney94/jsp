import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="contact-section public-view" id="contactSection">
      <div className="contact-shell">
        <div className="contact-header">
          <div className="contact-kicker">Direction ULM</div>
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">Nous sommes à votre écoute pour toute question.</p>
        </div>
        <div className="contact-grid" id="contactGrid"></div>
      </div>
    </section>
  );
};

export default ContactPage;

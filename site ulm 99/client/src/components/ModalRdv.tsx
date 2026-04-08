import React, { useState } from 'react';
import './ModalRdv.css';

const ModalRdv: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-bg open">
      <div className="modal">
        <div className="modal-header">
          <h2>Rendez vous</h2>
          <p>Envoyez une demande de rendez-vous à l'équipe ULM Records.</p>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row-2">
              <div className="field-group">
                <label className="field-label">Prénom</label>
                <input className="contract-input" placeholder="Ex: Jordan" />
              </div>
              <div className="field-group">
                <label className="field-label">Nom</label>
                <input className="contract-input" placeholder="Ex: Black" />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">Numéro de téléphone</label>
              <input className="contract-input" placeholder="Ex: 06 12 34 56 78" />
            </div>
            <div className="field-group">
              <label className="field-label">Raison du rendez-vous</label>
              <textarea className="contract-input" placeholder="Expliquez brièvement votre demande" />
            </div>
            <button className="contract-submit" type="submit">Envoyer la demande</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRdv;

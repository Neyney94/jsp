import React, { useState } from 'react';
import './ModalRegister.css';

const ModalRegister: React.FC<{ open: boolean; onClose: () => void, onBack: () => void }> = ({ open, onClose, onBack }) => {
  const [accepted, setAccepted] = useState(false);
  if (!open) return null;
  return (
    <div className="modal-bg open">
      <div className="modal">
        <div className="modal-header">
          <h2>Inscription</h2>
          <p>Créez votre accès ULM Records.</p>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="field-group">
                <label className="field-label">Prénom RP</label>
                <input className="contract-input" placeholder="Ex: Jordan" />
              </div>
              <div className="field-group">
                <label className="field-label">Nom RP</label>
                <input className="contract-input" placeholder="Ex: Black" />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label">Nom d'utilisateur</label>
              <input className="contract-input" placeholder="Ex: jordanblack" />
            </div>
            <div className="row">
              <div className="field-group">
                <label className="field-label">ID personnel</label>
                <input className="contract-input" placeholder="Ex: 48291" />
              </div>
              <div className="field-group">
                <label className="field-label">Mot de passe</label>
                <input className="contract-input" type="password" placeholder="********" />
              </div>
            </div>
            <div className="field-group checkbox-group">
              <input type="checkbox" id="confidentialite" checked={accepted} onChange={() => setAccepted(!accepted)} />
              <label htmlFor="confidentialite">J'accepte les clauses de confidentialité et le traitement des données.</label>
            </div>
            <button className="contract-submit" type="submit" disabled={!accepted}>S'inscrire</button>
          </form>
          <div style={{textAlign:'center',marginTop:10}}>
            Déjà un compte ? <a href="#" onClick={e => {e.preventDefault();onBack();}}>Se connecter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;

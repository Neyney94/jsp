import React from 'react';
import './ModalForgotPassword.css';

const ModalForgotPassword: React.FC<{ open: boolean; onClose: () => void, onBack: () => void }> = ({ open, onClose, onBack }) => {
  if (!open) return null;
  return (
    <div className="modal-bg open">
      <div className="modal">
        <div className="modal-header">
          <h2>Réinitialisation</h2>
          <p>Envoyez une demande pour réinitialiser le mot de passe d'un compte.</p>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="field-group">
              <label className="field-label">Nom d'utilisateur</label>
              <input className="contract-input" placeholder="Ex: artiste42" />
            </div>
            <div className="field-group">
              <label className="field-label">Précision</label>
              <input className="contract-input" placeholder="Ex: mot de passe oublié" />
            </div>
            <button className="contract-submit" type="submit">Envoyer la demande</button>
          </form>
          <div style={{textAlign:'center',marginTop:10}}>
            Retour à la <a href="#" onClick={e => {e.preventDefault();onBack();}}>connexion</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForgotPassword;

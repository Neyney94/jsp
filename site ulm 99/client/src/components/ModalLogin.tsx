import React, { useState } from 'react';
import './ModalLogin.css';
import ModalForgotPassword from './ModalForgotPassword';
import ModalRegister from './ModalRegister';

const ModalLogin: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (!open && !showForgot && !showRegister) return null;

  // Gestion navigation retour
  const handleBackToLogin = () => {
    setShowForgot(false);
    setShowRegister(false);
  };

  return (
    <>
      {/* Modal Connexion */}
      {open && !showForgot && !showRegister && (
        <div className="modal-bg open">
          <div className="modal">
            <div className="modal-header">
              <h2>Connexion</h2>
              <p>Accédez à votre espace ULM Records.</p>
              <button className="modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="field-group">
                  <label className="field-label">Nom d'utilisateur</label>
                  <input className="contract-input" placeholder="Ex: artiste42" />
                </div>
                <div className="field-group">
                  <label className="field-label">Mot de passe</label>
                  <div className="field-wrap">
                    <input className="contract-input" type={showPassword ? 'text' : 'password'} placeholder="********" />
                    <button type="button" className="toggle-pass" onClick={() => setShowPassword(v => !v)}>{showPassword ? 'Cacher' : 'Voir'}</button>
                  </div>
                </div>
                <div className="login-remember">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Se souvenir de moi</label>
                </div>
                <button className="contract-submit" type="submit">Se connecter</button>
                <div className="login-footer">
                  <a href="#" onClick={e => {e.preventDefault(); setShowForgot(true);}}>Mot de passe oublié ?</a>
                  <span>·</span>
                  <span>Pas encore de compte ?</span>
                  <a href="#" onClick={e => {e.preventDefault(); setShowRegister(true);}}>Créer un compte</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Modal Mot de passe oublié */}
      <ModalForgotPassword open={showForgot} onClose={onClose} onBack={handleBackToLogin} />
      {/* Modal Inscription */}
      <ModalRegister open={showRegister} onClose={onClose} onBack={handleBackToLogin} />
    </>
  );
};

export default ModalLogin;

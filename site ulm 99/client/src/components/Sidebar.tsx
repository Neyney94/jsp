

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ModalLogin from './ModalLogin';

const fakeUser = {
  isLoggedIn: false,
  avatar: '',
  prenom: 'Admin',
  nom: 'ULM',
  badges: ['Chief Executive Officer'],
};

const Sidebar: React.FC = () => {
  const [user, setUser] = useState(fakeUser);
  const [openLogin, setOpenLogin] = useState(false);
  // Accordéons STAFF ULM
  const [openContract, setOpenContract] = useState(false);
  const [openLicenciement, setOpenLicenciement] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Accueil</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/artiste" className={({isActive}) => isActive ? 'active' : ''}>Artiste</NavLink></li>
          <li><NavLink to="/sons" className={({isActive}) => isActive ? 'active' : ''}>Nos Sons</NavLink></li>
          <li><NavLink to="/recrutement" className={({isActive}) => isActive ? 'active' : ''}>Recrutement</NavLink></li>
          <li><NavLink to="/galerie" className={({isActive}) => isActive ? 'active' : ''}>Galerie</NavLink></li>
          <li><NavLink to="/evenements" className={({isActive}) => isActive ? 'active' : ''}>Événements</NavLink></li>
        </ul>

        {}
        <div style={{marginTop:32}}>
          <div className="sidebar-section">STAFF ULM</div>
          {}
          <button className={openContract ? 'sidebar-link active' : 'sidebar-link'} onClick={() => setOpenContract(v => !v)}>
            Demande de contrat {openContract ? '×' : '+'}
          </button>
          {openContract && (
            <SidebarHoverLink to="/demande-en-cours" label="Demande en cours" />
          )}
          {}
          <button className={openLicenciement ? 'sidebar-link active' : 'sidebar-link'} onClick={() => setOpenLicenciement(v => !v)}>
            Licenciement {openLicenciement ? '×' : '+'}
          </button>
          {openLicenciement && (
            <SidebarHoverLink to="/licenciement-en-cours" label="Demande en cours" />
          )}
          {}
          <button className={openAdmin ? 'sidebar-link active' : 'sidebar-link'} onClick={() => setOpenAdmin(v => !v)}>
            Admin {openAdmin ? '×' : '+'}
          </button>
          {openAdmin && (
            <div style={{marginLeft:8,display:'flex',flexDirection:'column',gap:4}}>
              <SidebarHoverLink to="/admin/mot-de-passe" label="Mot de passe" />
              <SidebarHoverLink to="/admin/rendez-vous" label="Rendez vous" />
              <SidebarHoverLink to="/admin/recrutement" label="Recrutement" />
              <SidebarHoverLink to="/admin/grade" label="Grade" />
              <SidebarHoverLink to="/admin/comptes" label="Comptes" />
              <SidebarHoverLink to="/admin/paies" label="Paies" />
              <SidebarHoverLink to="/admin/ventes" label="Ventes" />
              <SidebarHoverLink to="/admin/contrat" label="Contrat" />
              <SidebarHoverLink to="/admin/galerie" label="Galerie" />
              <SidebarHoverLink to="/admin/securite" label="Sécurité" />
            </div>
          )}
       
        const SidebarHoverLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
          const [hover, setHover] = useState(false);
          return (
            <div
              style={{marginLeft:8,marginBottom:2,display:'inline-block',cursor:'pointer'}}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <NavLink to={to} className={({isActive}) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{color: hover ? '#fff' : '#b6c6e3'}}>
                {hover ? label : <span>&laquo;{label}&raquo;</span>}
              </NavLink>
            </div>
          );
        };
        </div>

        <div className="sidebar-bottom" id="sidebarBottom">
          {!user.isLoggedIn ? (
            <div className="sidebar-logged-out">
              <div className="sidebar-bottom-label">Personnel</div>
              <div className="sidebar-login-name">Connexion</div>
              <button className="btn-login" onClick={() => setOpenLogin(true)}>Se connecter</button>
            </div>
          ) : (
            <div className="sidebar-logged-in">
              <div className="sidebar-profile-avatar">
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" />
                ) : (
                  <span className="sidebar-profile-avatar-fallback">
                    {user.prenom[0]}{user.nom[0]}
                  </span>
                )}
              </div>
              <div className="sidebar-profile-name">{user.prenom} {user.nom}</div>
              <div className="sidebar-profile-badges">
                {user.badges.map((badge, i) => (
                  <span className="sidebar-profile-badge" key={i}>{badge}</span>
                ))}
              </div>
              <div className="sidebar-profile-actions">
                <NavLink to="/espace" className={({isActive}) => isActive ? 'active btn-login' : 'btn-login'}>Mon espace</NavLink>
                <button className="sidebar-profile-logout" title="Déconnexion">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
              </div>
            </div>
          )}
          <div className="sidebar-logo">
            <img src="/logo-bg.png" alt="ULM Records" className="sidebar-logo-img" height={48} />
          </div>
        </div>
      </aside>
      <ModalLogin open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};

export default Sidebar;

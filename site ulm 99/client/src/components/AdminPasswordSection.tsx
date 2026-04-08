import React, { useState } from 'react';
import { users } from '../mock/users';
import { useCurrentUser } from '../hooks/useCurrentUser';


const mockRequests = [
  { id: 1, username: 'DayDay', message: 'jai oublie mon mdp', date: '31/03/2026 10:44:39', status: 'en attente' },
];

const AdminPasswordSection: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<any>(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const found = users.find(u => u.username.toLowerCase() === search.toLowerCase());
    setResult(found || null);
  }

  const canSeePassword = currentUser?.grade === 'admin';

  return (
    <div style={{padding:32}}>
      <h2>Administration - Mot de passe</h2>
      <div style={{background:'#23262b',padding:16,borderRadius:8,marginBottom:24}}>
        <b>Les mots de passe ne sont jamais affichés ici. Cette vue sert à suivre et traiter les demandes de réinitialisation en toute sécurité.</b>
      </div>
      <div style={{display:'flex',gap:32,alignItems:'flex-start'}}>
        {}
        <div style={{flex:1,background:'#181b20',padding:16,borderRadius:8}}>
          <h3>Demandes en attente</h3>
          {mockRequests.map(req => (
            <div key={req.id} style={{marginBottom:16,background:'#23262b',padding:12,borderRadius:6}}>
              <div><b>{req.username}</b></div>
              <div>Demande: {req.message}</div>
              <div>Créée le: {req.date}</div>
              <button style={{marginTop:8}}>Marquer comme traitée</button>
              <button style={{marginLeft:8}}>Supprimer</button>
            </div>
          ))}
        </div>
        {}
        <div style={{flex:1,background:'#181b20',padding:16,borderRadius:8}}>
          <h3>Recherche utilisateur</h3>
          <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Nom d'utilisateur..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: 8, borderRadius: 6 }}
            />
            <button type="submit" style={{ marginTop: 8, width: '100%' }}>Rechercher</button>
          </form>
          {result && (
            <div style={{ background: '#23262b', padding: 16, borderRadius: 8 }}>
              <div><b>Utilisateur :</b> {result.username}</div>
              <div><b>Grade :</b> {result.grade}</div>
              {canSeePassword ? (
                <div><b>Mot de passe :</b> {result.password}</div>
              ) : (
                <div style={{ color: '#888' }}>Mot de passe masqué</div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPasswordSection;

import React, { useState } from 'react';
import { users } from '../mock/users';
import { useCurrentUser } from '../hooks/useCurrentUser';

const AdminUserSearch: React.FC = () => {
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
    <div style={{ maxWidth: 400, margin: '2rem auto', background: '#181b20', padding: 24, borderRadius: 12 }}>
      <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
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
  );
};

export default AdminUserSearch;

import React, { useState } from 'react';

interface Vente {
  titre: string;
  artiste: string;
  nombre: number;
  date: string;
}

const jours = [
  { label: 'MAR', value: 'Mardi' },
  { label: 'JEU', value: 'Jeudi' },
  { label: 'SAM', value: 'Samedi' },
];

const AdminVentes: React.FC = () => {
  const [selectedJour, setSelectedJour] = useState('MAR');
  const [ventes, setVentes] = useState<Vente[]>([]);
  const [form, setForm] = useState({ titre: '', artiste: '', nombre: '', date: new Date().toISOString().slice(0, 10) });
  const [filtre, setFiltre] = useState('');

  // Stats
  const totalDisques = ventes.reduce((acc, v) => acc + v.nombre, 0);
  const sorties = ventes.length;
  const cetteSemaine = ventes.filter(v => {
    const now = new Date();
    const d = new Date(v.date);
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    return d >= weekStart;
  }).length;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titre || !form.artiste || !form.nombre || !form.date) return;
    setVentes([...ventes, { titre: form.titre, artiste: form.artiste, nombre: Number(form.nombre), date: form.date }]);
    setForm({ ...form, titre: '', artiste: '', nombre: '' });
  }

  function exportCSV() {
    const rows = [['Titre', 'Artiste', 'Nombre', 'Date'], ...ventes.map(v => [v.titre, v.artiste, v.nombre, v.date])];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ventes.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(ventes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ventes.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  const ventesFiltrees = ventes.filter(v =>
    v.titre.toLowerCase().includes(filtre.toLowerCase()) ||
    v.artiste.toLowerCase().includes(filtre.toLowerCase()) ||
    v.date.includes(filtre)
  );

  return (
    <div style={{ padding: 32, maxWidth: 900, margin: '0 auto' }}>
      <button onClick={() => window.history.back()} style={{ marginBottom: 24, border: 'none', background: 'none', color: '#b6c6e3', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>&lt; Retour</button>
      <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '.12em', marginBottom: 12 }}>VENTES DE DISQUES</h2>
      <div style={{ marginBottom: 18 }}>Enregistrez les ventes de disques de l’ULM. Jours de sortie : <b>Mardi</b> - <b>Jeudi</b> - <b>Samedi</b></div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {jours.map(j => (
          <button key={j.label} onClick={() => setSelectedJour(j.label)} style={{
            background: selectedJour === j.label ? '#6c5ce7' : 'transparent',
            color: selectedJour === j.label ? '#fff' : '#b6c6e3',
            border: '1px solid #23262b',
            borderRadius: 8,
            padding: '6px 18px',
            fontWeight: 700,
            fontFamily: 'Barlow Condensed',
            fontSize: 16,
            letterSpacing: '.12em',
            cursor: 'pointer',
          }}>{j.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ flex: 1, background: '#181b20', borderRadius: 12, padding: 18, textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>{totalDisques}</div>
          <div style={{ color: '#b6c6e3', fontWeight: 600 }}>Total disques</div>
        </div>
        <div style={{ flex: 1, background: '#181b20', borderRadius: 12, padding: 18, textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>{cetteSemaine}</div>
          <div style={{ color: '#b6c6e3', fontWeight: 600 }}>Cette semaine</div>
        </div>
        <div style={{ flex: 1, background: '#181b20', borderRadius: 12, padding: 18, textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>{sorties}</div>
          <div style={{ color: '#b6c6e3', fontWeight: 600 }}>Sorties</div>
        </div>
      </div>
      <div style={{ background: '#10131a', borderRadius: 12, padding: 24, marginBottom: 32, maxWidth: 700 }}>
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Enregistrer une vente</div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <input name="titre" value={form.titre} onChange={handleChange} placeholder="Titre du son" style={{ flex: 2, padding: 8, borderRadius: 6, border: '1px solid #23262b', background: '#23262b', color: '#fff' }} />
          <input name="artiste" value={form.artiste} onChange={handleChange} placeholder="Artiste" style={{ flex: 2, padding: 8, borderRadius: 6, border: '1px solid #23262b', background: '#23262b', color: '#fff' }} />
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre de disques" type="number" style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #23262b', background: '#23262b', color: '#fff' }} />
          <input name="date" value={form.date} onChange={handleChange} type="date" style={{ flex: 1.2, padding: 8, borderRadius: 6, border: '1px solid #23262b', background: '#23262b', color: '#fff' }} />
          <button type="submit" style={{ padding: '8px 18px', borderRadius: 8, background: '#6c5ce7', color: '#fff', fontWeight: 700, border: 'none', fontFamily: 'Barlow Condensed', fontSize: 16, letterSpacing: '.12em', cursor: 'pointer' }}>Enregistrer la vente</button>
        </form>
      </div>
      <div style={{ background: '#10131a', borderRadius: 12, padding: 24, maxWidth: 700 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontWeight: 700 }}>Historique des ventes</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={exportCSV} style={{ padding: '6px 14px', borderRadius: 8, background: '#23262b', color: '#b6c6e3', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Exporter CSV</button>
            <button onClick={exportJSON} style={{ padding: '6px 14px', borderRadius: 8, background: '#23262b', color: '#b6c6e3', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Exporter JSON</button>
          </div>
        </div>
        <input value={filtre} onChange={e => setFiltre(e.target.value)} placeholder="Filtrer par titre, artiste ou date..." style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 6, border: '1px solid #23262b', background: '#181b20', color: '#fff' }} />
        <div style={{ minHeight: 48, color: '#b6c6e3', fontStyle: 'italic', textAlign: 'center', border: '1px dashed #23262b', borderRadius: 8, padding: 12 }}>
          {ventesFiltrees.length === 0 ? 'Aucune vente enregistrée.' :
            <table style={{ width: '100%', color: '#fff', fontSize: 15 }}>
              <thead>
                <tr style={{ color: '#b6c6e3', fontWeight: 700 }}>
                  <th style={{ textAlign: 'left' }}>Titre</th>
                  <th style={{ textAlign: 'left' }}>Artiste</th>
                  <th style={{ textAlign: 'right' }}>Nombre</th>
                  <th style={{ textAlign: 'right' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {ventesFiltrees.map((v, i) => (
                  <tr key={i}>
                    <td>{v.titre}</td>
                    <td>{v.artiste}</td>
                    <td style={{ textAlign: 'right' }}>{v.nombre}</td>
                    <td style={{ textAlign: 'right' }}>{v.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  );
};

export default AdminVentes;

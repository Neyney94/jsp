import React, { useState } from 'react';
import AdminPasswordSection from '../components/AdminPasswordSection';
import AdminVentes from './AdminVentes';

const dashboardSections = [
  { key: 'accueil', label: 'Accueil' },
  { key: 'profil', label: 'Mon Profil' },
  { key: 'sons', label: 'Mes Sons' },
  { key: 'galerie', label: 'Galerie' },
  { key: 'evenements', label: 'Événements' },
  { key: 'staff', label: 'STAFF ULM', isSection: true },
  { key: 'contrat', label: 'Demande de contrat', parent: 'staff' },
  { key: 'licenciement', label: 'Licenciement', parent: 'staff' },
  { key: 'admin', label: 'Admin', parent: 'staff' },
  { key: 'motdepasse', label: 'Mot de passe', parent: 'admin' },
  { key: 'rendezvous', label: 'Rendez vous', parent: 'admin' },
  { key: 'recrutement', label: 'Recrutement', parent: 'admin' },
  { key: 'grade', label: 'Grade', parent: 'admin' },
  { key: 'comptes', label: 'Comptes', parent: 'admin' },
  { key: 'paies', label: 'Paies', parent: 'admin' },
  { key: 'ventes', label: 'Ventes', parent: 'admin' },
  { key: 'contratadmin', label: 'Contrat', parent: 'admin' },
  { key: 'galerieadmin', label: 'Galerie', parent: 'admin' },
  { key: 'securite', label: 'Sécurité', parent: 'admin' },
];

const DashboardLayout: React.FC = () => {
  const [active, setActive] = useState('accueil');
  const [openStaff, setOpenStaff] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);

  function renderContent() {
    switch (active) {
      case 'accueil':
        return <div style={{padding:32}}><h2>Bienvenue sur votre dashboard ULM Records !</h2><p>Gérez vos sons, artistes, événements et plus encore depuis cet espace premium.</p></div>;
      case 'motdepasse':
        return <AdminPasswordSection />;
      case 'ventes':
        return <AdminVentes />;
      // ...autres sous-parties à compléter
      default:
        return <div style={{padding:32}}>Section en cours de construction.</div>;
    }
  }

  return (
    <div className="dashboard-layout" style={{display:'flex',minHeight:'100vh'}}>
      <aside className="dash-sidebar" style={{width:220,background:'#10131a',padding:16}}>
        <div className="dash-brand" style={{marginBottom:16}}>
          <img src="/logo-bg.png" alt="ULM logo" style={{height:32,marginRight:8}} /> ULM
        </div>
        <div className="dash-user-name" style={{color:'#b6c6e3',marginBottom:16}}>Bienvenue, Admin</div>
        <ul className="dash-menu" style={{listStyle:'none',padding:0}}>
          {dashboardSections.map((s, i) => {
            if (s.isSection) return <div key={s.key} style={{margin:'18px 0 6px',color:'#6c768a',fontWeight:700}}>{s.label}</div>;
            if (s.parent === 'staff') {
              if (s.key === 'admin') {
                return <li key={s.key}><button className="sidebar-link" style={{width:'100%',textAlign:'left',background:'none',border:'none',color:'#b6c6e3',padding:'8px 0',fontWeight:active===s.key||openAdmin?'bold':'normal'}} onClick={()=>setOpenAdmin(v=>!v)}>{s.label} {openAdmin?'×':'+'}</button>
                  {openAdmin && (
                    <ul style={{marginLeft:12}}>
                      {dashboardSections.filter(x=>x.parent==='admin').map(x=>(
                        <li key={x.key}><button className="sidebar-link" style={{width:'100%',textAlign:'left',background:'none',border:'none',color:active===x.key?'#fff':'#b6c6e3',padding:'6px 0',fontWeight:active===x.key?'bold':'normal'}} onClick={()=>setActive(x.key)}>{x.label}</button></li>
                      ))}
                    </ul>
                  )}
                </li>;
              }
              return <li key={s.key}><button className="sidebar-link" style={{width:'100%',textAlign:'left',background:'none',border:'none',color:active===s.key?'#fff':'#b6c6e3',padding:'8px 0',fontWeight:active===s.key?'bold':'normal'}} onClick={()=>setActive(s.key)}>{s.label}</button></li>;
            }
            if (!s.parent) {
              return <li key={s.key}><button className="sidebar-link" style={{width:'100%',textAlign:'left',background:'none',border:'none',color:active===s.key?'#fff':'#b6c6e3',padding:'8px 0',fontWeight:active===s.key?'bold':'normal'}} onClick={()=>setActive(s.key)}>{s.label}</button></li>;
            }
            return null;
          })}
        </ul>
      </aside>
      <main className="dash-main" style={{flex:1,background:'#0a1120'}}>
        {renderContent()}
      </main>
    </div>
  );
};

export default DashboardLayout;

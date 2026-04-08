import React from 'react';
import AdminPasswordSection from '../components/AdminPasswordSection';
import { useCurrentUser } from '../hooks/useCurrentUser';

const DashboardPage: React.FC = () => {
  const { currentUser } = useCurrentUser();
  // Pour l’instant, on autorise l’accès si l’utilisateur a au moins un grade (à affiner plus tard)
  const canSeePasswordSection = currentUser && Array.isArray(currentUser.grades) && currentUser.grades.length > 0;

  return (
    <div className="dashboard-root">
      <h2>Dashboard</h2>
      {/* Section mot de passe visible uniquement pour les grades autorisés (à affiner selon la gestion des grades) */}
      {canSeePasswordSection && <AdminPasswordSection />}
    </div>
  );
};

export default DashboardPage;

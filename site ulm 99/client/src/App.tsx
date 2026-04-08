
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Artiste from './pages/Artiste';
import Sons from './pages/Sons';
import Recrutement from './pages/Recrutement';
import Galerie from './pages/Galerie';

import AdminVentes from './pages/AdminVentes';

function App() {
  return (
    <div className="app-bg">
      <Header />
      <Sidebar />
      <main style={{ marginLeft: 260, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artiste" element={<Artiste />} />
          <Route path="/sons" element={<Sons />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/admin/ventes" element={<AdminVentes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

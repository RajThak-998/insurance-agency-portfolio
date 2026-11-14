import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CoverageMap from './components/CoverageMap';
import Methodology from './components/Methodology';
import Leadership from './components/Leadership';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseTriageModal from './components/CaseTriageModal';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);

  const handleOpenTriage = () => {
    setIsTriageModalOpen(true);
  };

  const handleCloseTriage = () => {
    setIsTriageModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header onOpenTriageModal={handleOpenTriage} />
      
      <main className="flex-1">
        <Hero onOpenTriageModal={handleOpenTriage} />
        <About />
        <Services onOpenTriageModal={handleOpenTriage} />
        <CoverageMap onOpenTriageModal={handleOpenTriage} />
        <Methodology />
        <Leadership />
        <Partners />
        <Contact />
      </main>

      <Footer />

      <CaseTriageModal 
        isOpen={isTriageModalOpen} 
        onClose={handleCloseTriage} 
      />

      {/* Real-time Interactive Color Theme Explorer */}
      <ThemeSwitcher />
    </div>
  );
}

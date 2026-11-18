import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrackRecord from './components/TrackRecord';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseTriageModal from './components/CaseTriageModal';

export default function App() {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);

  const handleOpenTriage = () => {
    setIsTriageModalOpen(true);
  };

  const handleCloseTriage = () => {
    setIsTriageModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#090D16] text-[#0F172A] dark:text-[#F1F5F9] flex flex-col font-sans transition-colors duration-200 selection:bg-[#EA580C] selection:text-white">
        <Header onOpenTriageModal={handleOpenTriage} />
        
        <main className="flex-1">
          <Hero onOpenTriageModal={handleOpenTriage} />
          <Services onOpenTriageModal={handleOpenTriage} />
          <TrackRecord onOpenTriageModal={handleOpenTriage} />
          <Contact onOpenTriageModal={handleOpenTriage} />
        </main>

        <Footer onOpenTriageModal={handleOpenTriage} />

        <CaseTriageModal 
          isOpen={isTriageModalOpen} 
          onClose={handleCloseTriage} 
        />
      </div>
    </ThemeProvider>
  );
}

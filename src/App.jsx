import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#090D16] text-[#0F172A] dark:text-[#F1F5F9] flex flex-col font-sans transition-colors duration-150 selection:bg-amber-600 selection:text-white">
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
      </div>
    </ThemeProvider>
  );
}

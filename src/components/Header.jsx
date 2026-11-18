import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export default function Header({ onOpenTriageModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Track Record', href: '#track-record' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      <nav 
        className={`w-full bg-white dark:bg-[#0B1521] border-b border-slate-100 dark:border-slate-800 transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (Charterhouse Clean Aesthetic) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-[#0F3D30] text-white flex items-center justify-center font-mono font-bold text-sm tracking-wide shadow-sm group-hover:bg-[#144E3E] transition-colors shrink-0">
              AMS
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                AUTOCRATIC
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Management Services
              </span>
            </div>
          </a>

          {/* Simple Clean Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0F3D30] dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenTriageModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#EA580C] hover:bg-[#D97706] text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-sm active:scale-[0.99]"
            >
              <span>Assign Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-5 bg-white dark:bg-[#0B1521] border-t border-slate-100 dark:border-slate-800 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#EA580C]"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTriageModal();
              }}
              className="w-full mt-3 py-2.5 rounded-md bg-[#EA580C] text-white font-semibold text-xs uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <span>Assign Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

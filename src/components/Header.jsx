import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText,
  Sun,
  Moon
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export default function Header({ onOpenTriageModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Corporate Overview', href: '#about' },
    { label: 'Investigation Verticals', href: '#services' },
    { label: '75-District Reach', href: '#coverage' },
    { label: 'SOP Protocol', href: '#process' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact Aliganj HQ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. Slim, Subtle 32px Utility Micro-Bar (Cleanly collapses on scroll) */}
      <div 
        className={`w-full bg-slate-100 dark:bg-[#070B12] text-slate-600 dark:text-slate-400 text-[10px] sm:text-[11px] font-medium border-b border-slate-200 dark:border-slate-800/80 transition-all duration-200 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 border-transparent opacity-0' : 'max-h-16 sm:max-h-10 py-1 sm:py-1.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-0.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 font-mono font-semibold text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
              CIN: {COMPANY_INFO.cin}
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-700 dark:text-slate-300">{COMPANY_INFO.roc} Registered</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden md:inline text-slate-700 dark:text-slate-300">
              Incorporated Nov 15, 2018 ({COMPANY_INFO.yearsInOperation} Yrs Ops)
            </span>
            <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-700 dark:text-slate-300">
              15+ Yrs Group Heritage (ERE 2010)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
              <span>Aliganj, Lucknow HQ</span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
              <span className="font-mono text-[11px]">{COMPANY_INFO.contact.officialEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sleek 64px Frosted-Glass Primary Navigation Bar */}
      <nav className="w-full header-glass border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-none transition-colors duration-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Emblem & Identification */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded bg-[#0F2942] dark:bg-[#111827] border border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center transition-colors group-hover:border-amber-600">
              <span className="text-white dark:text-amber-400 font-mono font-bold text-xs tracking-wider">
                AMS
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-600 border border-white dark:border-[#111827]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                  AUTOCRATIC
                </span>
                <span className="px-1.5 py-0.2 rounded-sm text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-600/30">
                  PVT LTD
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-tight">
                Claims & Risk Intelligence • Lucknow HQ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Cluster: Theme Toggle + Assign Mandate CTA */}
          <div className="flex items-center gap-2.5">
            {/* Crisp Sun/Moon Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Single Primary CTA: Assign Mandate */}
            <button
              onClick={onOpenTriageModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.98] border border-amber-800 dark:border-amber-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Assign Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2">
            <div className="p-3 bg-slate-50 dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 mb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 font-mono">
                Aliganj Central Command Desk
              </span>
              <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                Lucknow Operational Headquarters
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                CIN: {COMPANY_INFO.cin} • 75 UP Districts
              </p>
            </div>

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTriageModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Assign Mandate / Case Audit</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

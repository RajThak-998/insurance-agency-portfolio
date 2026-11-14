import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Header({ onOpenTriageModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Institutional Credibility Strip */}
      <div className="bg-brand-950 text-slate-300 text-[11px] font-medium py-2 px-4 border-b border-white/[0.08] tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-accent-400 font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-400" />
              CIN: {COMPANY_INFO.cin}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200">ROC Kanpur Registered</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-200">Est. 2018 (7+ Yrs Operations)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent-400" />
              <span>Aliganj, Lucknow, UP</span>
            </div>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
              className="flex items-center gap-1.5 hover:text-white text-slate-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent-400" />
              <span className="font-mono text-[11px]">{COMPANY_INFO.contact.officialEmail}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Executive Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'executive-glass shadow-executive-dark py-3.5' 
            : 'bg-brand-900 border-b border-brand-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Emblem & Typography */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Custom Monogram Shield */}
            <div className="relative w-11 h-11 rounded-xl bg-brand-950 p-1 border border-brand-700/80 group-hover:border-accent-400 shadow-md flex items-center justify-center transition-all duration-300">
              <span className="text-white font-heading font-extrabold text-base tracking-wider group-hover:text-accent-400 transition-colors">
                AMS
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent-500 border-2 border-brand-950" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-heading font-bold text-base sm:text-lg tracking-tight group-hover:text-slate-100 transition-colors">
                  AUTOCRATIC
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-accent-500/20 text-accent-400 border border-accent-500/40">
                  PVT LTD
                </span>
              </div>
              <span className="text-slate-300 text-[11px] font-medium tracking-wide">
                Management Services • Claims & Risk Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-brand-800/60 rounded-lg transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTriageModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-accent-400/40"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Assign Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenTriageModal}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-accent-500 text-white font-bold text-xs"
            >
              Assign
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-brand-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-950 border-b border-brand-800 px-5 pt-4 pb-7 mt-3 space-y-2">
            <div className="p-3 bg-brand-900 rounded-xl mb-3 border border-brand-800">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-400">
                Pan-UP Corporate Dispatch Desk
              </span>
              <p className="text-xs font-semibold text-white mt-1">Aliganj, Lucknow Operational Center</p>
              <p className="text-[10px] text-slate-300 font-mono mt-0.5">CIN: {COMPANY_INFO.cin}</p>
            </div>

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-brand-800 rounded-lg"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-brand-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTriageModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Initiate Case Triage / Audit</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

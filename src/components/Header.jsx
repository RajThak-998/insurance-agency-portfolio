import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText,
  Building,
  CheckCircle2
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
    { label: 'SOP Methodology', href: '#process' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact Aliganj HQ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Institutional Credibility Strip */}
      <div className="bg-navy-950 text-slate-400 text-[11px] font-medium py-2 px-4 border-b border-white/[0.06] tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-bronze-400 font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
              CIN: {COMPANY_INFO.cin}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Registrar of Companies, Kanpur</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">Est. 2018 (7+ Yrs Operations)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-bronze-400" />
              <span>Aliganj, Lucknow, UP</span>
            </div>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
              className="flex items-center gap-1.5 hover:text-white text-slate-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-bronze-400" />
              <span className="font-mono text-[11px]">{COMPANY_INFO.contact.officialEmail}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Executive Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'executive-glass shadow-luxury-dark py-3.5' 
            : 'bg-navy-900/95 backdrop-blur-md border-b border-white/[0.06] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Emblem & Typography */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Custom Monogram Shield */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-b from-navy-800 to-navy-950 p-[1px] border border-white/10 group-hover:border-bronze-400/60 shadow-lg transition-all duration-300">
              <div className="w-full h-full rounded-[11px] bg-navy-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-radial from-bronze-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-heading font-extrabold text-base tracking-wider group-hover:text-bronze-400 transition-colors">
                  AMS
                </span>
                <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-bronze-400" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-heading font-bold text-base sm:text-lg tracking-tight group-hover:text-slate-100 transition-colors">
                  AUTOCRATIC
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-bronze-500/15 text-bronze-400 border border-bronze-500/30">
                  PVT LTD
                </span>
              </div>
              <span className="text-slate-400 text-[11px] font-medium tracking-wide">
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
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTriageModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-bronze-500 via-amber-500 to-bronze-600 hover:from-amber-400 hover:to-bronze-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-amber-300/40"
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
              className="sm:hidden px-3 py-1.5 rounded-lg bg-bronze-500 text-navy-950 font-bold text-xs"
            >
              Assign
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-white/10 px-5 pt-4 pb-7 mt-3 space-y-2">
            <div className="p-3 bg-navy-900 rounded-xl mb-3 border border-white/5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-bronze-400">
                Pan-UP Corporate Dispatch Desk
              </span>
              <p className="text-xs font-semibold text-white mt-1">Aliganj, Lucknow Operational Center</p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">CIN: {COMPANY_INFO.cin}</p>
            </div>

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTriageModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bronze-500 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md"
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

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  FileText, 
  Clock,
  ShieldAlert
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Header({ onOpenTriageModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Pan-UP Reach', href: '#coverage' },
    { label: 'Process', href: '#process' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Compliance & Corporate Details Bar */}
      <div className="bg-brand-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-accent-gold font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              CIN: {COMPANY_INFO.cin}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300">Regd. ROC Kanpur</span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-300">Est. Nov 15, 2018 (7+ Years Operational Excellence)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-accent-gold" />
              <span className="hidden sm:inline">{COMPANY_INFO.contact.officialEmail}</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-accent-gold" />
              <span>Aliganj, Lucknow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-elevated border-b border-slate-700/50 py-3' 
            : 'bg-brand-900 border-b border-brand-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Corporate Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-0.5 shadow-md flex items-center justify-center border border-blue-400/30 group-hover:border-accent-gold transition-colors">
              <div className="w-full h-full bg-brand-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-accent-gold/10 transition-colors" />
                <div className="relative flex items-center justify-center">
                  <span className="text-white font-heading font-extrabold text-base tracking-wider">AMS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-base sm:text-lg tracking-tight leading-tight group-hover:text-blue-200 transition-colors">
                AUTOCRATIC
              </span>
              <span className="text-slate-300 text-[10px] sm:text-xs font-medium tracking-wide uppercase">
                Management Services Pvt. Ltd.
              </span>
              <span className="text-accent-gold text-[9px] tracking-wider font-semibold uppercase">
                Claims & Risk Intelligence • UP
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-white hover:bg-brand-800/60 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTriageModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-gradient-to-r from-accent-gold to-amber-500 hover:from-amber-400 hover:to-accent-goldDark text-brand-950 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4" />
              <span>Assign Case / Audit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenTriageModal}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold rounded-md bg-accent-gold text-brand-950 font-medium"
            >
              Assign Case
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-950 border-b border-brand-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            <div className="p-3 bg-brand-900/80 rounded-lg mb-3 border border-brand-800">
              <p className="text-xs text-accent-gold font-medium">Pan-UP Claims Verification Hotline</p>
              <p className="text-sm font-bold text-white mt-0.5">Corporate Office: Aliganj, Lucknow</p>
              <p className="text-xs text-slate-400 mt-1">CIN: {COMPANY_INFO.cin}</p>
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
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-accent-gold text-brand-950 font-semibold text-sm shadow-md"
              >
                <FileText className="w-4 h-4" />
                Assign Case / Initiate Field Audit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

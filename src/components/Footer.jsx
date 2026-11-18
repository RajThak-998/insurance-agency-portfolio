import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  Lock, 
  ArrowUp, 
  Mail, 
  Clock, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenTriageModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#070D18] text-slate-600 dark:text-slate-400 border-t border-slate-200/90 dark:border-slate-800 text-xs transition-colors duration-200">
      
      {/* 1. Top Credentials & Compliance Strip */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 py-6 bg-white dark:bg-[#0A121E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">CIN Registered</div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{COMPANY_INFO.cin}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">ROC Registration</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">{COMPANY_INFO.roc}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">Field Scope</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">120+ Vetted Investigators</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">Evidence Standard</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Indian Evidence Act Adherence</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Multi-Column Corporate Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          
          {/* Column 1: Brand & Statutory Corporate Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0F3D30] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-sm">
                AMS
              </div>
              <div>
                <span className="block font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-snug">
                  AUTOCRATIC
                </span>
                <span className="block text-[10px] tracking-widest text-slate-500 dark:text-slate-400 font-semibold uppercase leading-none">
                  Management Services Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Independent corporate claims investigation and risk intelligence firm delivering court-defensible evidentiary dossiers for institutional life, health, motor, and commercial underwriters.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                Est. Nov 15, 2018
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                7+ Yrs Operations
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                ERE Group Heritage (2010)
              </span>
            </div>
          </div>

          {/* Column 2: Specialized Investigation Verticals (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white">
              Practice Verticals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Motor & Collision Forensics</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Healthcare & Mediclaim Scrutiny</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Commercial Asset & Arson Surveys</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Theft Forensics & Key Diagnostics</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>MACT Tribunal Evidentiary Defense</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Operating Protocols & Intelligence (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white">
              Operations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#track-record" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Proven Track Record</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Sub-24h Scene Response</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Forensic Corroboration</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Indian Evidence Act SOP</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-[#EA580C] dark:text-slate-400 dark:hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>Chain-of-Custody Dossiers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Mandate Allocation Desk & Direct Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-white">
              Operations Desk
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.officialEmail}`} className="font-mono text-slate-700 dark:text-slate-300 hover:text-[#EA580C] transition-colors truncate">
                  {COMPANY_INFO.contact.officialEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenTriageModal}
                className="w-full px-5 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Assign Mandate Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal Sub-Footer Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Autocratic Management Services Private Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px]">CIN: {COMPANY_INFO.cin}</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-mono text-[10px]">{COMPANY_INFO.roc}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-white hover:bg-slate-100 dark:bg-[#0E1726] dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}

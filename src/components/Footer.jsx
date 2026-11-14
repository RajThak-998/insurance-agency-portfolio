import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ArrowUp, 
  Building2, 
  FileCheck2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Upper Footer Corporate Verification Bar */}
      <div className="border-b border-slate-800/80 py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-accent-gold flex items-center justify-center shrink-0 border border-blue-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">CIN Registered Entity</div>
                <div className="text-[11px] text-slate-400 font-mono">{COMPANY_INFO.cin}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-accent-gold flex items-center justify-center shrink-0 border border-blue-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Registrar of Companies</div>
                <div className="text-[11px] text-slate-400">{COMPANY_INFO.roc} (Kanpur)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-accent-gold flex items-center justify-center shrink-0 border border-blue-500/20">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Statewide Field Scope</div>
                <div className="text-[11px] text-slate-400">All 75 Districts in UP</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-accent-gold flex items-center justify-center shrink-0 border border-blue-500/20">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Evidentiary Standard</div>
                <div className="text-[11px] text-slate-400">Strict Chain of Custody</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-800 p-0.5 shadow-md flex items-center justify-center border border-blue-400/30">
                <div className="w-full h-full bg-brand-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-accent-gold font-heading font-extrabold text-sm">AMS</span>
                </div>
              </div>
              <div>
                <span className="text-white font-heading font-bold text-base block leading-tight">
                  AUTOCRATIC
                </span>
                <span className="text-slate-400 text-[10px] tracking-wide uppercase">
                  Management Services Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Incorporated on November 15, 2018 in Lucknow, Uttar Pradesh. Delivering reliable, objective, and court-defensible insurance claim investigations and risk verification across all 75 districts of Uttar Pradesh.
            </p>

            <div className="p-3 bg-brand-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div><strong className="text-white">Authorized Capital:</strong> {COMPANY_INFO.authorizedCapital}</div>
              <div><strong className="text-white">Paid-up Capital:</strong> {COMPANY_INFO.paidUpCapital}</div>
              <div><strong className="text-white">Leadership Experience:</strong> 15+ Years (ERE Group since 2010)</div>
            </div>
          </div>

          {/* Column 2: Investigation Verticals */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase text-accent-gold">
              Investigation Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                    <ChevronRight className="w-3 h-3 text-accent-gold" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#coverage" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="w-3 h-3 text-accent-gold" />
                  <span>Pan-UP 75 Districts Network</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="w-3 h-3 text-accent-gold" />
                  <span>5-Stage SOP Methodology</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Operational Headquarters */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase text-accent-gold">
              Operational Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.operationalOffice.addressLine1},<br />
                  {COMPANY_INFO.contact.operationalOffice.addressLine2} – {COMPANY_INFO.contact.operationalOffice.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.officialEmail}`} className="hover:text-white text-slate-300">
                  {COMPANY_INFO.contact.officialEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 uppercase">
                Registered Office:
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {COMPANY_INFO.contact.registeredOffice.addressLine1}, {COMPANY_INFO.contact.registeredOffice.addressLine2} – {COMPANY_INFO.contact.registeredOffice.pincode}
              </p>
            </div>
          </div>

          {/* Column 4: Leadership & Directorship */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase text-accent-gold">
              Leadership
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {COMPANY_INFO.directors.map((d, i) => (
                <div key={i} className="pb-2 border-b border-slate-800 last:border-0">
                  <div className="text-white font-medium">{d.name}</div>
                  <div className="text-[11px] text-slate-400">{d.role}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-900 hover:bg-brand-800 text-slate-300 hover:text-white border border-slate-700 text-xs transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-accent-gold" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Autocratic Management Services Private Limited. All rights reserved. CIN: {COMPANY_INFO.cin}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-400">ROC Kanpur Registered</span>
            <span>•</span>
            <span className="text-slate-400">Strict Evidentiary Confidentiality</span>
            <span>•</span>
            <span className="text-slate-400">Aliganj, Lucknow, UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

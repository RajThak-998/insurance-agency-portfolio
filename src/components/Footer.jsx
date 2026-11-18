import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
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
    <footer className="bg-[#0F172A] dark:bg-[#060A10] text-slate-300 border-t border-slate-200 dark:border-slate-800 text-xs transition-colors duration-150">
      
      {/* Upper Verification Bar */}
      <div className="border-b border-slate-800 py-6 bg-[#0B1320] dark:bg-[#04070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-left">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 border border-slate-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">CIN Registered Entity</div>
                <div className="text-[11px] text-slate-400 font-mono tabular-nums">{COMPANY_INFO.cin}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 border border-slate-700">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Registrar of Companies</div>
                <div className="text-[11px] text-slate-400">{COMPANY_INFO.roc} (Kanpur)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 border border-slate-700">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Statewide Field Scope</div>
                <div className="text-[11px] text-slate-400 font-mono">All 75 Districts in UP</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 border border-slate-700">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Evidentiary Standard</div>
                <div className="text-[11px] text-slate-400">Strict Chain of Custody</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#1E293B] flex items-center justify-center border border-slate-700">
                <span className="text-amber-400 font-mono font-bold text-xs">AMS</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm block leading-tight">
                  AUTOCRATIC
                </span>
                <span className="text-slate-400 text-[10px] tracking-wide uppercase font-mono">
                  Management Services Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Incorporated on November 15, 2018 in Lucknow, Uttar Pradesh. Delivering objective, audit-ready, and court-defensible insurance claim investigations across all 75 districts of Uttar Pradesh.
            </p>

            <div className="p-3 bg-[#111B2A] rounded border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono">
              <div><strong className="text-white">Authorized Capital:</strong> {COMPANY_INFO.authorizedCapital}</div>
              <div><strong className="text-white">Paid-up Capital:</strong> {COMPANY_INFO.paidUpCapital}</div>
              <div><strong className="text-white">Group Heritage:</strong> 15+ Years (ERE Group since 2010)</div>
            </div>
          </div>

          {/* Column 2: Investigation Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase text-amber-400 font-mono">
              Investigation Verticals
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#coverage" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Pan-UP 75 Districts Matrix</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>5-Stage SOP Protocol</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Operational Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase text-amber-400 font-mono">
              Operational Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.contact.operationalOffice.addressLine1},<br />
                  {COMPANY_INFO.contact.operationalOffice.addressLine2} – {COMPANY_INFO.contact.operationalOffice.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.officialEmail}`} className="hover:text-white text-slate-300 font-mono">
                  {COMPANY_INFO.contact.officialEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                Registered Office:
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {COMPANY_INFO.contact.registeredOffice.addressLine1}, {COMPANY_INFO.contact.registeredOffice.addressLine2} – {COMPANY_INFO.contact.registeredOffice.pincode}
              </p>
            </div>
          </div>

          {/* Column 4: Leadership & Back to Top (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase text-amber-400 font-mono">
              Leadership
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {COMPANY_INFO.directors.map((d, i) => (
                <div key={i} className="pb-1.5 border-b border-slate-800 last:border-0">
                  <div className="text-white font-medium">{d.name}</div>
                  <div className="text-[10px] text-slate-500">{d.role}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1E293B] hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Autocratic Management Services Private Limited. All rights reserved. CIN: <span className="font-mono">{COMPANY_INFO.cin}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
            <span className="text-slate-300">ROC Kanpur Registered</span>
            <span>•</span>
            <span className="text-slate-300">Strict Evidentiary Confidentiality</span>
            <span>•</span>
            <span className="text-slate-300">Aliganj, Lucknow, UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

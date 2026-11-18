import React, { useState } from 'react';
import { 
  Car, 
  ShieldAlert, 
  Building2, 
  HeartHandshake, 
  Network, 
  CheckCircle, 
  ArrowRight, 
  FileCheck, 
  Crosshair, 
  SearchCheck,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/companyData';

const iconMap = {
  Car,
  ShieldAlert,
  Building2,
  HeartHandshake,
  Network
};

export default function Services({ onOpenTriageModal }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const SelectedIcon = iconMap[selectedService.iconName] || FileCheck;

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#090D16] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <SearchCheck className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Core B2B Offerings</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Claims Verification Verticals
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Tailored specifically for General Insurers, Health Underwriters, and Third-Party Administrators (TPAs) operating across all 75 districts of Uttar Pradesh.
          </p>
        </div>

        {/* Unified Master-Detail Workbench (No duplicate cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left / Selector Rail (4 Columns on Desktop) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 mb-2 flex items-center justify-between">
              <span>Select Investigation Vertical</span>
              <span className="font-mono text-[10px]">5 Verticals Active</span>
            </div>

            <div className="flex flex-col gap-2">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.iconName] || FileCheck;
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left p-3.5 rounded border transition-all flex items-start gap-3 relative ${
                      isSelected
                        ? 'bg-white dark:bg-[#111827] border-amber-700 dark:border-amber-500 shadow-sm ring-1 ring-amber-700/30 dark:ring-amber-500/30'
                        : 'bg-white/60 dark:bg-[#0D1522]/80 border-slate-200 dark:border-slate-800/80 hover:bg-white dark:hover:bg-[#111827] hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Active Accent Indicator */}
                    {isSelected && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-amber-700 dark:bg-amber-500" />
                    )}

                    <div className={`p-2 rounded shrink-0 mt-0.5 ${
                      isSelected 
                        ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`text-xs font-bold truncate ${
                          isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {service.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {service.tagline}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-medium px-2 py-0.2 rounded-sm bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 tabular-nums">
                          {service.highlight.replace('Average Turnaround: ', 'TAT: ')}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right / Detailed SOP & Evidentiary Deliverables Panel (8 Columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors">
            
            {/* Header Strip of Selected Vertical */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded bg-slate-100 dark:bg-[#1E293B] text-amber-800 dark:text-amber-400 border border-slate-200 dark:border-slate-700">
                  <SelectedIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-sm bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-600/30 tabular-nums">
                  {selectedService.highlight}
                </span>
                <span className="hidden sm:inline-block font-mono text-xs text-slate-500 dark:text-slate-400">
                  Pan-UP 75 Districts
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Scope & Evidentiary Deliverables */}
            <div className="mt-5 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Standard Scope & Evidentiary Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedService.deliverables.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 p-2.5 rounded bg-slate-50 dark:bg-[#0D1522] border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Protocol Specs Box */}
            <div className="mt-6 p-4 rounded bg-slate-50 dark:bg-[#0D1522] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    SOP & Field Protocol Standards
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-300 dark:border-emerald-800">
                  IRDAI COMPLIANT
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Evidence Chain Standard</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 text-[11px] leading-relaxed">
                    High-Res Geo-Tagged Photos, GPS Coordinates, Timestamped Video & Written Declarations
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Counterparts Scrutinized</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 text-[11px] leading-relaxed">
                    Claimants, Eyewitnesses, Police Station IOs, Authorized Garages, RTOs & Hospital Staff
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Deliverable Format</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 text-[11px] leading-relaxed">
                    Structured Digital Dossier (PDF/MIS), Executive Fraud Score & Court-Admissible Affidavit
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Field Response Guarantee</span>
                  <p className="text-amber-800 dark:text-amber-400 font-bold mt-0.5 text-[11px] leading-relaxed">
                    On-Site within 24h Central UP / 36-48h Outer Districts
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3 items-center justify-between">
              <button
                onClick={onOpenTriageModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-all active:scale-[0.98] border border-amber-800 dark:border-amber-500"
              >
                <span>Assign {selectedService.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <span>Request Custom Corporate SLA Schedule</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

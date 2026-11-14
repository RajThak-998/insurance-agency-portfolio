import React, { useState } from 'react';
import { 
  Car, 
  ShieldAlert, 
  Building2, 
  HeartHandshake, 
  Network, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  FileCheck, 
  ExternalLink,
  SearchCheck,
  Crosshair
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

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-800 text-xs font-semibold tracking-wider uppercase border border-blue-200">
            <SearchCheck className="w-3.5 h-3.5 text-accent-goldDark" />
            <span>Operational Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-heading tracking-tight">
            Comprehensive Claims Verification & Risk Mitigation
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Tailored specifically for General Insurers, Health Underwriters, and Third-Party Administrators (TPAs) operating across the state of Uttar Pradesh.
          </p>
        </div>

        {/* Services Navigation Pills / Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || FileCheck;
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-900 text-white shadow-card border border-brand-800'
                    : 'bg-white text-slate-700 hover:text-brand-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-accent-gold' : 'text-slate-500'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Spotlight Box */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 lg:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                  {selectedService.highlight}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Verified Pan-UP Coverage (75 Districts)
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 font-heading">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-accent-goldDark mt-1">
                  {selectedService.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Deliverables & Evidentiary Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenTriageModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Assign {selectedService.title} Case</span>
                  <ArrowRight className="w-4 h-4 text-accent-gold" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-700 hover:text-brand-900"
                >
                  <span>Request Custom SLA Guidelines</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right side: Operational Specs Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-elevated border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-accent-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    SOP & Investigation Scope
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  AMS SOP 2026-v4
                </span>
              </div>

              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Evidence Chain Standard</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    High-Res Geo-Tagged Photographs, GPS Coordinates, Timestamped Video Footage & Written Confirmatory Declarations
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Primary Counterparts Contacted</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    Claimant, Independent Eyewitnesses, Local Police Officials (IO), Authorized Workshops & Hospital Administrators
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Deliverable Format</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    Structured Digital Dossier (PDF/MIS), Executive Fraud Score Summary & Court-Admissible Affidavit (MACT/Legal)
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Field Response Guarantee</span>
                  <p className="text-accent-gold font-bold mt-0.5">
                    Investigator On-Site within 24 Hours in Central UP / 36 Hours Across Outer Districts
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Service Cards Overview (Mobile & Fast Glance) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.iconName] || FileCheck;
            return (
              <div 
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`bg-white rounded-xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  selectedService.id === srv.id 
                    ? 'border-brand-600 ring-2 ring-brand-500/20 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {srv.highlight}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-950 font-heading">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {srv.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-700">
                  <span>View Full Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

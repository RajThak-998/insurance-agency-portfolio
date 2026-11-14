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
  ChevronRight
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
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <SearchCheck className="w-3.5 h-3.5 text-accent-600" />
            <span>Core B2B Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-950 font-heading tracking-tight">
            Specialized Claims Verification Verticals
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
                    ? 'bg-brand-900 text-white shadow-lg border border-brand-800'
                    : 'bg-white text-slate-700 hover:text-brand-950 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-accent-400' : 'text-slate-500'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Spotlight Box */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-md p-7 sm:p-9 lg:p-11 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-bold border border-accent-200">
                  {selectedService.highlight}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Verified Pan-UP Reach (75 Districts)
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 font-heading tracking-tight">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-accent-600 mt-1">
                  {selectedService.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-brand-950 uppercase tracking-wider">
                  Standard Scope & Evidentiary Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenTriageModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-900 hover:bg-brand-950 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Assign {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4 text-accent-400" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-900 hover:text-brand-950"
                >
                  <span>Request Custom SLA Schedule</span>
                  <ChevronRight className="w-4 h-4 text-accent-600" />
                </a>
              </div>
            </div>

            {/* Right side: Operational Specs Card */}
            <div className="lg:col-span-5 bg-brand-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-brand-800">
              <div className="flex items-center justify-between pb-4 border-b border-brand-800">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-accent-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    SOP & Field Protocol
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  IRDAI COMPLIANT
                </span>
              </div>

              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Evidence Chain Standard</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    High-Res Geo-Tagged Photographs, GPS Coordinates, Timestamped Video & Written Declarations
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-800">
                  <span className="text-slate-400 block text-[11px]">Counterparts Scrutinized</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    Claimants, Eyewitnesses, Police Station IOs, Authorized Workshops, RTOs & Hospital Staff
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-800">
                  <span className="text-slate-400 block text-[11px]">Deliverable Format</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    Structured Digital Dossier (PDF/MIS), Executive Fraud Score & Court-Admissible Affidavit
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-800">
                  <span className="text-slate-400 block text-[11px]">Field Response Guarantee</span>
                  <p className="text-accent-400 font-bold mt-0.5">
                    On-Site within 24 Hours in Central UP / 36 Hours Across Outer Districts
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Service Cards Overview (Fast Glance Grid) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.iconName] || FileCheck;
            return (
              <div 
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  selectedService.id === srv.id 
                    ? 'border-brand-900 ring-2 ring-brand-900/10 shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
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

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-900">
                  <span>View Full Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-600" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

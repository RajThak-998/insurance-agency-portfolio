import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Compass,
  FileCheck2,
  Lock,
  ChevronRight,
  SearchCheck,
  Building
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS, UP_REGIONS } from '../data/companyData';

export default function Hero({ onOpenTriageModal }) {
  const [activeSector, setActiveSector] = useState(0);
  const currentSector = UP_REGIONS[activeSector];

  return (
    <section className="relative bg-gradient-to-b from-brand-900 via-brand-900 to-brand-950 text-white overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-brand-800">
      {/* Background Architectural Sovereign Grid */}
      <div className="absolute inset-0 bg-sovereign-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-800/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-accent-500/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Fine Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Authority & Corporate Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-700/80 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wide">Institutional Insurance Investigation & Anti-Fraud Risk Firm</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
              Ground-Truth Claims Investigation for{' '}
              <span className="text-accent-400">
                Institutional Insurers
              </span>{' '}
              Across Uttar Pradesh
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed">
              Established in November 2018 in Lucknow, <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> combines over 15 years of group leadership experience with dedicated field investigators operating across <span className="text-accent-400 font-semibold">all 75 UP districts</span>. We deliver court-defensible evidentiary dossiers that protect loss ratios.
            </p>

            {/* Institutional Quality Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-850/80 border border-brand-750/70">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="font-medium">Court-Defensible Chain of Custody</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-850/80 border border-brand-750/70">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="font-medium">Zero Sub-Contracting (100% Vetted Staff)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-850/80 border border-brand-750/70">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="font-medium">Sub-24h First Response in Central UP</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-850/80 border border-brand-750/70">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span className="font-medium">15+ Years Group Heritage (ERE Group 2010)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenTriageModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-accent-400/40"
              >
                <span>Initiate Case Audit / Triage</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-800/90 hover:bg-brand-750 text-white font-semibold text-sm border border-brand-700 hover:border-brand-600 transition-all shadow-sm"
              >
                <span>Investigation Verticals</span>
                <ChevronRight className="w-4 h-4 text-accent-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-300 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Empanelment Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-400" />
              </a>
            </div>

            {/* Compliance Credential Sub-strip */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 border-t border-brand-800">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CIN: {COMPANY_INFO.cin}</span>
              </div>
              <span className="text-slate-600">•</span>
              <span>ROC Kanpur Registered</span>
              <span className="text-slate-600">•</span>
              <span>Authorized Capital: ₹10,00,000</span>
            </div>

          </div>

          {/* Right Column: Executive Telemetry & Command Center Console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative bg-brand-950 rounded-3xl p-6 sm:p-7 shadow-2xl border border-brand-800">
                
                {/* Console Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-widest text-white block">
                        Aliganj Command Desk
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Lucknow Central Ops Hub • 26.8928° N, 80.9330° E
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-accent-400 bg-accent-500/15 px-2 py-0.5 rounded border border-accent-500/30 font-semibold">
                    ACTIVE SLA
                  </span>
                </div>

                {/* Regional Sector Switcher (Interactive) */}
                <div className="mt-4">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Select Operational Sector:</span>
                    <span className="text-accent-400 font-mono text-[10px]">75 / 75 Districts Synced</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {UP_REGIONS.map((region, idx) => (
                      <button
                        key={region.name}
                        onClick={() => setActiveSector(idx)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                          activeSector === idx
                            ? 'bg-brand-900 border-accent-500 text-white shadow-md ring-1 ring-accent-500/40'
                            : 'bg-brand-900/60 border-brand-800 text-slate-300 hover:text-white hover:bg-brand-850'
                        }`}
                      >
                        <div className="font-semibold truncate">{region.name.split(' (')[0]}</div>
                        <div className="text-[10px] text-accent-400 mt-0.5 font-mono">{region.tat} TAT</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Sector Telemetry Display */}
                <div className="mt-4 p-4 rounded-2xl bg-brand-900 border border-brand-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{currentSector.name}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                      {currentSector.officers}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300">
                    <strong className="text-white">Hub Nodes:</strong> {currentSector.hub}
                  </p>

                  <div className="pt-2 border-t border-brand-800 flex flex-wrap gap-1.5">
                    {currentSector.districts.slice(0, 5).map(d => (
                      <span key={d} className="px-2 py-0.5 rounded bg-brand-950 text-[10px] text-slate-200 border border-brand-800">
                        {d}
                      </span>
                    ))}
                    {currentSector.districts.length > 5 && (
                      <span className="px-2 py-0.5 rounded bg-accent-500/20 text-[10px] text-accent-400 border border-accent-500/30 font-mono">
                        +{currentSector.districts.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Simulated Evidentiary Integrity Protocol Spec */}
                <div className="mt-4 p-3.5 rounded-xl bg-brand-900 border border-brand-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-accent-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-[11px]">Evidentiary Chain-of-Custody</div>
                      <div className="text-[10px] text-slate-300">Geo-tagging • RTO records • Police FIR liaison</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] font-bold">100% VALIDATED</span>
                </div>

                {/* Console Action */}
                <button
                  onClick={onOpenTriageModal}
                  className="w-full mt-4 py-3 px-4 rounded-xl bg-brand-850 hover:bg-brand-800 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-brand-700 hover:border-accent-400 flex items-center justify-center gap-2"
                >
                  <SearchCheck className="w-4 h-4 text-accent-400" />
                  <span>Assign Claim Mandate for Field Review</span>
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Floating Authority Ribbon / Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-brand-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-brand-950/80 border border-brand-800 hover:border-accent-500/50 transition-all duration-200"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-accent-400 mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

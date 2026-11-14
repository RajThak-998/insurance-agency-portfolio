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
  Layers,
  ChevronRight,
  Cpu,
  Clock,
  SearchCheck,
  Building
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS, UP_REGIONS } from '../data/companyData';

export default function Hero({ onOpenTriageModal }) {
  const [activeSector, setActiveSector] = useState(0);
  const currentSector = UP_REGIONS[activeSector];

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-white/[0.06]">
      {/* Background Ambience: Subtle Tech Grid & Vignette */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-navy-800/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-bronze-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Fine Gold / Platinum Accent Horizon */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bronze-400/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Authority & Corporate Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wide">Institutional Insurance Investigation & Anti-Fraud Risk Firm</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
              Ground-Truth Claims Investigation for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-bronze-300">
                Institutional Insurers
              </span>{' '}
              Across Uttar Pradesh
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Established in November 2018 in Lucknow, <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> combines over 15 years of group leadership experience with dedicated field investigators operating across <span className="text-bronze-400 font-semibold">all 75 UP districts</span>. We deliver court-defensible evidentiary dossiers that protect loss ratios.
            </p>

            {/* Institutional Quality Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Court-Defensible Chain of Custody</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Zero Sub-Contracting (100% Vetted Staff)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>Sub-24h First Response in Central UP</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>15+ Years Group Heritage (ERE Group 2010)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenTriageModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-bronze-500 via-amber-500 to-bronze-600 hover:from-amber-400 hover:to-bronze-500 text-navy-950 font-bold text-sm tracking-wide uppercase shadow-luxury hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-amber-300/40"
              >
                <span>Initiate Case Audit / Triage</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-850/80 hover:bg-navy-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all shadow-sm"
              >
                <span>Investigation Verticals</span>
                <ChevronRight className="w-4 h-4 text-bronze-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-400 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Empanelment Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Compliance Credential Sub-strip */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
              
              {/* Outer Card Subtle Ambient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 via-bronze-500/20 to-navy-800/40 rounded-3xl blur-md opacity-40" />

              <div className="relative executive-card-dark rounded-3xl p-6 sm:p-7 shadow-luxury-dark border border-white/10">
                
                {/* Console Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-widest text-slate-200 block">
                        Aliganj Command Desk
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Lucknow Central Ops Hub • 26.8928° N, 80.9330° E
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-bronze-400 bg-bronze-500/10 px-2 py-0.5 rounded border border-bronze-500/20 font-semibold">
                    ACTIVE SLA
                  </span>
                </div>

                {/* Regional Sector Switcher (Interactive) */}
                <div className="mt-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Select Operational Sector:</span>
                    <span className="text-bronze-400 font-mono text-[10px]">75 / 75 Districts Synced</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {UP_REGIONS.map((region, idx) => (
                      <button
                        key={region.name}
                        onClick={() => setActiveSector(idx)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                          activeSector === idx
                            ? 'bg-navy-800 border-bronze-400/50 text-white shadow-sm ring-1 ring-bronze-400/20'
                            : 'bg-navy-950/60 border-white/[0.06] text-slate-400 hover:text-slate-200 hover:bg-navy-900/60'
                        }`}
                      >
                        <div className="font-semibold truncate">{region.name.split(' (')[0]}</div>
                        <div className="text-[10px] text-bronze-400 mt-0.5 font-mono">{region.tat} TAT</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Sector Telemetry Display */}
                <div className="mt-4 p-4 rounded-2xl bg-navy-950/80 border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{currentSector.name}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {currentSector.officers}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    <strong className="text-slate-300">Hub Nodes:</strong> {currentSector.hub}
                  </p>

                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {currentSector.districts.slice(0, 5).map(d => (
                      <span key={d} className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-300 border border-white/[0.04]">
                        {d}
                      </span>
                    ))}
                    {currentSector.districts.length > 5 && (
                      <span className="px-2 py-0.5 rounded bg-bronze-500/10 text-[10px] text-bronze-400 border border-bronze-500/20 font-mono">
                        +{currentSector.districts.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Simulated Evidentiary Integrity Protocol Spec */}
                <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-navy-900 to-navy-850 border border-white/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-bronze-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-200 text-[11px]">Evidentiary Chain-of-Custody</div>
                      <div className="text-[10px] text-slate-400">Geo-tagging • RTO records • Police FIR liaison</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] font-bold">100% VALIDATED</span>
                </div>

                {/* Console Action */}
                <button
                  onClick={onOpenTriageModal}
                  className="w-full mt-4 py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-bronze-400/40 flex items-center justify-center gap-2"
                >
                  <SearchCheck className="w-4 h-4 text-bronze-400" />
                  <span>Assign Claim Mandate for Field Review</span>
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Floating Authority Ribbon / Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-navy-900/60 border border-white/[0.05] hover:border-bronze-400/30 transition-all duration-200"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
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

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Lock,
  ChevronRight,
  SearchCheck,
  Building,
  Activity
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS, UP_REGIONS } from '../data/companyData';

export default function Hero({ onOpenTriageModal }) {
  const [activeSector, setActiveSector] = useState(0);
  const currentSector = UP_REGIONS[activeSector];

  return (
    <section className="relative bg-[#F8F9FA] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 12-Column Editorial Split (7 cols left / 5 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Brand Authority, Value Proposition & Commitments */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Regulatory Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-slate-900 dark:text-slate-200">
                CIN: {COMPANY_INFO.cin}
              </span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-slate-700 dark:text-slate-300">ROC Kanpur</span>
              <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-700 dark:text-slate-300 hidden sm:inline">
                Nov 15, 2018 ({COMPANY_INFO.yearsInOperation} Yrs Ops)
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              Ground-Truth Claims Investigation for{' '}
              <span className="text-amber-800 dark:text-amber-400 underline decoration-amber-600/30 underline-offset-4">
                Institutional Insurers
              </span>{' '}
              Across Uttar Pradesh
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Incorporated on November 15, 2018 in Lucknow, <strong className="text-slate-900 dark:text-white font-semibold">{COMPANY_INFO.name}</strong> combines over 15 years of group leadership heritage (ERE Group 2010) with full-time, vetted field investigators operating across <span className="font-semibold text-amber-800 dark:text-amber-400">all 75 UP districts</span>. We deliver court-defensible evidentiary dossiers that protect insurer loss ratios.
            </p>

            {/* 4 Core Institutional Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Court-Defensible Chain of Custody</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Zero Sub-Contracting (100% Vetted Staff)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Sub-24h First Response in Central UP</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">15+ Yrs Group Heritage (ERE Group 2010)</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenTriageModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.98] border border-amber-800 dark:border-amber-500"
              >
                <span>Initiate Case Audit / Triage</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              >
                <span>Investigation Verticals</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Empanelment Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              </a>
            </div>

            {/* Compliance Credential Sub-strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="font-mono text-[11px] text-amber-800 dark:text-amber-400 font-medium">
                Authorized Capital: {COMPANY_INFO.authorizedCapital}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>Paid-up: {COMPANY_INFO.paidUpCapital}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="font-mono text-[11px]">FY25: {COMPANY_INFO.annualRevenueScale}</span>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Aliganj Command Desk Console */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm dark:shadow-card-dark transition-colors">
              
              {/* Console Top Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                  <div>
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white block">
                      Aliganj Command Desk
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                      Lucknow Central Ops Hub • 26.8928° N, 80.9330° E
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-600/20 tabular-nums">
                  ACTIVE SLA
                </span>
              </div>

              {/* Regional Sector Switcher (Interactive) */}
              <div className="mt-4">
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Operational Sector:</span>
                  <span className="text-amber-800 dark:text-amber-400 font-mono text-[10px] font-bold tabular-nums">
                    75 / 75 Districts Synced
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {UP_REGIONS.map((region, idx) => (
                    <button
                      key={region.name}
                      onClick={() => setActiveSector(idx)}
                      className={`p-2.5 rounded text-left border transition-all text-xs ${
                        activeSector === idx
                          ? 'bg-slate-100 dark:bg-[#1E293B] border-amber-700 dark:border-amber-500 text-slate-950 dark:text-white font-semibold ring-1 ring-amber-700/30 dark:ring-amber-500/30'
                          : 'bg-slate-50 dark:bg-[#0D1522] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="truncate text-xs font-semibold">{region.name.split(' (')[0]}</div>
                      <div className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5 font-mono tabular-nums">
                        {region.tat} TAT
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Sector Telemetry Display */}
              <div className="mt-3.5 p-3.5 rounded bg-slate-50 dark:bg-[#0D1522] border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{currentSector.name}</span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-300 dark:border-emerald-800/80 tabular-nums">
                    {currentSector.officers}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white font-medium">Hub Nodes:</strong> {currentSector.hub}
                </p>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
                  {currentSector.districts.slice(0, 5).map(d => (
                    <span 
                      key={d} 
                      className="px-2 py-0.5 rounded-sm bg-white dark:bg-[#111827] text-[10px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {d}
                    </span>
                  ))}
                  {currentSector.districts.length > 5 && (
                    <span className="px-2 py-0.5 rounded-sm bg-amber-500/10 text-[10px] text-amber-800 dark:text-amber-400 border border-amber-600/20 font-mono tabular-nums">
                      +{currentSector.districts.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Evidentiary Integrity Protocol Spec */}
              <div className="mt-3.5 p-3 rounded bg-slate-50 dark:bg-[#0D1522] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-[11px]">
                      Evidentiary Chain-of-Custody
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Geo-tagging • RTO records • Police FIR liaison
                    </div>
                  </div>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold tabular-nums">
                  100% VALIDATED
                </span>
              </div>

              {/* Console Action Button */}
              <button
                onClick={onOpenTriageModal}
                className="w-full mt-4 py-2.5 px-4 rounded bg-slate-900 hover:bg-slate-800 dark:bg-[#1E293B] dark:hover:bg-slate-700 text-white font-semibold text-xs tracking-wide transition-colors border border-slate-800 dark:border-slate-700 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <SearchCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Assign Claim Mandate for Field Review</span>
              </button>

            </div>
          </div>

        </div>

        {/* Bottom 6-KPI Credibility Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
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

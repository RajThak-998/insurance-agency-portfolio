import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight, 
  AlertTriangle,
  Building,
  Car,
  Search,
  Activity,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/companyData';

export default function Hero({ onOpenTriageModal }) {
  return (
    <section className="relative bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 text-white overflow-hidden pt-12 pb-20 lg:py-24 border-b border-brand-800">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Radar Scan Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Statewide B2B Insurance Risk & Claims Intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Defending Insurer Margins with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-amber-300">
                Ground-Truth Field Investigation
              </span>{' '}
              Across Uttar Pradesh
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Established in November 2018 in Lucknow, <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> delivers institutional-grade Motor OD/TP, Theft, Commercial, and Health claim verifications with boots-on-the-ground presence across <span className="text-accent-gold font-medium">all 75 UP districts</span>.
            </p>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Court-Admissible Evidence Dossiers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15+ Yrs Combined Group Heritage (2010)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Geo-Tagged & Timestamped Field Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict Insurer SLA & Turnaround (24-48h)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-gold to-amber-500 hover:from-amber-400 hover:to-accent-goldDark text-brand-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTriageModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-800/80 hover:bg-brand-700/80 text-white font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-blue-400 transition-all"
              >
                <Search className="w-4 h-4 text-accent-gold" />
                <span>Assign Case / Instant Triage</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Registration Verification Strip */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official MCA Registered Entity: CIN {COMPANY_INFO.cin} • ROC Kanpur</span>
            </div>

          </div>

          {/* Right Column: Live Operational Intelligence Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 rounded-2xl blur-lg opacity-30" />

              <div className="relative bg-brand-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header of Triage Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-heading font-semibold text-sm text-white tracking-wide">
                      UP Field Command Center
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-brand-950 px-2.5 py-1 rounded border border-slate-800">
                    Aliganj HQ • Live
                  </span>
                </div>

                {/* Simulated Real-Time Status Ticker */}
                <div className="mt-4 space-y-3">
                  
                  {/* Item 1 */}
                  <div className="p-3 bg-brand-950/70 rounded-xl border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Car className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 truncate">Motor OD Scene Reconstruction</span>
                        <span className="text-emerald-400 font-mono text-[11px]">VERIFIED</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">Sitapur Highway • Duplicate Key & Impact Angle Analysis</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 bg-brand-950/70 rounded-xl border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 truncate">Commercial Burglary Audit</span>
                        <span className="text-amber-300 font-mono text-[11px]">UNDER AUDIT</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">Kanpur Nagar Industrial Area • Stock Book Discrepancy</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3 bg-brand-950/70 rounded-xl border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 truncate">Hospital IPD Verification</span>
                        <span className="text-blue-400 font-mono text-[11px]">COMPLETED</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">Varanasi Cantt • Surprise Bed & Record Validation</p>
                    </div>
                  </div>

                </div>

                {/* Network & Speed Indicator */}
                <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-brand-950/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-accent-gold font-heading font-bold text-lg">75 / 75</div>
                    <div className="text-[11px] text-slate-400">UP Districts Synchronized</div>
                  </div>
                  <div className="bg-brand-950/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-emerald-400 font-heading font-bold text-lg">&lt; 24 Hrs</div>
                    <div className="text-[11px] text-slate-400">Average First-Response</div>
                  </div>
                </div>

                {/* Action in Card */}
                <button
                  onClick={onOpenTriageModal}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Submit Claims Roster For Investigation</span>
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-brand-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300 font-heading">
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

import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Scale, 
  Lock,
  Compass,
  ArrowRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function About() {
  const pillars = [
    {
      icon: Compass,
      title: "The Ground Origin",
      subtitle: "15+ Years Investigative Heritage",
      description: "Our leadership group has operated in Uttar Pradesh's insurance risk ecosystem since 2010 through sister firm ERE Management Services. In November 2018, Autocratic Management Services Private Limited was formally incorporated in Lucknow to establish an institutional-grade, anti-fraud investigative force."
    },
    {
      icon: Scale,
      title: "Presumption of Legitimacy",
      subtitle: "Unbiased, Evidence-Driven Inquiry",
      description: "We do not manufacture suspicion; we uncover objective truth. Every claim begins with a presumption of validity. Our investigators rigorously examine physical damage, impact mechanics, official police records, and witnesses to deliver clear, legally defensible findings."
    },
    {
      icon: MapPin,
      title: "Statewide Grassroots Reach",
      subtitle: "All 75 Districts Covered",
      description: "Unlike metro-only agencies that broker outstation inquiries to unvetted third parties, AMS maintains a coordinated, full-time network of local field investigators across every tehsil and district of Uttar Pradesh, centrally managed from our Aliganj, Lucknow command center."
    },
    {
      icon: Lock,
      title: "Strict Corporate Compliance",
      subtitle: "Chain of Custody & Privacy",
      description: "We adhere strictly to statutory insurance frameworks, data confidentiality covenants, and Indian Evidence Act evidentiary standards. Every photograph, telemetry log, and recorded statement follows unbroken chain-of-custody protocols."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative Subtle Grid */}
      <div className="absolute inset-0 bg-slate-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <Building2 className="w-3.5 h-3.5 text-bronze-600" />
            <span>Corporate Identity & Heritage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 font-heading tracking-tight">
            Built on Field Integrity. Proven Across Uttar Pradesh.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered in Aliganj, Lucknow, <strong className="text-navy-950 font-semibold">{COMPANY_INFO.name}</strong> was incorporated on November 15, 2018. Over the past 7+ years, we have emerged as one of Uttar Pradesh’s most trusted claims verification and risk management partners for major general insurance carriers.
          </p>
        </div>

        {/* 4 Brand Pillars (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FAFAFC] hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-bronze-400/40 shadow-card-subtle hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-850 group-hover:bg-navy-950 group-hover:text-bronze-400 transition-colors flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-navy-950 font-heading group-hover:text-navy-800 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-bronze-600 mb-3">
                    {pillar.subtitle}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center text-xs font-semibold text-navy-800 group-hover:translate-x-1 transition-transform">
                  <span>Institutional Standard</span>
                  <span className="ml-1 text-bronze-600">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Standing & Ministry of Corporate Affairs (MCA) Record */}
        <div className="mt-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-luxury-dark border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-500/15 text-bronze-400 text-xs font-semibold border border-bronze-500/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory & Corporate Credentials</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Institutional Reliability for Underwriters & Legal Claims Panels
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                As claims scrutiny becomes increasingly rigorous under IRDAI guidelines, insurance companies require legally registered, audit-ready investigation partners. Our official registration with ROC Kanpur, combined with full financial transparency and over a decade of sister-firm leadership in Lucknow, gives our corporate partners total confidence in every investigation report we deliver.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Statewide Field Force Across 75 Districts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>MACT Tribunal Evidentiary & Deposition Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Centralized Quality Control in Aliganj</span>
                </div>
              </div>
            </div>

            {/* Quick Corporate Facts Grid */}
            <div className="lg:col-span-5 bg-navy-900/90 rounded-2xl p-6 border border-white/10 space-y-3.5 backdrop-blur-md">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-white/[0.08] flex items-center justify-between">
                <span>Official MCA Record</span>
                <span className="text-emerald-400 font-mono text-[10px]">VERIFIED ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-navy-950/70 p-3.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 block text-[11px]">Corporate ID (CIN)</span>
                  <span className="text-white font-mono font-bold text-xs">{COMPANY_INFO.cin}</span>
                </div>

                <div className="bg-navy-950/70 p-3.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 block text-[11px]">Registrar Jurisdiction</span>
                  <span className="text-white font-bold">{COMPANY_INFO.roc}</span>
                </div>

                <div className="bg-navy-950/70 p-3.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 block text-[11px]">Incorporation Date</span>
                  <span className="text-white font-bold">{COMPANY_INFO.incorporationDate}</span>
                </div>

                <div className="bg-navy-950/70 p-3.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 block text-[11px]">Annual Scale (FY25)</span>
                  <span className="text-bronze-400 font-bold">{COMPANY_INFO.annualRevenueScale}</span>
                </div>

                <div className="col-span-2 bg-navy-950/70 p-3.5 rounded-xl border border-white/[0.06]">
                  <span className="text-slate-400 block text-[11px]">Associated Sister Entity</span>
                  <span className="text-slate-200 font-semibold">{COMPANY_INFO.sisterConcern}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">15+ Years Combined Industry Footprint in Lucknow</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

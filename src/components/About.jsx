import React from 'react';
import { 
  Building2, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Scale, 
  FileCheck2,
  Lock,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function About() {
  const pillars = [
    {
      icon: Compass,
      title: "The Ground Origin",
      subtitle: "15+ Years Investigative Legacy",
      description: "Our leadership group has operated in Uttar Pradesh's insurance risk ecosystem since 2010 through sister concern ERE Management Services. In November 2018, Autocratic Management Services Private Limited was formally incorporated to build a specialized, technology-backed corporate investigative powerhouse."
    },
    {
      icon: Scale,
      title: "Presumption of Legitimacy",
      subtitle: "Unbiased, Evidence-Driven Inquiry",
      description: "We do not manufacture suspicion; we uncover objective truth. Every claim begins with a presumption of validity. Our investigators rigorously examine physical evidence, telematics, official police records, and witnesses to deliver clear, legally defensible findings."
    },
    {
      icon: MapPin,
      title: "Statewide Grassroots Reach",
      subtitle: "All 75 Districts Covered",
      description: "Unlike metro-only firms that subcontract rural inquiries to unverified third parties, AMSPL maintains a coordinated, vetted network of field investigators across every tehsil and district of Uttar Pradesh, centrally managed from our Aliganj, Lucknow command center."
    },
    {
      icon: Lock,
      title: "Strict Corporate Compliance",
      subtitle: "Chain of Custody & Privacy",
      description: "We adhere strictly to statutory insurance frameworks, data confidentiality agreements, and Indian Evidence Act evidentiary standards. Every photograph, document, and recorded statement follows unbroken chain-of-custody protocols."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold tracking-wider uppercase border border-blue-200">
            <Building2 className="w-3.5 h-3.5 text-accent-goldDark" />
            <span>Corporate Profile & Brand Origin</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-heading tracking-tight">
            Built on Field Integrity. Proven Across Uttar Pradesh.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered in Aliganj, Lucknow, <strong className="text-brand-900 font-semibold">{COMPANY_INFO.name}</strong> was established on November 15, 2018. Over the past 7+ years, we have grown into one of Uttar Pradesh’s most reliable B2B claims verification and insurance risk partners.
          </p>
        </div>

        {/* 4 Brand Pillars (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brand-500/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-brand-700 group-hover:bg-brand-900 group-hover:text-accent-gold transition-colors flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-950 font-heading group-hover:text-brand-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-accent-goldDark mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-brand-700 group-hover:translate-x-1 transition-transform">
                  <span>Objective Standard</span>
                  <span className="ml-1 text-accent-goldDark">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive: Corporate Structure & Credentials Strip */}
        <div className="mt-14 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-white rounded-2xl p-8 lg:p-10 shadow-elevated border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-accent-gold/20 text-accent-gold text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory & Corporate Standing</span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Institutional Reliability for Insurance Underwriters & Legal Panels
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                As insurance claims scrutiny grows increasingly rigorous under IRDAI compliance norms, corporate insurers require legally registered, audit-ready partners. Our official registration with ROC Kanpur, combined with full financial transparency and over a decade of sister-firm leadership in Lucknow, gives our corporate partners total confidence in every investigation report we deliver.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Statewide Field Investigator Network</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Prompt Legal & MACT Deposition Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Centralized Quality Control in Aliganj</span>
                </div>
              </div>
            </div>

            {/* Quick Corporate Facts Grid */}
            <div className="lg:col-span-5 bg-brand-900/80 rounded-xl p-5 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800">
                Official Ministry of Corporate Affairs (MCA) Record
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-brand-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Corporate ID (CIN)</span>
                  <span className="text-white font-mono font-bold text-xs">{COMPANY_INFO.cin}</span>
                </div>

                <div className="bg-brand-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Jurisdiction</span>
                  <span className="text-white font-bold">{COMPANY_INFO.roc}</span>
                </div>

                <div className="bg-brand-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Incorporation Date</span>
                  <span className="text-white font-bold">{COMPANY_INFO.incorporationDate}</span>
                </div>

                <div className="bg-brand-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-slate-400 block text-[11px]">Annual Revenue Scale</span>
                  <span className="text-accent-gold font-bold">{COMPANY_INFO.annualRevenueScale}</span>
                </div>

                <div className="col-span-2 bg-brand-950/60 p-3 rounded-lg border border-slate-800/80">
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

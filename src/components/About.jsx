import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Scale, 
  Lock,
  Compass,
  ArrowRight
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
    <section id="about" className="py-20 lg:py-24 bg-[#F1F5F9] dark:bg-[#0D1522] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <Building2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Corporate Identity & Heritage</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built on Field Integrity. Proven Across Uttar Pradesh.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Headquartered in Aliganj, Lucknow, <strong className="text-slate-900 dark:text-white font-semibold">{COMPANY_INFO.name}</strong> was incorporated on November 15, 2018. Over 7+ years of operations and 15+ years of combined group experience, we serve as Uttar Pradesh’s trusted claims verification and anti-fraud partner for major general insurance carriers.
          </p>
        </div>

        {/* 4 Brand Pillars (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-[#111827] rounded p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-600/50 dark:hover:border-amber-500/50 transition-all duration-150 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-slate-100 dark:bg-[#1E293B] text-amber-800 dark:text-amber-400 flex items-center justify-center mb-5 border border-slate-200 dark:border-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 mb-2.5">
                    {pillar.subtitle}
                  </div>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  <span>Institutional Standard</span>
                  <span className="ml-1 text-amber-700 dark:text-amber-400">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Standing & Ministry of Corporate Affairs (MCA) Record Panel */}
        <div className="mt-14 bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200 dark:border-slate-800 relative transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 text-amber-800 dark:text-amber-400 text-xs font-semibold border border-amber-600/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory & Corporate Standing</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Institutional Reliability for Underwriters & Legal Claims Panels
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As claims scrutiny becomes increasingly rigorous under IRDAI guidelines, insurance companies require legally registered, audit-ready investigation partners. Our official registration with ROC Kanpur, combined with full financial transparency and over a decade of sister-firm leadership in Lucknow, gives our corporate partners total confidence in every investigation dossier we submit.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>Statewide Field Force Across 75 Districts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>MACT Tribunal Evidentiary & Deposition Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>Centralized Quality Control in Aliganj</span>
                </div>
              </div>
            </div>

            {/* MCA Facts Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0D1522] rounded p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span>Official MCA Record</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold">
                  VERIFIED ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-white dark:bg-[#111827] p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Corporate ID (CIN)</span>
                  <span className="text-slate-900 dark:text-white font-mono font-bold text-xs">{COMPANY_INFO.cin}</span>
                </div>

                <div className="bg-white dark:bg-[#111827] p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Registrar Jurisdiction</span>
                  <span className="text-slate-900 dark:text-white font-bold">{COMPANY_INFO.roc}</span>
                </div>

                <div className="bg-white dark:bg-[#111827] p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Incorporation Date</span>
                  <span className="text-slate-900 dark:text-white font-bold">{COMPANY_INFO.incorporationDate}</span>
                </div>

                <div className="bg-white dark:bg-[#111827] p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Annual Scale (FY25)</span>
                  <span className="text-amber-800 dark:text-amber-400 font-mono font-bold">{COMPANY_INFO.annualRevenueScale}</span>
                </div>

                <div className="col-span-2 bg-white dark:bg-[#111827] p-3 rounded border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Associated Sister Entity</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{COMPANY_INFO.sisterConcern}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                    15+ Years Combined Industry Footprint in Lucknow
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <Users className="w-3.5 h-3.5 text-accent-600" />
            <span>Corporate Governance & Direction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-950 font-heading tracking-tight">
            Experienced Direction. Seasoned Industry Leadership.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            With over 15 years of industry leadership in Lucknow through sister concern ERE Management Services (2010) and Autocratic Management Services (2018), our directors guide every operational standard.
          </p>
        </div>

        {/* Directors Profiles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_INFO.directors.map((director, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-950 text-accent-400 flex items-center justify-center font-heading font-black text-xl shadow-md border border-brand-800">
                    {director.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-950 font-heading">
                      {director.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-accent-600">
                      {director.role}
                    </p>
                    <span className="inline-block text-[11px] text-slate-500 font-medium mt-0.5">
                      {director.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {director.bio}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  MCA Verified Director
                </span>
                <span className="font-semibold text-brand-950 font-mono text-[11px]">Aliganj, Lucknow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Heritage & Stability Callout Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-brand-950 text-white rounded-3xl p-7 sm:p-9 border border-brand-800 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-accent-400 text-xs font-bold tracking-wider uppercase">
                <Briefcase className="w-4 h-4" />
                <span>The ERE & AMS Group Heritage</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                15+ Years Track Record in Claims Risk & Investigation
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                The directors established <strong>ERE Management Services Private Limited in 2010</strong>, followed by <strong>Autocratic Management Services Private Limited in 2018</strong>, cultivating long-term trust, local law enforcement liaisoning, and verified investigative methodologies across Uttar Pradesh.
              </p>
            </div>

            <div className="bg-brand-900 p-5 rounded-2xl border border-brand-800 text-center shrink-0 w-full sm:w-auto">
              <div className="text-3xl font-black text-accent-400 font-heading">
                {COMPANY_INFO.annualRevenueScale.split(' ')[0]}
              </div>
              <div className="text-[11px] text-slate-200 font-semibold mt-1">
                Annual Scale (FY25)
              </div>
              <div className="text-[10px] text-emerald-400 mt-0.5 font-mono">
                Consistent Profitability
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

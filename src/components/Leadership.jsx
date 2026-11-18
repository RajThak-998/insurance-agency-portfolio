import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-24 bg-[#F1F5F9] dark:bg-[#0D1522] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <Users className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Corporate Governance & Direction</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experienced Direction. Seasoned Industry Leadership.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            With over 15 years of continuous leadership in Lucknow through sister concern ERE Management Services (2010) and Autocratic Management Services (2018), our directors guide every operational standard.
          </p>
        </div>

        {/* Directors Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {COMPANY_INFO.directors.map((director, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:border-amber-600/40 dark:hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded bg-[#0F2942] dark:bg-[#1E293B] text-amber-500 flex items-center justify-center font-mono font-bold text-base shadow-sm border border-slate-700">
                    {director.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {director.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                      {director.role}
                    </p>
                    <span className="inline-block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {director.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {director.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  MCA Verified Director
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-200 font-mono text-[11px]">
                  Aliganj, Lucknow
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Heritage & Stability Callout Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-amber-800 dark:text-amber-400 text-xs font-bold tracking-wider uppercase font-mono">
                <Briefcase className="w-3.5 h-3.5" />
                <span>The ERE & AMS Group Heritage</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                15+ Years Track Record in Claims Risk & Investigation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                The directors established <strong>ERE Management Services Private Limited in 2010</strong>, followed by <strong>Autocratic Management Services Private Limited in 2018</strong>, cultivating long-term trust, local law enforcement liaisoning, and verified investigative methodologies across Uttar Pradesh.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0D1522] p-4 rounded border border-slate-200 dark:border-slate-800 text-center shrink-0 w-full sm:w-auto">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 dark:text-amber-400 font-mono tabular-nums">
                {COMPANY_INFO.annualRevenueScale.split(' ')[0]}
              </div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 font-semibold mt-0.5">
                Annual Scale (FY25)
              </div>
              <div className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5 font-mono">
                Consistent Profitability
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

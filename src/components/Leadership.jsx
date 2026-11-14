import React from 'react';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Building, 
  Briefcase, 
  FileCheck2,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-800 text-xs font-semibold tracking-wider uppercase border border-blue-200">
            <Users className="w-3.5 h-3.5 text-accent-goldDark" />
            <span>Corporate Leadership & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-heading tracking-tight">
            Experienced Direction. Deep Industry Heritage.
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            With over 15 years of industry leadership in Lucknow through sister concern ERE Management Services (2010) and Autocratic Management Services (2018), our directors guide every operational standard.
          </p>
        </div>

        {/* Directors Profiles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_INFO.directors.map((director, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-900 to-brand-800 text-accent-gold flex items-center justify-center font-heading font-black text-xl shadow-md border border-slate-700">
                    {director.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-950 font-heading">
                      {director.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-accent-goldDark">
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

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  MCA Verified Director
                </span>
                <span className="font-semibold text-brand-900">Aliganj, Lucknow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Heritage & Stability Callout Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-accent-gold text-xs font-bold tracking-wide uppercase">
                <Briefcase className="w-4 h-4" />
                <span>The ERE & AMS Group Synergy</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                15+ Years Track Record in Claims Risk & Investigation
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                The directors established <strong>ERE Management Services Private Limited in 2010</strong>, followed by <strong>Autocratic Management Services Private Limited in 2018</strong>, cultivating long-term trust, local authority contacts, and verified investigative methodologies.
              </p>
            </div>

            <div className="bg-brand-900/90 p-4 rounded-xl border border-slate-800 text-center shrink-0 w-full sm:w-auto">
              <div className="text-2xl font-black text-accent-gold font-heading">
                {COMPANY_INFO.annualRevenueScale.split(' ')[0]}
              </div>
              <div className="text-[11px] text-slate-300 font-semibold">
                Annual Scale (FY25)
              </div>
              <div className="text-[10px] text-emerald-400 mt-0.5">
                Consistent Profitability
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

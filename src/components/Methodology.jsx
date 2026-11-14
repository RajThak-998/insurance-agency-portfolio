import React from 'react';
import { 
  GitCommit, 
  Clock, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { INVESTIGATION_PROCESS, SAMPLE_CASE_STUDIES } from '../data/companyData';

export default function Methodology() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <GitCommit className="w-3.5 h-3.5 text-accent-600" />
            <span>Evidentiary Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-950 font-heading tracking-tight">
            The 5-Stage Evidentiary Integrity Protocol
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            From initial claim mandate intake to final court-admissible dossier delivery, our structured process ensures zero blind spots and unbroken chain of custody.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INVESTIGATION_PROCESS.map((proc, idx) => (
            <div 
              key={proc.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-700/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-brand-950 group-hover:text-accent-600 transition-colors">
                    {proc.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-accent-600" />
                    {proc.time}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-brand-950 font-heading mb-2 leading-snug">
                  {proc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>IRDAI Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies / Fraud Detection Highlights */}
        <div id="cases" className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
              Claims Defensibility In Action
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 font-heading">
              Field Investigation Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Representative examples of how our boots-on-the-ground intelligence protects insurers from fabricated liabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_CASE_STUDIES.map((c, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded bg-brand-50 text-brand-900 font-semibold border border-brand-200">
                      {c.category}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{c.district}</span>
                  </div>

                  <h4 className="text-base font-bold text-brand-950 font-heading">
                    {c.title}
                  </h4>

                  <div className="text-xs space-y-2.5 text-slate-600">
                    <div>
                      <strong className="text-slate-900 block font-semibold">Reported Claim:</strong>
                      <p>{c.situation}</p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <strong className="text-brand-950 block font-semibold text-xs mb-1">
                        AMS Field Verification:
                      </strong>
                      <p className="text-slate-700">{c.findings}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Insurer Outcome:
                  </span>
                  <span className="font-semibold text-brand-950 text-right">
                    100% Repudiation Justified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

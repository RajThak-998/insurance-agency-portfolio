import React from 'react';
import { 
  GitCommit, 
  Clock, 
  CheckCircle,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { INVESTIGATION_PROCESS, SAMPLE_CASE_STUDIES } from '../data/companyData';

export default function Methodology() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#090D16] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <GitCommit className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Evidentiary Protocol</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The 5-Stage Evidentiary Integrity Protocol
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From initial claim mandate intake to final court-admissible dossier delivery, our structured process ensures zero blind spots and unbroken chain of custody.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INVESTIGATION_PROCESS.map((proc) => (
            <div 
              key={proc.step}
              className="bg-white dark:bg-[#111827] rounded p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-600/50 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors tabular-nums">
                    {proc.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-sm border border-slate-200 dark:border-slate-700 tabular-nums">
                    <Clock className="w-3 h-3 text-amber-700 dark:text-amber-500" />
                    {proc.time}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {proc.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              <div className="pt-3.5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>IRDAI Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Case Studies / Claims Defensibility In Action */}
        <div id="cases" className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 font-mono">
              Claims Defensibility In Action
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Representative Field Investigation Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Concrete examples of how ground intelligence in Uttar Pradesh unmasks fabricated liabilities and preserves underwriter loss ratios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SAMPLE_CASE_STUDIES.map((c, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-[#111827] rounded border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-[11px] border border-slate-200 dark:border-slate-700">
                      {c.category}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{c.district}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h4>

                  <div className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-medium">Claim Claimed:</strong>
                      <p className="mt-0.5">{c.situation}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 dark:text-white block font-medium">Field Findings:</strong>
                      <p className="mt-0.5">{c.findings}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1522] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b">
                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                    Financial & Evidentiary Result:
                  </div>
                  <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mt-0.5">
                    {c.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

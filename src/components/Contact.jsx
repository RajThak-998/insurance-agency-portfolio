import React from 'react';
import { Mail, Clock, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Contact({ onOpenTriageModal }) {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-[#090D16] border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, High-Impact CTA Strip */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0F3D30] to-[#0A2920] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/20 backdrop-blur-sm">
              CENTRAL OPERATIONS COMMAND
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Deploy a Claims Investigation Mandate?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Our central triage team allocates dedicated, vetted field investigators within 2-4 hours. All dossiers follow strict Indian Evidence Act chain-of-custody protocols.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenTriageModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#EA580C] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>Assign Mandate Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors text-center"
            >
              Email Operations Desk
            </a>
          </div>

        </div>

        {/* Corporate Desk Credential Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 text-xs text-slate-600 dark:text-slate-400">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1826] border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Official Mandate Email</span>
              <a href={`mailto:${COMPANY_INFO.contact.officialEmail}`} className="text-[#EA580C] font-mono hover:underline">
                {COMPANY_INFO.contact.officialEmail}
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1826] border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Corporate Hours</span>
              <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D1826] border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Emergency Response</span>
              <span>24/7 Catastrophe & MACT Triage Dispatch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

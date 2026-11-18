import React from 'react';
import { ShieldCheck, Building2, FileCheck2, Lock, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070D18] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-xs transition-colors duration-200">
      
      {/* Top Credential Strip */}
      <div className="border-b border-slate-100 dark:border-slate-800/80 py-6 bg-slate-50 dark:bg-[#0B1521]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">CIN Registered</div>
                <div className="text-[11px] font-mono">{COMPANY_INFO.cin}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">ROC Registration</div>
                <div className="text-[11px]">{COMPANY_INFO.roc}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">Field Scope</div>
                <div className="text-[11px]">120+ Vetted Investigators</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-emerald-300 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">Evidence Standard</div>
                <div className="text-[11px]">Indian Evidence Act Adherence</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-[#0F3D30] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
            AMS
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">
              {COMPANY_INFO.name}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Claims Verification & Risk Intelligence Firm • Incorporated Nov 15, 2018
            </div>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-[11px]">
          <span>© {new Date().getFullYear()} Autocratic Management Services Pvt. Ltd. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

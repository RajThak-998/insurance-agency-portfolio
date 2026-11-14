import React from 'react';
import { Building, ShieldCheck } from 'lucide-react';

export default function Partners() {
  const sampleInsurers = [
    { name: "ICICI Lombard", type: "General Insurance" },
    { name: "Bajaj Allianz", type: "General & Health" },
    { name: "Tata AIG", type: "General Insurance" },
    { name: "HDFC ERGO", type: "General Insurance" },
    { name: "Go Digit", type: "General Insurance" },
    { name: "SBI General", type: "General Insurance" },
    { name: "New India Assurance", type: "Public Sector General" },
    { name: "Star Health", type: "Health Insurance & TPA" },
    { name: "Universal Sompo", type: "General Insurance" },
    { name: "Royal Sundaram", type: "General Insurance" },
    { name: "Magma HDI", type: "General Insurance" },
    { name: "Chola MS", type: "Risk & General" },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">
            Carrier Compatibility
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
            Built for India’s Leading Insurers & TPAs
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Our reporting templates, evidence chain-of-custody, and investigative workflows integrate seamlessly with the claims management platforms of India’s top underwriters.
          </p>
        </div>

        {/* Insurers / Corporate Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {sampleInsurers.map((ins, i) => (
            <div 
              key={i} 
              className="bg-[#FAFAFC] hover:bg-white rounded-2xl p-4 border border-slate-200/90 hover:border-bronze-400/40 text-center shadow-card-subtle hover:shadow-luxury transition-all duration-200 flex flex-col items-center justify-center min-h-[96px] group"
            >
              <div className="w-8 h-8 rounded-xl bg-navy-100 text-navy-850 flex items-center justify-center mb-2.5 group-hover:bg-navy-950 group-hover:text-bronze-400 transition-colors">
                <Building className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-navy-950 transition-colors">
                {ins.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {ins.type}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            * Names listed reflect investigation compatibility with prevailing IRDAI claims SOPs. Corporate claims managers can request our institutional empanelment dossier directly.
          </p>
        </div>

      </div>
    </section>
  );
}

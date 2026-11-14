import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldCheck, 
  Building,
  Navigation,
  ArrowRight
} from 'lucide-react';
import { UP_REGIONS, ALL_75_DISTRICTS } from '../data/companyData';

export default function CoverageMap({ onOpenTriageModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter districts
  const filteredDistricts = ALL_75_DISTRICTS.filter(d => 
    d.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <section id="coverage" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            <Navigation className="w-3.5 h-3.5 text-bronze-600" />
            <span>Statewide Operational Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-950 font-heading tracking-tight">
            100% Pan-UP Reach Across All 75 Districts
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            From urban industrial belts to remote gram panchayats, our dedicated district field investigators ensure rapid on-site arrival without secondary sub-contracting or delays.
          </p>
        </div>

        {/* District Verification Search Box (Interactive Tool for Claims Managers) */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-[#FAFAFC] p-2.5 sm:p-3.5 rounded-2xl border border-slate-300/80 shadow-luxury">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />
              <input
                type="text"
                placeholder="Search any UP district (e.g., Lucknow, Sitapur, Gorakhpur, Agra, Varanasi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-28 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 font-medium text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-32 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  Clear
                </button>
              )}
              <span className="hidden sm:inline-block absolute right-3 px-3 py-1 rounded-lg bg-navy-950 text-bronze-400 text-xs font-mono font-bold">
                75 / 75 Active
              </span>
            </div>

            {/* Live Filter Results */}
            {searchQuery && (
              <div className="mt-3 p-4 bg-white rounded-xl border border-slate-200 max-h-56 overflow-y-auto">
                <div className="text-xs text-slate-500 font-semibold mb-2">
                  Matching Districts ({filteredDistricts.length} active nodes):
                </div>
                {filteredDistricts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredDistricts.map((district) => (
                      <div 
                        key={district} 
                        className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg text-xs font-semibold text-navy-950 border border-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{district}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-amber-700 p-2 bg-amber-50 rounded-lg">
                    No district matched "{searchQuery}". Note that AMS covers all 75 officially recognized districts of Uttar Pradesh.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Regional Hub Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UP_REGIONS.map((region, idx) => {
            const isHQ = idx === 0;
            return (
              <div 
                key={region.name}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isHQ 
                    ? 'bg-navy-950 text-white border-navy-850 shadow-luxury-dark' 
                    : 'bg-[#FAFAFC] text-slate-800 border-slate-200/90 hover:border-slate-300 shadow-card-subtle hover:shadow-luxury'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isHQ ? 'bg-bronze-500 text-navy-950' : 'bg-navy-100 text-navy-850'
                    }`}>
                      {isHQ ? 'Central Command HQ' : 'Regional Division'}
                    </span>
                    <span className={`text-xs font-mono font-semibold ${isHQ ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      {region.tat}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold font-heading ${isHQ ? 'text-white' : 'text-navy-950'}`}>
                    {region.name}
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${isHQ ? 'text-slate-300' : 'text-slate-500'}`}>
                    Primary Hubs: {region.hub}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200/20 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Core District Nodes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.districts.slice(0, 6).map((d) => (
                        <span 
                          key={d} 
                          className={`text-[11px] px-2 py-0.5 rounded ${
                            isHQ 
                              ? 'bg-navy-900 text-slate-200 border border-white/10' 
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {d}
                        </span>
                      ))}
                      {region.districts.length > 6 && (
                        <span className={`text-[11px] px-2 py-0.5 rounded font-mono font-semibold ${isHQ ? 'text-bronze-400' : 'text-navy-800'}`}>
                          +{region.districts.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t ${isHQ ? 'border-white/10' : 'border-slate-200/60'} flex items-center justify-between text-xs`}>
                  <div className="flex items-center gap-1.5">
                    <Users className={`w-3.5 h-3.5 ${isHQ ? 'text-bronze-400' : 'text-navy-800'}`} />
                    <span className={isHQ ? 'text-slate-300' : 'text-slate-600'}>{region.officers}</span>
                  </div>
                  <span className={`font-semibold ${isHQ ? 'text-bronze-400' : 'text-navy-950'}`}>Active Field SLA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Command Callout Strip */}
        <div className="mt-14 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl border border-white/10 p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury-dark">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-bronze-400 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-heading">
                Centrally Coordinated from Aliganj, Lucknow
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                Every district inquiry is triage-scored, audited, and reviewed at our corporate operations headquarters in Aliganj, Lucknow, guaranteeing uniform evidentiary standards and unified digital MIS reporting for insurer panels.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTriageModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
          >
            Assign Statewide Claim
          </button>
        </div>

      </div>
    </section>
  );
}

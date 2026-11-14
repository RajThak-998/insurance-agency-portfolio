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
  Check
} from 'lucide-react';
import { UP_REGIONS, ALL_75_DISTRICTS } from '../data/companyData';

export default function CoverageMap({ onOpenTriageModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(UP_REGIONS[0]);

  // Filter districts
  const filteredDistricts = ALL_75_DISTRICTS.filter(d => 
    d.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <section id="coverage" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wider uppercase border border-emerald-200">
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            <span>Statewide Operational Footprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 font-heading tracking-tight">
            100% Pan-UP Coverage Across All 75 Districts
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            From urban metropolitan centers to remote gram panchayats, our dedicated district field investigators ensure rapid on-site arrival without delays or secondary sub-contracting.
          </p>
        </div>

        {/* District Verification Search Box (Interactive Tool for Claims Managers) */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-300 shadow-soft">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Verify district coverage (e.g., Lucknow, Sitapur, Gorakhpur, Agra, Varanasi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-24 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-28 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
              <span className="hidden sm:inline-block absolute right-3 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                75 / 75 Active
              </span>
            </div>

            {/* Live Filter Results */}
            {searchQuery && (
              <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200 max-h-52 overflow-y-auto">
                <div className="text-xs text-slate-500 font-medium mb-2">
                  Matching Districts ({filteredDistricts.length} found):
                </div>
                {filteredDistricts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filteredDistricts.map((district) => (
                      <div 
                        key={district} 
                        className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg text-xs font-semibold text-brand-900 border border-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{district}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-amber-700 p-2 bg-amber-50 rounded-lg">
                    No district matched "{searchQuery}". Note that AMSPL covers all 75 officially recognized districts of Uttar Pradesh.
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
                    ? 'bg-gradient-to-b from-brand-900 to-brand-950 text-white border-brand-800 shadow-elevated' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 shadow-soft hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isHQ ? 'bg-accent-gold text-brand-950' : 'bg-blue-100 text-brand-800'
                    }`}>
                      {isHQ ? 'Central Command HQ' : 'Regional Wing'}
                    </span>
                    <span className={`text-xs font-semibold ${isHQ ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      {region.tat}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold font-heading ${isHQ ? 'text-white' : 'text-brand-950'}`}>
                    {region.name}
                  </h3>
                  <p className={`text-xs font-medium mt-0.5 ${isHQ ? 'text-slate-300' : 'text-slate-500'}`}>
                    Major Hubs: {region.hub}
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
                              ? 'bg-brand-800/80 text-slate-200 border border-slate-700' 
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {d}
                        </span>
                      ))}
                      {region.districts.length > 6 && (
                        <span className={`text-[11px] px-2 py-0.5 rounded ${isHQ ? 'text-accent-gold' : 'text-brand-600 font-semibold'}`}>
                          +{region.districts.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t ${isHQ ? 'border-slate-800' : 'border-slate-100'} flex items-center justify-between text-xs`}>
                  <div className="flex items-center gap-1.5">
                    <Users className={`w-3.5 h-3.5 ${isHQ ? 'text-accent-gold' : 'text-brand-600'}`} />
                    <span className={isHQ ? 'text-slate-300' : 'text-slate-600'}>{region.officers}</span>
                  </div>
                  <span className={`font-semibold ${isHQ ? 'text-accent-gold' : 'text-brand-700'}`}>Active Field SLA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Command Callout Strip */}
        <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-900 text-accent-gold flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-950 font-heading">
                Centrally Coordinated from Aliganj, Lucknow
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Every district case is routed, triage-scored, and quality-vetted at our corporate operations center in Aliganj, Lucknow, guaranteeing consistent evidentiary standards and unified MIS reporting.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTriageModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            Assign Statewide Claim
          </button>
        </div>

      </div>
    </section>
  );
}

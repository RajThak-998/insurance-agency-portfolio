import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Navigation,
  X
} from 'lucide-react';
import { UP_REGIONS, ALL_75_DISTRICTS } from '../data/companyData';

export default function CoverageMap({ onOpenTriageModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter districts
  const filteredDistricts = ALL_75_DISTRICTS.filter(d => 
    d.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <section id="coverage" className="py-20 lg:py-24 bg-[#F1F5F9] dark:bg-[#0D1522] relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-slate-700">
            <Navigation className="w-3.5 h-3.5 text-amber-700 dark:text-amber-500" />
            <span>Statewide Operational Matrix</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            100% Pan-UP Reach Across All 75 Districts
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From urban commercial hubs to remote tehsils, our dedicated field investigators ensure swift on-site presence without secondary sub-contracting or delays.
          </p>
        </div>

        {/* Refined District Verification Search Box (Zero clipping/overlap) */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="bg-white dark:bg-[#111827] p-2.5 sm:p-3 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search any UP district (e.g. Lucknow, Sitapur, Gorakhpur, Agra)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-36 py-2.5 bg-slate-50 dark:bg-[#0D1522] rounded border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-600 font-medium text-slate-900 dark:text-white placeholder-slate-400"
              />
              <div className="absolute right-2 flex items-center gap-1.5">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-sm bg-slate-200 dark:bg-[#1E293B] text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold tabular-nums">
                  75 / 75 Active
                </span>
              </div>
            </div>

            {/* Live Filter Results */}
            {searchQuery && (
              <div className="mt-3 p-3 bg-slate-50 dark:bg-[#0D1522] rounded border border-slate-200 dark:border-slate-800 max-h-56 overflow-y-auto">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center justify-between">
                  <span>Matching Districts ({filteredDistricts.length} active nodes):</span>
                  <span className="font-mono text-[10px] text-amber-800 dark:text-amber-400">100% Verified Presence</span>
                </div>
                {filteredDistricts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {filteredDistricts.map((district) => (
                      <div 
                        key={district} 
                        className="flex items-center gap-1.5 p-2 bg-white dark:bg-[#111827] rounded text-xs font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="truncate">{district}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-amber-800 dark:text-amber-400 p-2 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-900/50">
                    No district matched "{searchQuery}". Note: Autocratic Management Services covers all 75 officially recognized revenue districts of Uttar Pradesh.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 4 Regional Division Cards (Consistent height & no artificial blacking-out) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {UP_REGIONS.map((region, idx) => {
            const isHQ = idx === 0;
            return (
              <div 
                key={region.name}
                className="bg-white dark:bg-[#111827] rounded p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-600/50 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm font-mono ${
                      isHQ 
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-700/60' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}>
                      {isHQ ? 'HQ Central Hub' : 'Regional Hub'}
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
                      {region.tat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {region.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Primary Hubs: {region.hub}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Sample District Nodes:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {region.districts.slice(0, 6).map((d) => (
                        <span 
                          key={d} 
                          className="text-[10px] px-2 py-0.5 rounded-sm bg-slate-50 dark:bg-[#0D1522] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {d}
                        </span>
                      ))}
                      {region.districts.length > 6 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-amber-500/10 text-amber-800 dark:text-amber-400 font-mono tabular-nums border border-amber-600/20">
                          +{region.districts.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-mono text-[11px] tabular-nums font-semibold text-slate-800 dark:text-slate-200">
                    {region.officers}
                  </span>
                  <button
                    onClick={onOpenTriageModal}
                    className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 hover:underline"
                  >
                    Triage District →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

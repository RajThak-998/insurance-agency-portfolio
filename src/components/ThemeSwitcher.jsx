import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const THEMES = [
  {
    id: 'navy',
    name: 'Sovereign Navy & Cognac',
    subtitle: 'Classic Institutional Maritime & Banking',
    primaryColor: '#0B1E36',
    accentColor: '#E07E24',
    tag: 'Institutional'
  },
  {
    id: 'forest',
    name: 'British Forest & Copper',
    subtitle: 'Charterhouse Style Heritage Risk House',
    primaryColor: '#0A2920',
    accentColor: '#D96B27',
    tag: 'Heritage Risk'
  },
  {
    id: 'obsidian',
    name: 'Obsidian & Royal Sapphire',
    subtitle: 'Visus Style Forensic Intelligence',
    primaryColor: '#0D1624',
    accentColor: '#2563EB',
    tag: 'Forensics & Tech'
  },
  {
    id: 'bordeaux',
    name: 'Imperial Bordeaux & Gold',
    subtitle: 'Legal Authority & Tribunal Defense',
    primaryColor: '#220810',
    accentColor: '#D4AF37',
    tag: 'Legal Authority'
  }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('navy');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ams_theme') || 'navy';
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('ams_theme', themeId);
  };

  const activeThemeObj = THEMES.find(t => t.id === currentTheme) || THEMES[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Pill Button */}
      <div className="relative">
        {isOpen ? (
          /* Expanded Theme Selection Menu Card */
          <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/90 w-80 sm:w-96 animate-fadeIn text-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-brand-900 text-accent-400 flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-950">
                    Live Palette Switcher
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    Select a theme to preview the site live
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Theme Options List */}
            <div className="mt-3.5 space-y-2.5">
              {THEMES.map((theme) => {
                const isSelected = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme.id)}
                    className={`w-full p-3 rounded-2xl text-left border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'border-brand-900 ring-2 ring-brand-900/15 bg-slate-50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Swatch Pair */}
                      <div className="flex items-center -space-x-1 shrink-0">
                        <span
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm inline-block"
                          style={{ backgroundColor: theme.primaryColor }}
                        />
                        <span
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm inline-block"
                          style={{ backgroundColor: theme.accentColor }}
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs text-brand-950 truncate">
                            {theme.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate">
                          {theme.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 ml-2">
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase">
                        {theme.tag}
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                Active: <strong className="text-brand-950 ml-0.5">{activeThemeObj.name}</strong>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-brand-900 hover:underline"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Floating Compact Trigger Pill */
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-950 text-white shadow-2xl hover:shadow-xl border border-white/20 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="flex items-center -space-x-1">
              <span
                className="w-4 h-4 rounded-full border border-white/60 inline-block"
                style={{ backgroundColor: activeThemeObj.primaryColor }}
              />
              <span
                className="w-4 h-4 rounded-full border border-white/60 inline-block"
                style={{ backgroundColor: activeThemeObj.accentColor }}
              />
            </div>

            <span className="text-xs font-bold tracking-wide">
              Explore Colors
            </span>

            <ChevronUp className="w-4 h-4 text-accent-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}

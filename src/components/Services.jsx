import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  CheckCircle2, 
  Check,
  Car, 
  HeartPulse, 
  Building2, 
  KeyRound 
} from 'lucide-react';

const VERTICAL_SERVICES = [
  {
    id: 'motor',
    number: '01',
    title: 'Motor & Collision Forensics',
    category: 'OD, TP & MACT DEFENSE',
    icon: Car,
    image: '/images/ams-clean-motor.webp',
    accentColor: '#10B981',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500',
    subtitle: 'On-scene 3D laser accident reconstruction, impact dynamics, and staged collision detection.',
    deliverables: [
      '3D Laser Skid Telemetry & Impact Geometry',
      'MACT Tribunal Court-Defensible Evidentiary Dossiers',
      'Vehicle Damage Mismatch & RTO Corroboration'
    ]
  },
  {
    id: 'health',
    number: '02',
    title: 'Healthcare & Mediclaim Scrutiny',
    category: 'CLINICAL INTEGRITY AUDIT',
    icon: HeartPulse,
    image: '/images/ams-clean-health.webp',
    accentColor: '#EA580C',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-[#EA580C]',
    subtitle: 'Hospital IPD register verification, bedside patient audits, and clinical fraud prevention.',
    deliverables: [
      'Bedside Patient Physical Verification',
      'Treating Doctor Interviews & Pathology Corroboration',
      'Phantom Hospitalization & Billing Inflation Checks'
    ]
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial Asset & Arson Surveys',
    category: 'HIGH-QUANTUM LOSS AUDIT',
    icon: Building2,
    image: '/images/ams-clean-commercial.webp',
    accentColor: '#14B8A6',
    accentBg: 'bg-teal-500/10',
    accentBorder: 'border-teal-500',
    subtitle: 'High-quantum logistics audits, industrial fire origin analysis, and stock reconciliation.',
    deliverables: [
      'High-Quantum Stock Count vs Accounting Filings',
      'Industrial Fire Origin Analysis & Burn Patterns',
      'Pre-Insurance Physical Asset Risk Mitigation'
    ]
  },
  {
    id: 'fraud',
    number: '04',
    title: 'Theft Forensics & Anti-Fraud',
    category: 'OPTICAL LAB DIAGNOSTICS',
    icon: KeyRound,
    image: '/images/ams-clean-fraud.webp',
    accentColor: '#F59E0B',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500',
    subtitle: 'Optical key metallurgy diagnostics, duplicate key examination, and FIR corroboration.',
    deliverables: [
      'Precision Key Metallurgy & Cut Diagnostics',
      'Lock Tumbler & Electronic Trace Analysis',
      'Police FIR, NCR & Untraced Report Scrutiny'
    ]
  }
];

const LIFECYCLE_STAGES = [
  {
    id: 'triage',
    number: '01',
    stageLabel: 'STAGE 1',
    name: 'Triage & Scene Response',
    shortTitle: 'Sub-24h Dispatch',
    image: '/images/ams-stage-triage.webp',
    accentColor: '#0F3D30',
    activeBg: 'bg-[#F2F8F5] dark:bg-[#0D241C]',
    activeBorder: 'border-emerald-600 dark:border-emerald-500',
    headline: 'Immediate On-Ground Scene Response',
    description: 'Rapid deployment within 2-4 hours for physical scene recreation, laser measurement, and time-stamped digital photographic telemetry.',
    solutions: [
      'Accident Scene Physical Reconstruction & Laser Geometry',
      'Hospital Bedside IPD Verification & Doctor Corroboration',
      'Commercial Property & Industrial Fire Origin Isolation'
    ]
  },
  {
    id: 'audit',
    number: '02',
    stageLabel: 'STAGE 2',
    name: 'Forensic Audit & Scrutiny',
    shortTitle: 'Lab Corroboration',
    image: '/images/ams-stage-forensic.webp',
    accentColor: '#EA580C',
    activeBg: 'bg-[#FFF9F5] dark:bg-[#25150B]',
    activeBorder: 'border-[#EA580C] dark:border-[#EA580C]',
    headline: 'Multi-Layered Corroboration & Lab Diagnostics',
    description: 'Cross-verifying claimed physical damage against manufacturer specifications, pathology databases, official police records, and financial books.',
    solutions: [
      'Optical Key Metallurgy & Tumbler Lab Diagnostics',
      'Clinical Pathology Audits & Phantom Billing Elimination',
      'High-Quantum Inventory Reconciliation vs Accounting Filings'
    ]
  },
  {
    id: 'dossier',
    number: '03',
    stageLabel: 'STAGE 3',
    name: 'Court-Defensible Dossier',
    shortTitle: 'Evidence Act Standard',
    image: '/images/ams-stage-dossier.webp',
    accentColor: '#144E3E',
    activeBg: 'bg-[#F0F7F5] dark:bg-[#0A221C]',
    activeBorder: 'border-teal-600 dark:border-teal-500',
    headline: 'Audit-Ready Evidentiary Defense',
    description: 'Standardized evidentiary dossiers prepared strictly under Indian Evidence Act protocols, with unbroken chain-of-custody for underwriting repudiation.',
    solutions: [
      'MACT Legal Evidentiary Defense Dossiers',
      'Unbroken Chain-of-Custody Digital Telemetry',
      'Underwriting Repudiation & Loss Ratio Protection'
    ]
  }
];

export default function Services({ onOpenTriageModal }) {
  const [currentServiceIdx, setCurrentServiceIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const serviceTimerRef = useRef(null);

  const [activeStageIdx, setActiveStageIdx] = useState(1); // Default to Stage 2 as in reference mockup
  const activeStage = LIFECYCLE_STAGES[activeStageIdx];

  const nextService = () => {
    setCurrentServiceIdx((prev) => (prev + 1) % VERTICAL_SERVICES.length);
  };

  const prevService = () => {
    setCurrentServiceIdx((prev) => (prev - 1 + VERTICAL_SERVICES.length) % VERTICAL_SERVICES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      serviceTimerRef.current = setInterval(() => {
        nextService();
      }, 5500);
    }
    return () => {
      if (serviceTimerRef.current) clearInterval(serviceTimerRef.current);
    };
  }, [isPaused, currentServiceIdx]);

  const activeService = VERTICAL_SERVICES[currentServiceIdx];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-[#090D16] border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Investigation Verticals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Specialized Claims Verification Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Court-defensible forensic investigation across four core risk verticals.
            </p>
          </div>

          {/* Carousel Arrow Controls & Quick Selector Tabs */}
          <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap sm:flex-nowrap">
            {/* Quick Service Category Tabs (Desktop / Tablet) */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 dark:bg-[#0D1826] p-1 rounded-lg border border-slate-200/80 dark:border-slate-800">
              {VERTICAL_SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentServiceIdx(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                    idx === currentServiceIdx
                      ? 'bg-white dark:bg-[#152336] text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {s.number} {s.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Counter & Arrows - Guaranteed Single Line */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-xs font-bold text-slate-500 mr-1 whitespace-nowrap shrink-0">
                0{currentServiceIdx + 1} / 0{VERTICAL_SERVICES.length}
              </span>
              <button
                onClick={prevService}
                className="p-2.5 rounded-md bg-white dark:bg-[#0D1826] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#EA580C] hover:border-[#EA580C] shadow-xs transition-colors shrink-0"
                aria-label="Previous service vertical"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextService}
                className="p-2.5 rounded-md bg-white dark:bg-[#0D1826] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#EA580C] hover:border-[#EA580C] shadow-xs transition-colors shrink-0"
                aria-label="Next service vertical"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Full-Visual Swiping Service Showcase (One Service at a Time like Track Record) */}
        <div 
          className="relative rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] shadow-2xl flex items-end select-none group border border-slate-200/90 dark:border-slate-800 bg-slate-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images with Crossfade */}
          {VERTICAL_SERVICES.map((item, idx) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out pointer-events-none ${
                idx === currentServiceIdx ? 'opacity-100 z-0 scale-100' : 'opacity-0 -z-10 scale-105'
              }`}
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundPosition: 'center 40%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}

          {/* Directional Scrim for High-Contrast Text Legibility */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: `linear-gradient(90deg, rgba(6, 11, 20, 0.95) 0%, rgba(6, 11, 20, 0.85) 45%, rgba(6, 11, 20, 0.50) 75%, rgba(6, 11, 20, 0.20) 100%)`
            }}
          />

          {/* Left Signature Accent Strip */}
          <div 
            className="absolute inset-y-0 left-0 w-3 transition-colors duration-500 z-[2]"
            style={{ backgroundColor: activeService.accentColor }}
          />

          {/* Content Pane */}
          <div className="relative z-10 p-6 sm:p-12 text-white max-w-3xl space-y-5">
            
            {/* Kicker Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-slate-400">
                VERTICAL {activeService.number}
              </span>
              <div 
                className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: `${activeService.accentColor}30`, border: `1px solid ${activeService.accentColor}60` }}
              >
                <ActiveIcon className="w-4 h-4" style={{ color: activeService.accentColor }} />
              </div>
              <span 
                className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/60 text-white/90 border border-white/10"
              >
                {activeService.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {activeService.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
              {activeService.subtitle}
            </p>

            {/* Core Deliverables Checkmarks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
              {activeService.deliverables.map((item, dIdx) => (
                <div 
                  key={dIdx} 
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-100 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: activeService.accentColor }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenTriageModal}
                className="px-6 py-3 rounded-md text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:brightness-110 active:scale-[0.99] flex items-center gap-2"
                style={{ backgroundColor: activeService.accentColor }}
              >
                <span>Assign Mandate for Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Top-Right Pagination Dots */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5">
            {VERTICAL_SERVICES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentServiceIdx(idx)}
                className={`transition-all rounded-full ${
                  idx === currentServiceIdx
                    ? 'w-8 h-2'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                style={{
                  backgroundColor: idx === currentServiceIdx ? activeService.accentColor : undefined
                }}
                aria-label={`Go to service vertical ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* 2. Visual Step Timeline / Process Stepper ("AMS Delivers" Lifecycle - User Mockup Theme) */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AMS Delivers Across Every Stage of the Claims & Risk Lifecycle
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Integrated forensic verification and court-defensible dossiers delivered across the claims continuum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left: Vertical Step Timeline with Cards (3 Stages) */}
            <div className="lg:col-span-6 relative pl-8 sm:pl-10 space-y-4">
              
              {/* Stepper Timeline Vertical Guide Line */}
              <div className="absolute left-3 sm:left-4 top-5 bottom-8 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-700 pointer-events-none" />

              {LIFECYCLE_STAGES.map((stage, idx) => {
                const isActive = activeStageIdx === idx;
                const isCompleted = idx < activeStageIdx;

                return (
                  <div key={stage.id} className="relative flex items-start gap-4 sm:gap-6 group">
                    
                    {/* Stepper Node Indicator */}
                    <div className="absolute -left-8 sm:-left-10 top-4 z-10 flex items-center">
                      {isCompleted ? (
                        <div 
                          onClick={() => setActiveStageIdx(idx)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0F3D30] dark:bg-emerald-600 text-white flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
                          title={`Completed: ${stage.name}`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : isActive ? (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#EA580C] bg-white dark:bg-[#090D16] flex items-center justify-center shadow-md">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                        </div>
                      ) : (
                        <div 
                          onClick={() => setActiveStageIdx(idx)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-400 dark:bg-slate-700 text-white flex items-center justify-center shadow-xs cursor-pointer hover:bg-slate-500 transition-colors"
                          title={`Select: ${stage.name}`}
                        >
                          <span className="text-[10px] font-mono font-bold">0{idx + 1}</span>
                        </div>
                      )}
                    </div>

                    {/* Stage Card */}
                    {isActive ? (
                      /* Active Stage Card: Highlighted Border, Background & Photo Preview */
                      <div 
                        onClick={() => setActiveStageIdx(idx)}
                        className="flex-1 cursor-pointer rounded-2xl p-4 sm:p-5 border-2 border-[#EA580C] bg-[#FFFBF7] dark:bg-[#131D28] shadow-lg transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                            {stage.stageLabel}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#EA580C]/20">
                            Active Stage
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug mt-1">
                          {stage.name}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          ({stage.shortTitle})
                        </span>

                        {/* High-Resolution Bespoke Stage Photographic Image */}
                        <div className="mt-3.5 rounded-xl overflow-hidden h-36 sm:h-44 w-full shadow-inner border border-slate-200/80 dark:border-slate-800">
                          <img 
                            src={stage.image} 
                            alt={stage.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Inactive Stage Card: Compact, Dark Institutional Aesthetic with Thumbnail */
                      <div 
                        onClick={() => setActiveStageIdx(idx)}
                        className="flex-1 cursor-pointer rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 bg-slate-900 text-white hover:bg-slate-800/95 transition-all shadow-md group flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            {stage.stageLabel}
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                            {stage.name}
                          </h4>
                          <span className="text-xs text-slate-400 font-medium">
                            ({stage.shortTitle})
                          </span>
                        </div>

                        {/* Compact thumbnail preview on inactive card */}
                        <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                          <img 
                            src={stage.image} 
                            alt={stage.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}

            </div>

            {/* Right: Detailed Presentation Card (Mockup Style) */}
            <div className="lg:col-span-6 bg-white dark:bg-[#0E1726] rounded-2xl p-6 sm:p-8 lg:p-9 shadow-xl border border-slate-200/90 dark:border-slate-800 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Active Stage Header with Accent Bar */}
                <div 
                  className="pl-4 border-l-4 space-y-2 transition-all duration-300"
                  style={{ borderColor: activeStage.accentColor }}
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                    STAGE {activeStage.number} • {activeStage.name.toUpperCase()}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {activeStage.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {activeStage.description}
                  </p>
                </div>

                {/* Deliverables Section with Numbered Badges */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    CORE DELIVERABLES
                  </div>

                  <div className="space-y-2.5">
                    {activeStage.solutions.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={onOpenTriageModal}
                        className="group cursor-pointer p-3 sm:p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/90 dark:bg-slate-900/70 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#EA580C] dark:hover:border-[#EA580C] transition-all flex items-center justify-between shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-[#EA580C] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/20">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#EA580C] transition-colors">
                            {item}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#EA580C] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenTriageModal}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#D97706] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>Assign Case for this Stage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
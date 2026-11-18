import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  ArrowRight
} from 'lucide-react';

const TRACK_RECORDS = [
  {
    id: 'case-arson',
    image: '/images/ams-slide-commercial.webp',
    title: 'High-Quantum Warehouse Stock Reconciliation & Loss Mitigation',
    desc: 'Physical inventory audit uncovered discrepancies between physical charred stock counts and claimed balance sheet ledgers, protecting the insurer from fabricated catastrophic loss.',
  },
  {
    id: 'case-collision',
    image: '/images/ams-slide-motor.webp',
    title: 'Court-Defensible Collision Scene Reconstruction & MACT Defense',
    desc: 'On-scene laser telemetry, point-of-impact analysis, and RTO vehicle registration corroboration creating unbroken chain of custody under the Indian Evidence Act.',
  },
  {
    id: 'case-hospital',
    image: '/images/ams-slide-hospital.webp',
    title: 'Bedside Patient Scrutiny & Phantom Billing Detection',
    desc: 'Surprise bedside IPD verification, admission register audits, and treating doctor cross-examination eliminating inflated pharmacy bills for health underwriters.',
  },
  {
    id: 'case-key',
    image: '/images/ams-service-fraud.webp',
    title: 'Duplicate Key Metallurgy & Staged Theft Diagnostics',
    desc: 'High-precision optical lab analysis of key tumblers unmasked duplicate cuts and organized theft rackets, resulting in clean claims repudiation.',
  },
  {
    id: 'case-command',
    image: '/images/ams-about-consultation.webp',
    title: 'Trusted by Premier Life, Health & General Underwriters',
    desc: 'Centralized operations directing full-time internal investigators with zero sub-contracting and court-defensible evidentiary dossiers.',
  }
];

export default function TrackRecord({ onOpenTriageModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TRACK_RECORDS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TRACK_RECORDS.length) % TRACK_RECORDS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const active = TRACK_RECORDS[currentSlide];

  return (
    <section id="track-record" className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070D18] border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0F3D30] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Investigative Milestones & Quantifiable Impact
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-500 mr-2">
              0{currentSlide + 1} / 0{TRACK_RECORDS.length}
            </span>
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-md bg-white dark:bg-[#0D1826] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#EA580C] hover:border-[#EA580C] shadow-sm transition-colors"
              aria-label="Previous case milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-md bg-white dark:bg-[#0D1826] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#EA580C] hover:border-[#EA580C] shadow-sm transition-colors"
              aria-label="Next case milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Full-Visual Swiping Showcase Card (Clean, No Badges On Top of Image) */}
        <div 
          className="relative rounded-2xl overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] shadow-xl flex items-end select-none group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images with Crossfade */}
          {TRACK_RECORDS.map((item, idx) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
                idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundPosition: 'center 40%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}

          {/* Dark Scrim for High-Contrast Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-[1]" />

          {/* Clean Content Pane (Badges Removed as Requested) */}
          <div className="relative z-10 p-6 sm:p-12 text-white max-w-3xl space-y-4">
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {active.title}
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
              {active.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenTriageModal}
                className="px-6 py-3 rounded-md bg-[#EA580C] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Case Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Top-Right Pagination Dots */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5">
            {TRACK_RECORDS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full ${
                  idx === currentSlide
                    ? 'w-6 h-2 bg-[#EA580C]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

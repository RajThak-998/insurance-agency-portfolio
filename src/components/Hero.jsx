import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 'motor-forensics',
    image: '/images/ams-slide-motor.webp',
    kicker: 'Insurance Investigation & Forensic Reconstruction',
    title: 'Comprehensive Claims Forensics & Risk Mitigation',
    subtitle: 'Protecting insurer loss ratios with dedicated on-ground field verification and evidentiary reconstruction.',
  },
  {
    id: 'hospital-audit',
    image: '/images/ams-slide-hospital.webp',
    kicker: 'Health Insurance & Mediclaim Fraud Scrutiny',
    title: 'Hospital IPD Scrutiny & Phantom Billing Audits',
    subtitle: 'Inpatient register audits, bedside patient verification, and treating doctor cross-examination.',
  },
  {
    id: 'commercial-property',
    image: '/images/ams-slide-commercial.webp',
    kicker: 'Commercial Property & Arson Investigation',
    title: 'Commercial Asset, Fire & Stock Loss Surveys',
    subtitle: 'High-quantum warehouse stock reconciliation, industrial loss analysis, and physical inventory audits.',
  },
  {
    id: 'command-hub',
    image: '/images/ams-slide-command.webp',
    kicker: 'Operational Command & Field Network',
    title: 'Ground-Truth Claims Intelligence & Scaled Reach',
    subtitle: 'Centralized operations command coordinating vetted on-ground investigators with zero sub-contracting.',
  }
];

const METRIC_CARDS = [
  {
    number: '120+',
    label: 'Vetted Investigators',
    sub: 'Dedicated On-Ground Network',
  },
  {
    number: '24–48h',
    label: 'Rapid Turnaround',
    sub: 'Sub-24h Priority Scene Response',
  },
  {
    number: '₹93.4L',
    label: 'Annual Scale',
    sub: 'FY25 Casework Volume & Run-Rate',
  },
  {
    number: '15+',
    label: 'Years Experience',
    sub: 'Group Leadership Roots (ERE 2010)',
  }
];

export default function Hero({ onOpenTriageModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const active = SLIDES[currentSlide];

  return (
    <section className="w-full bg-white dark:bg-[#090D16] pt-4 sm:pt-6 pb-12 sm:pb-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Charterhouse-Style Visual Banner Slider (Deep Emerald & White Harmony) */}
        <div 
          className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-2xl overflow-hidden flex items-center justify-between shadow-lg select-none group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images Layer */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
                idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: 'center 40%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}

          {/* Deep Forest Emerald / Pine Teal Scrim (NOT Navy Blue!) */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: `
                linear-gradient(135deg, rgba(12, 48, 36, 0.94) 0%, rgba(14, 58, 44, 0.88) 55%, rgba(18, 72, 55, 0.68) 100%),
                linear-gradient(180deg, rgba(12, 48, 36, 0.3) 0%, rgba(12, 48, 36, 0.9) 100%)
              `
            }}
          />

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="relative z-20 ml-3 sm:ml-6 p-2 sm:p-2.5 rounded-full bg-black/25 hover:bg-black/50 text-white/80 hover:text-white backdrop-blur-sm transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Text Content: Pure, Minimal, High-Impact */}
          <div className="relative z-10 max-w-2xl px-4 sm:px-6 py-10 sm:py-14 text-white text-left flex-1 space-y-4">
            
            {/* Minimal Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-amber-300 font-mono">
                {active.kicker}
              </span>
            </div>

            {/* Authoritative, Punchy H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {active.title}
            </h1>

            {/* Concise 1-Line Description */}
            <p className="text-sm sm:text-base md:text-lg text-emerald-50/90 font-normal leading-relaxed max-w-xl">
              {active.subtitle}
            </p>

            {/* Clean Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTriageModal}
                className="px-6 py-3 rounded-md bg-[#EA580C] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.99] flex items-center gap-2"
              >
                <span>Assign Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
              >
                Explore Services
              </a>
            </div>

          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="relative z-20 mr-3 sm:ml-6 p-2 sm:p-2.5 rounded-full bg-black/25 hover:bg-black/50 text-white/80 hover:text-white backdrop-blur-sm transition-all focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Minimal Bottom Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {SLIDES.map((_, idx) => (
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

        {/* 2. Charterhouse-Style Prominent Elevated White Number Cards on Light Canvas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10">
          {METRIC_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0D1826] rounded-xl p-5 sm:p-6 text-center border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EA580C] font-mono tracking-tight tabular-nums">
                {card.number}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mt-2">
                {card.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">
                {card.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

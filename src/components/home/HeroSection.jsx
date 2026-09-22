import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../../assest/hero-section.mp4';

export default function HeroSection({ onOpenEnquiry }) {
  return (
    <section className="relative min-h-[44vh] sm:min-h-[60vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
      {/* Full-Banner Background Video in Loop without controls */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-105 sm:scale-100 transition-transform duration-700"
      />

      {/* Clean Tint Overlay - Balanced so animation is clearly visible on mobile */}
      <div className="absolute inset-0 bg-navy-950/65 sm:bg-navy-950/80 z-10 backdrop-blur-[0.5px]"></div>

      {/* Centered Neat & Compact Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 text-center space-y-3 sm:space-y-6">
        {/* Minimal Trust Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-pharma-300 text-[11px] sm:text-xs font-semibold font-heading tracking-wide shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
          <span>WHO-GMP & ISO 9001:2015 CERTIFIED</span>
        </div>

        {/* Crisp Headline */}
        <h1 className="font-heading font-extrabold text-xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white max-w-4xl mx-auto drop-shadow-sm">
          Pioneering Formulations, <br className="hidden xs:inline sm:inline" />
          <span className="text-pharma-400">Elevating Healthcare.</span>
        </h1>

        {/* Minimal Clean Tagline */}
        <p className="text-slate-200 text-xs sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto font-body drop-shadow-xs px-2">
          Delivering high-purity pharmaceutical formulations and reliable PCD franchise solutions across India.
        </p>

        {/* Clean Compact Action Buttons (Side-by-side on mobile) */}
        <div className="pt-1 sm:pt-3 flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-4 w-full mx-auto">
          <Link 
            to="/products"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-pharma-600 hover:bg-pharma-700 transition font-heading shadow-soft-sm shrink-0"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>

          <button 
            onClick={() => onOpenEnquiry(null, "PCD Franchise")}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition hover:text-white font-heading shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400" />
            <span>Franchise Enquiry</span>
          </button>
        </div>
      </div>
    </section>
  );
}




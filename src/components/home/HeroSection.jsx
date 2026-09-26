import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../../assest/hero-section.mp4';

export default function HeroSection({ onOpenEnquiry }) {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
      {/* Full-Banner Background Video in Loop */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-100 transition-transform duration-700"
      />

      {/* Crystal Clear Balanced Tint Overlay so video animation is rich and vibrant */}
      <div className="absolute inset-0 bg-navy-950/50 sm:bg-navy-950/55 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-28 text-center space-y-3.5 sm:space-y-6">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-pharma-500/40 text-pharma-300 text-[11px] sm:text-xs font-bold font-heading tracking-wide sm:tracking-wider shadow-lg max-w-full">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
          <span className="truncate">WHO-GMP & ISO 9001:2015 CERTIFIED</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
          Pioneering Formulations, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
            Elevating Global Healthcare.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-100 text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
          Delivering high-efficacy finished pharmaceutical formulations, ethical marketing, and trusted PCD franchise partnerships across India.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 sm:pt-5 flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-sm xs:max-w-none mx-auto">
          <Link 
            to="/products"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-pharma-600 hover:bg-pharma-700 transition font-heading shadow-lg hover:shadow-glow-teal shrink-0 transform hover:-translate-y-0.5 duration-200"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link 
            to="/contact"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md border border-slate-600 transition font-heading shadow-lg shrink-0 transform hover:-translate-y-0.5 duration-200"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-pharma-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}




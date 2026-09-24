import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../../assest/hero-section.mp4';

export default function HeroSection({ onOpenEnquiry }) {
  return (
    <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
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
      <div className="absolute inset-0 bg-navy-950/45 sm:bg-navy-950/55 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 lg:py-28 text-center space-y-4 sm:space-y-6">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-600/80 text-pharma-300 text-xs font-bold font-heading tracking-wide shadow-lg">
          <ShieldCheck className="w-4 h-4 text-pharma-400 shrink-0" />
          <span>WHO-GMP & ISO 9001:2015 CERTIFIED</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
          Pioneering Formulations, <br className="hidden xs:inline sm:inline" />
          <span className="text-pharma-300 drop-shadow-sm">Elevating Healthcare.</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-100 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium">
          Delivering high-purity pharmaceutical formulations and reliable PCD franchise solutions across India.
        </p>

        {/* Action Buttons */}
        <div className="pt-3 sm:pt-5 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mx-auto">
          <Link 
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-pharma-600 hover:bg-pharma-700 transition font-heading shadow-lg hover:shadow-glow-teal shrink-0"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link 
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-white bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md border border-slate-600 transition font-heading shadow-lg shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 text-pharma-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}




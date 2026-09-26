import React from 'react';
import { ShieldCheck, CheckCircle2, FlaskConical, Award, FileCheck, Layers } from 'lucide-react';
import { QUALITY_PILLARS, CERTIFICATIONS } from '../../data/pharmaData';

export default function QualityAssurance() {
  return (
    <section className="py-14 sm:py-18 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-pharma-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-medblue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharma-500/10 border border-pharma-500/30 text-pharma-300 text-xs font-bold mb-2.5 font-heading">
            <ShieldCheck className="w-4 h-4 text-pharma-400" />
            <span>ZERO COMPROMISE QUALITY POLICY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            WHO-GMP Standardized <br />
            <span className="text-pharma-400">Quality Assurance Framework</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2.5 font-body leading-relaxed max-w-2xl mx-auto">
            Every batch undergoes multi-tiered analytical verification using high-performance liquid chromatography (HPLC), dissolution profiling, and microbiological screening.
          </p>
        </div>

        {/* 4 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_PILLARS.map((pillar) => (
            <div 
              key={pillar.number}
              className="bg-navy-850/80 border border-navy-800 hover:border-pharma-500/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group relative overflow-hidden"
            >
              <div className="text-4xl font-display font-black text-pharma-500/20 group-hover:text-pharma-500/40 transition-colors mb-3">
                {pillar.number}
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-pharma-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                {pillar.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center gap-2 text-[11px] font-semibold text-pharma-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-pharma-400" />
                <span>100% Validated Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Certifications Strip */}
        <div className="mt-16 bg-navy-950/80 border border-navy-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-pharma-400 uppercase tracking-wider">
                Accreditations & Regulatory Approvals
              </span>
              <h3 className="font-display font-black text-2xl text-white">
                Certified By Leading Health Authorities
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our manufacturing facilities comply strictly with Schedule M, WHO-GMP, ISO 9001:2015, and DCGI licensing regulations.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CERTIFICATIONS.map((item, idx) => (
                <div key={idx} className="bg-navy-900 border border-navy-800 rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-pharma-500/10 text-pharma-400 flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs text-white">{item.badge}</h4>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

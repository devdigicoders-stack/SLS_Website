import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FlaskConical, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Award, 
  Wind, 
  Thermometer, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { MANUFACTURING_CAPABILITIES, COMPANY_INFO, CERTIFICATIONS } from '../data/pharmaData';
import manufacturingVideo from '../assest/manufacturing-page.mp4';

export default function FacilityPage({ onEnquire }) {
  const labInstruments = [
    { name: "High-Performance Liquid Chromatography (HPLC)", use: "Active assay & related impurities quantification", spec: "Waters / Shimadzu Quaternary Pump System" },
    { name: "Gas Chromatography (GC) Headspace", use: "Residual solvents & volatile impurity detection", spec: "FID Detector & Automated Autosampler" },
    { name: "Electrolab USP Dissolution Testers", use: "In-vitro drug release & dissolution rate profiling", spec: "8-Vessel Automated USP Apparatus I & II" },
    { name: "UV-Visible Double Beam Spectrophotometer", use: "Absorbance & chemical identification verification", spec: "High resolution spectral scanning (190-1100 nm)" },
    { name: "Stability Climate Chambers", use: "ICH long-term & accelerated stability testing", spec: "25°C/60% RH & 40°C/75% RH monitored 24/7" },
    { name: "Microbiology Sterility Testing Isolator", use: "Bio-burden, pathogen screening & endotoxin LAL assay", spec: "Class 100 Grade A Laminar Airflow Suite" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header with Background Video (manufacturing-page.mp4) in Loop matching Home */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
        {/* Full-Banner Background Video in Loop */}
        <video
          src={manufacturingVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-100 transition-transform duration-700"
        />

        {/* Crystal Clear Balanced Tint Overlay */}
        <div className="absolute inset-0 bg-navy-950/45 sm:bg-navy-950/55 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-28 text-center space-y-3.5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-pharma-500/40 text-pharma-300 text-[11px] sm:text-xs font-bold font-heading tracking-wide sm:tracking-wider shadow-lg max-w-full">
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
            <span className="truncate">WHO-GMP ACCREDITED MANUFACTURING PLANT</span>
          </div>

          <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
            World-Class Pharmaceutical <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
              Infrastructure & Cleanrooms
            </span>
          </h1>

          <p className="text-slate-100 text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
            Spanning over 65,000 sq. ft. in Industrial Biotech Park, Lucknow, our facility integrates computerized automation, Schedule M compliant air handling systems, and high-speed packaging lines.
          </p>

          <div className="pt-2 sm:pt-5 flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-sm xs:max-w-none mx-auto">
            <button 
              onClick={() => onEnquire(null, "Third Party Manufacturing")}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-pharma-600 hover:bg-pharma-700 transition font-heading shadow-lg hover:shadow-glow-teal shrink-0 cursor-pointer"
            >
              <span>Contract Manufacturing Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md border border-slate-600 transition font-heading shadow-lg shrink-0"
            >
              <span>Call Facility Desk</span>
              <ArrowRight className="w-4 h-4 text-pharma-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Cleanroom Standards Banner - Cleanly below banner without overlap */}
      <section className="py-8 lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-50 text-teal-700 border border-teal-100 rounded-2xl">
                <Wind className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 font-heading">HEPA HVAC Filtration</h4>
                <p className="text-[11px] text-slate-500 font-body">0.3 Micron 99.97% Efficiency</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="p-3 bg-sky-50 text-sky-700 border border-sky-100 rounded-2xl">
                <Thermometer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 font-heading">RH & Temp Control</h4>
                <p className="text-[11px] text-slate-500 font-body">RH &lt; 35% & 22°C Monitored</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-2xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 font-heading">Clean-In-Place (CIP)</h4>
                <p className="text-[11px] text-slate-500 font-body">Automated SS-316 Sterilization</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="p-3 bg-amber-50 text-amber-700 border border-amber-100 rounded-2xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 font-heading">Zero Contamination</h4>
                <p className="text-[11px] text-slate-500 font-body">Dedicated Air-Locks & Pass-Boxes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Suites Grid */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
            Manufacturing Suites & Output Capacity
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-body">
            Engineered to handle high-volume commercial production runs as well as targeted small-batch orphan formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_CAPABILITIES.map((unit, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-heading">
                  <span className="text-xs font-black text-pharma-700 bg-pharma-50 px-3 py-1 rounded-full border border-pharma-200">
                    {unit.capacity}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Suite #{idx + 1}</span>
                </div>

                <h3 className="font-heading font-black text-xl text-slate-900 mb-3">
                  {unit.title}
                </h3>

                <div className="space-y-3 text-xs font-body">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-0.5 font-heading">High-Speed Machinery:</span>
                    <span className="text-slate-600 leading-snug">{unit.equipment}</span>
                  </div>

                  <div className="bg-teal-50/50 p-3 rounded-xl border border-teal-100 text-teal-900">
                    <span className="font-bold text-teal-800 block mb-0.5 font-heading">Air Quality & Cleanroom Standard:</span>
                    <span className="text-teal-700 leading-snug">{unit.standards}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 font-heading">
                <span className="flex items-center gap-1.5 text-pharma-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  cGMP Verified
                </span>
                <span className="text-[10px] font-mono">100% Traceability</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Control (QC) & Analytical Laboratory */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-pharma-300 text-xs font-bold mb-3 font-heading">
              <FlaskConical className="w-3.5 h-3.5 text-pharma-400" />
              <span>ADVANCED ANALYTICAL TESTING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white">
              GLP Accredited QC & Analytical Labs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-body">
              Our state-of-the-art laboratory features cutting-edge testing equipment guaranteeing chemical purity, dissolution bioavailability, and zero microbial contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labInstruments.map((inst, index) => (
              <div 
                key={index}
                className="bg-navy-950 border border-slate-800 rounded-3xl p-6 hover:border-pharma-500 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-pharma-400 flex items-center justify-center mb-4">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-1">
                  {inst.name}
                </h4>
                <p className="text-xs text-pharma-300 font-semibold mb-3 font-body">
                  Purpose: {inst.use}
                </p>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-body">
                  <span className="font-semibold text-slate-300 font-heading">Specifications: </span>
                  {inst.spec}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Visit & Contract Inquiry */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft-lg border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-pharma-400 font-heading">
                Third-Party & Institutional Supply
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl">
                Schedule a Plant Audit or Contract Discussion
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-body">
                We welcome quality auditors, hospital procurement heads, and franchise partners to visit our Lucknow Biotech manufacturing suites.
              </p>
            </div>
            <button
              onClick={() => onEnquire(null, "Plant Audit / Third-Party Manufacturing")}
              className="px-6 py-3.5 bg-pharma-600 hover:bg-pharma-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-sm shrink-0 font-heading"
            >
              Book Facility Audit / Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

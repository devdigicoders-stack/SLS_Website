import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle2, 
  FlaskConical, 
  Globe2, 
  Sparkles,
  ArrowRight,
  Download
} from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/pharmaData';
import toast from 'react-hot-toast';
import aboutVideo from '../assest/about.mp4';

export default function AboutPage({ onEnquire }) {
  const values = [
    {
      title: "Chemical Potency & Bio-Equivalence",
      desc: "Every finished batch conforms strictly to pharmacopeia specifications with zero tolerance for sub-standard active ingredients.",
      icon: FlaskConical
    },
    {
      title: "Patient Centric Accessibility",
      desc: "Delivering world-class healthcare formulations at competitive, cost-effective pricing for widespread public health access.",
      icon: Users
    },
    {
      title: "Regulatory Excellence",
      desc: "Adherence to Schedule M, WHO-GMP, ISO 9001:2015, and DCGI standards with complete analytical documentation.",
      icon: ShieldCheck
    },
    {
      title: "Ethical Distributor Partnerships",
      desc: "Transparent PCD franchise agreements with guaranteed district monopoly rights and high promotional support.",
      icon: Award
    }
  ];

  const milestones = [
    { year: "2014", title: "Foundation in Lucknow", desc: "Incorporation with 15 essential oral antibiotic & analgesic formulations." },
    { year: "2017", title: "WHO-GMP Certification", desc: "Commissioned automated tablet & capsule manufacturing suites in Biotech Park." },
    { year: "2020", title: "Injectable & Critical Care Expansion", desc: "Added sterile liquid and dry lyophilized injectable manufacturing lines." },
    { year: "2023", title: "Nutraceuticals & 9G Herbal Segment", desc: "Introduced advanced softgels, antioxidants, and bone health formulations." },
    { year: "2026", title: "Pan-India & Global Export Presence", desc: "Expanding portfolio with 750+ partners across 28 states & international export hubs." }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner with Full Background Video (about.mp4) in Loop matching Home */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
        {/* Full-Banner Background Video in Loop */}
        <video
          src={aboutVideo}
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
            <span className="truncate">ABOUT SLS PHARMA</span>
          </div>

          <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
            Transforming Healthcare Through <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
              Precision Formulations.
            </span>
          </h1>

          <p className="text-slate-100 text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
            Founded with an unwavering commitment to quality, SLS stands as a benchmark of clinical trust, bio-equivalence, and WHO-GMP ethical pharmaceutical excellence.
          </p>

          <div className="pt-2 sm:pt-5 flex flex-col xs:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-sm xs:max-w-none mx-auto">
            <Link 
              to="/products"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-pharma-600 hover:bg-pharma-700 transition font-heading shadow-lg hover:shadow-glow-teal shrink-0 transform hover:-translate-y-0.5 duration-200"
            >
              <span>Our Formulations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link 
              to="/contact"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md border border-slate-600 transition font-heading shadow-lg shrink-0 transform hover:-translate-y-0.5 duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-pharma-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid - Cleanly below banner without overlap */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-black text-2xl text-slate-900 mb-3">
                Our Corporate Mission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                To pioneer, manufacture, and dispense superior pharmaceutical products that prevent disease, cure infections, and alleviate human suffering while maintaining affordable healthcare accessibility for every individual across India and global markets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-pharma-700 font-heading">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Committed to 100% Zero-Defect Formulations</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-black text-2xl text-slate-900 mb-3">
                Our Future Vision
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                To emerge as one of India's top 10 most respected and innovative pharmaceutical manufacturing corporations by continuously investing in cutting-edge R&D, automated cleanroom infrastructure, and sustainable green manufacturing practices.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sky-700 font-heading">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Global Reach in 50+ Developing & Regulated Nations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
              Pillars of Our Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-body">
              Our core values guide every chemical formulation, clinical testing phase, and distributor interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-pharma-400 transition-all shadow-soft-sm">
                  <div className="w-12 h-12 rounded-2xl bg-white text-pharma-600 shadow-sm border border-slate-200 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Milestones (Zig-Zag Alternating Layout) */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-pharma-400 font-heading">
              Our Journey of Growth
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white mt-1.5 tracking-tight">
              A Decade of Clinical Innovation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-body max-w-xl mx-auto">
              Charting our evolution from a specialized regional formulation facility into a pan-India WHO-GMP certified manufacturing enterprise.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Vertical Timeline Axis Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-pharma-500 via-slate-700 to-pharma-500 -translate-x-1/2"></div>
            <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-pharma-500 via-slate-700 to-pharma-500"></div>

            <div className="space-y-10 sm:space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative group">
                    {/* Center Timeline Node Dot */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-pharma-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-pharma-300 group-hover:shadow-glow-teal transition-all duration-300">
                        <span className="w-3 h-3 rounded-full bg-pharma-400 group-hover:bg-pharma-300"></span>
                      </div>
                    </div>

                    {/* Timeline Content Item */}
                    <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Milestone Card */}
                      <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-14 md:text-right' : 'md:pl-14 md:text-left'}`}>
                        <div className="bg-navy-950/90 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 sm:p-7 hover:border-pharma-500/80 shadow-soft-md transition-all duration-300 hover:-translate-y-1 group-hover:shadow-soft-lg">
                          <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            <span className="text-xs font-black text-pharma-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl font-mono shadow-sm">
                              {m.year}
                            </span>
                            <span className="text-[11px] font-bold text-slate-500 uppercase font-heading tracking-wider">
                              Phase {idx + 1}
                            </span>
                          </div>
                          
                          <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                            {m.title}
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-body">
                            {m.desc}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for the other half on desktop */}
                      <div className="hidden md:block w-1/2"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box with solid Navy */}
     
    </div>
  );
}

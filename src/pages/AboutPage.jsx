import React from 'react';
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
      {/* Hero Banner with Full Background Video (about.mp4) in Loop */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800">
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

        {/* Clear Tint Overlay so video is prominently visible */}
        <div className="absolute inset-0 bg-navy-950/45 sm:bg-navy-950/55 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-600/80 text-pharma-300 text-xs font-bold font-heading shadow-md">
            <Building2 className="w-4 h-4 text-pharma-400" />
            <span>ABOUT SLS PHARMA</span>
          </div>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.15] drop-shadow-md">
            Transforming Healthcare Through <br />
            <span className="text-pharma-300 drop-shadow-sm">
              Precision Formulations
            </span>
          </h1>
          <p className="text-slate-100 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed font-body max-w-2xl mx-auto drop-shadow-xs font-medium">
            Founded with an unwavering vision to deliver superior pharmaceutical formulations, SLS Pharma stands as a symbol of clinical trust, bio-efficacy, and ethical pharmaceutical manufacturing.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid - Cleanly below banner without overlap */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-soft-lg border border-slate-200 flex flex-col justify-between">
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

          <div className="bg-white rounded-3xl p-8 shadow-soft-lg border border-slate-200 flex flex-col justify-between">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight">
              Pillars of Our Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-body">
              Our core values guide every chemical formulation, clinical testing phase, and distributor interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Timeline Milestones */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-pharma-400 font-heading">
              Our Journey of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mt-1">
              A Decade of Clinical Innovation
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-32 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-pharma-500 border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>

                <div className="bg-navy-950 border border-slate-800 rounded-2xl p-5 max-w-2xl hover:border-pharma-500 transition-colors">
                  <span className="text-xs font-black text-pharma-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md font-mono">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-body">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box with solid Navy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft-lg border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading font-black text-2xl sm:text-3xl">
                Ready to Partner with SLS Pharma?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-body">
                Whether you need monopoly franchise rights in your territory or contract formulation for your private brand, our team is ready to assist.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-heading">
              <button
                onClick={() => onEnquire(null, "PCD Pharma Franchise Monopoly")}
                className="px-6 py-3 bg-pharma-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-pharma-700 transition shadow-sm"
              >
                Apply for PCD Franchise
              </button>
              <button
                onClick={() => {
                  toast.success("Downloading SLS Pharma Corporate Profile & Product Dossier...", { icon: '📄' });
                }}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

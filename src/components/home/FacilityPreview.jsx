import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Cog } from 'lucide-react';
import { MANUFACTURING_CAPABILITIES } from '../../data/pharmaData';

export default function FacilityPreview() {
  return (
    <section className="py-10 sm:py-14 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pharma-100 border border-pharma-200 text-pharma-800 text-xs font-bold rounded-full mb-2.5 font-heading">
              <Building2 className="w-3.5 h-3.5 text-pharma-600" />
              <span>INFRASTRUCTURE & CLEANROOMS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
              State-Of-The-Art <br className="hidden sm:inline" />
              <span className="text-pharma-600">Manufacturing Facility</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl font-body leading-relaxed">
              Equipped with fully automated high-speed SS-316 machinery, positive-pressure cleanroom suites, and advanced computerized monitoring.
            </p>
          </div>

          <Link 
            to="/facility"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md self-start lg:self-auto font-heading"
          >
            <span>Explore Plant Capabilities</span>
            <ArrowRight className="w-4 h-4 text-pharma-400" />
          </Link>
        </div>

        {/* Manufacturing Units Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_CAPABILITIES.slice(0, 3).map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-pharma-400 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-pharma-50 text-pharma-800 rounded-lg border border-pharma-200">
                    High-Tech Suite
                  </span>
                  <span className="text-xs font-extrabold text-pharma-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {item.capacity}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-slate-900 mb-2">
                  {item.title}
                </h3>

                <div className="space-y-3 mt-4 text-xs text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-0.5">
                      Installed Machinery
                    </p>
                    <p className="text-slate-600">{item.equipment}</p>
                  </div>

                  <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 text-emerald-900">
                    <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider mb-0.5">
                      Cleanroom Standard
                    </p>
                    <p className="text-xs">{item.standards}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-pharma-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  WHO-GMP Compliant
                </span>
                <span className="text-[11px] font-mono">HVAC Class 100K</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

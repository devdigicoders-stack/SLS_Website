import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Zap, 
  Activity, 
  Wind, 
  Sparkles, 
  HeartPulse, 
  Syringe, 
  Layers,
  ArrowRight,
  Pill
} from 'lucide-react';
import { CATEGORIES } from '../../data/pharmaData';

export default function CategoryGrid() {
  const iconMap = {
    ShieldAlert,
    Zap,
    Activity,
    Wind,
    Sparkles,
    HeartPulse,
    Syringe,
    Layers
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-full mb-3 font-heading">
            <Pill className="w-3.5 h-3.5 text-pharma-600" />
            <span>THERAPEUTIC DIVISIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Comprehensive Medical <br className="hidden sm:inline" />
            <span className="text-pharma-600">Product Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-body">
            Explore our diverse formulation divisions engineered with active pharmaceutical ingredients meeting strict Indian and International Pharmacopeia standards.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Pill;
            return (
              <Link 
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200 hover:border-pharma-500 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Icon & Count Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-pharma-50 border border-pharma-100 flex items-center justify-center text-pharma-600 group-hover:bg-pharma-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold px-3 py-1 bg-slate-100 group-hover:bg-pharma-50 group-hover:text-pharma-700 text-slate-600 rounded-full border border-slate-200 transition-colors font-heading">
                      {cat.count}+ Formulations
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-pharma-700 transition tracking-tight">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-body">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-pharma-700 group-hover:text-pharma-800 font-heading">
                  <span>View Formulations</span>
                  <div className="w-7 h-7 rounded-full bg-pharma-50 group-hover:bg-pharma-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner with solid Navy & White CTA */}
        <div className="mt-12 bg-navy-950 rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-extrabold text-xl sm:text-2xl">
              Looking for Custom Contract Formulations?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-body">
              We provide Third-Party formulation synthesis, custom batch packaging, and rapid analytical assay validation.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-pharma-600 hover:bg-pharma-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md shrink-0 flex items-center gap-2 font-heading"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

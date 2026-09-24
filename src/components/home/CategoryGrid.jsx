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
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold rounded-full mb-3 font-heading">
            <Pill className="w-4 h-4 text-pharma-600" />
            <span>THERAPEUTIC DIVISIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Medical <br className="hidden sm:inline" />
            <span className="text-pharma-600">Product Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-body leading-relaxed">
            Explore our diverse formulation divisions engineered with active pharmaceutical ingredients meeting strict Indian and International Pharmacopeia standards.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Pill;
            return (
              <Link 
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200 hover:border-pharma-500 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Icon & Count Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-pharma-50 border border-pharma-100 flex items-center justify-center text-pharma-600 group-hover:bg-pharma-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold px-3.5 py-1.5 bg-slate-100 group-hover:bg-pharma-50 group-hover:text-pharma-700 text-slate-700 rounded-full border border-slate-200 transition-colors font-heading">
                      {cat.count}+ Products
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-pharma-700 transition tracking-tight leading-snug">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed font-body">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-pharma-700 group-hover:text-pharma-800 font-heading">
                  <span>View Formulations</span>
                  <div className="w-8 h-8 rounded-full bg-pharma-50 group-hover:bg-pharma-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

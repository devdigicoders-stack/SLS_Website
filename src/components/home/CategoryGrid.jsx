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
    <section className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold rounded-full mb-2.5 font-heading">
            <Pill className="w-4 h-4 text-pharma-600" />
            <span>THERAPEUTIC DIVISIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Medical <br className="hidden sm:inline" />
            <span className="text-pharma-600">Product Categories</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2.5 font-body leading-relaxed max-w-2xl mx-auto">
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
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-pharma-500 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Product Image Section */}
                <div className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden flex items-center justify-center p-3">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-200/80 flex items-center justify-center text-pharma-700 group-hover:bg-pharma-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-pharma-700 transition tracking-tight leading-snug line-clamp-1">
                      {cat.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-body line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-pharma-700 group-hover:text-pharma-800 font-heading">
                    <span>View Formulations</span>
                    <div className="w-6 h-6 rounded-full bg-pharma-50 group-hover:bg-pharma-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-3 h-3" />
                    </div>
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

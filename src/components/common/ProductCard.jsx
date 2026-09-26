import React from 'react';
import { Eye, ArrowRight, ShieldCheck, Sparkles, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onQuickView, onEnquire }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-pharma-500 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      {/* Product Image Section (Direct Link to Full Details) */}
      <Link 
        to={`/products/${product.slug}`}
        className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100 block group/img"
      >
        <img 
          src={product.image} 
          alt={product.brandName}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=90";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Dosage Form Badge on Top Left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-200/80 flex items-center gap-1.5 text-pharma-700 text-[11px] font-bold font-heading">
          <span className="w-1.5 h-1.5 rounded-full bg-pharma-500"></span>
          <span>{product.dosageForm.split('/')[0].trim()}</span>
        </div>
      </Link>

      {/* Card Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Name Title */}
          <Link to={`/products/${product.slug}`} className="block group-hover:text-pharma-700 transition">
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-snug line-clamp-1">
              {product.brandName}
            </h3>
          </Link>

          {/* Generic Salt Formula / Description */}
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-body line-clamp-2">
            {product.genericName}
          </p>

        </div>

        {/* Footer with View Details Link */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 font-heading">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>WHO-GMP Grade</span>
          </div>

          <Link 
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-pharma-700 group-hover:text-pharma-800 font-heading transition-colors"
          >
            <span>View Details</span>
            <div className="w-6 h-6 rounded-full bg-pharma-50 group-hover:bg-pharma-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

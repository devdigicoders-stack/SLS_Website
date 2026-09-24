import React from 'react';
import { Eye, ArrowRight, ShieldCheck, Sparkles, Package, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onQuickView, onEnquire }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-pharma-500/80 shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top Image Box */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-100/80 to-slate-50 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100">
        
        {/* Floating Badges (Strictly Single Line, No Wrapping) */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1 pointer-events-none">
          <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-pharma-800 font-bold text-[11px] sm:text-xs rounded-full border border-pharma-200/80 shadow-xs font-heading flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-pharma-500 animate-pulse"></span>
            <span>{product.dosageForm.split('/')[0].trim()}</span>
          </span>

          <span className="px-2 py-1 bg-navy-950/90 backdrop-blur-md text-white font-bold text-[10px] sm:text-[11px] rounded-lg tracking-wider font-heading uppercase shadow-xs shrink-0 whitespace-nowrap">
            {product.badge || "WHO-GMP"}
          </span>
        </div>

        {/* Medicine Image */}
        <img 
          src={product.image} 
          alt={product.brandName}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=90";
          }}
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
          <button 
            type="button"
            onClick={() => onQuickView(product)}
            className="px-4 py-2 bg-white text-slate-900 hover:text-pharma-700 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2 text-xs sm:text-sm font-bold font-heading"
            title="Quick View Composition"
          >
            <Eye className="w-4 h-4 text-pharma-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Category & Approval Badges (Clean single flex line with no wrapping) */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-pharma-700 bg-pharma-50 px-2.5 py-0.5 rounded-md border border-pharma-200/80 font-heading whitespace-nowrap">
              {product.categorySlug.toUpperCase()}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-1 shrink-0 font-body whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              DCGI
            </span>
          </div>

          {/* Brand Name */}
          <Link to={`/products/${product.slug}`} className="block group-hover:text-pharma-700 transition">
            <h3 className="font-heading font-black text-xl text-slate-900 tracking-tight leading-snug">
              {product.brandName}
            </h3>
          </Link>

          {/* Generic Salt Formula */}
          <p className="text-xs sm:text-[13px] font-medium text-slate-600 line-clamp-2 mt-1 font-body leading-relaxed min-h-[38px]">
            {product.genericName}
          </p>

          {/* Price & Packaging Summary */}
          <div className="mt-3.5 bg-slate-50/90 rounded-2xl p-3 border border-slate-200/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 font-heading block">MRP (Incl. Taxes)</span>
              <span className="text-base sm:text-lg font-black text-slate-900 font-heading tracking-tight text-emerald-700">
                {product.mrp || "₹ 150.00"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 font-heading block">Packaging</span>
              <span className="text-xs font-bold text-slate-700 font-body flex items-center gap-1 justify-end">
                <Package className="w-3.5 h-3.5 text-pharma-600 shrink-0" />
                {product.packPrice || product.packType}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Single Line, Balanced) */}
        <div className="mt-4 pt-3.5 border-t border-slate-100/90">
          <div className="flex items-center gap-2">
            <Link 
              to={`/products/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-3 text-xs sm:text-[13px] font-bold text-slate-700 hover:text-pharma-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition font-heading whitespace-nowrap"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
            
            <button 
              type="button"
              onClick={() => onEnquire(product, "Commercial Bulk Inquiry")}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-3 text-xs sm:text-[13px] font-bold text-white bg-pharma-600 hover:bg-pharma-700 active:scale-[0.98] rounded-xl shadow-soft-sm hover:shadow-soft-md transition font-heading whitespace-nowrap"
            >
              <span>Get Quote</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-200 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

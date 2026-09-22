import React from 'react';
import { Eye, ArrowRight, ShieldCheck, Sparkles, Package, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onQuickView, onEnquire }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/70 hover:border-pharma-300 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none">
        {product.badge ? (
          <span className="px-2.5 py-0.5 bg-pharma-600 text-white font-bold text-[10px] uppercase tracking-wider rounded-full shadow-xs font-heading">
            {product.badge}
          </span>
        ) : (
          <span className="px-2.5 py-0.5 bg-white text-slate-700 font-semibold text-[10px] rounded-full border border-slate-200 shadow-xs font-heading">
            {product.categorySlug.toUpperCase()}
          </span>
        )}
        <span className="px-2.5 py-0.5 bg-slate-900 text-white font-medium text-[10px] rounded-lg tracking-wide font-heading">
          {product.dosageForm}
        </span>
      </div>

      {/* Image with smooth zoom */}
      <div className="relative aspect-[4/3] bg-slate-50 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
        <img 
          src={product.image} 
          alt={product.brandName}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
          <button 
            type="button"
            onClick={() => onQuickView(product)}
            className="p-2.5 bg-white text-slate-800 hover:text-pharma-700 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-1.5 text-xs font-bold"
            title="Quick View Composition"
          >
            <Eye className="w-3.5 h-3.5 text-pharma-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-pharma-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-pharma-500"></span>
            <span className="truncate">{product.category}</span>
          </div>

          <Link to={`/products/${product.slug}`} className="block group-hover:text-pharma-700 transition">
            <h3 className="font-heading font-extrabold text-lg text-slate-900 tracking-tight leading-snug">
              {product.brandName}
            </h3>
          </Link>

          <p className="text-xs font-medium text-slate-500 line-clamp-1 mt-0.5 font-body">
            {product.genericName}
          </p>

          {/* Composition preview */}
          <div className="mt-3 bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center justify-between">
              <span>Active Composition</span>
              <span className="text-pharma-600 font-semibold text-[10px]">Verified Assay</span>
            </div>
            <div className="space-y-1">
              {product.composition.slice(0, 2).map((comp, idx) => (
                <div key={idx} className="flex justify-between items-center text-[11px] text-slate-700 font-body">
                  <span className="truncate pr-2 font-medium text-slate-600">{comp.ingredient}</span>
                  <span className="font-bold text-slate-900 shrink-0 text-[10px] bg-white px-1.5 py-0.2 rounded border border-slate-200">
                    {comp.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packaging + Action */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 font-body">
            <span className="flex items-center gap-1 font-medium">
              <Package className="w-3.5 h-3.5 text-pharma-500 shrink-0" />
              <span className="truncate">{product.packType}</span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-100">
              WHO-GMP
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link 
              to={`/products/${product.slug}`}
              className="flex items-center justify-center gap-1 py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button 
              type="button"
              onClick={() => onEnquire(product)}
              className="py-2 px-3 text-xs font-bold text-white bg-pharma-600 hover:bg-pharma-700 rounded-xl shadow-xs transition font-heading"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

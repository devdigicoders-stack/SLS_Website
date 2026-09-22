import React from 'react';
import { X, ExternalLink, ShieldCheck, Check, Package, Sparkles, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickViewModal({ product, isOpen, onClose, onEnquire }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white text-slate-600 hover:text-slate-900 rounded-full shadow-md border border-slate-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-5/12 bg-slate-50 p-6 flex flex-col justify-between items-center relative border-b md:border-b-0 md:border-r border-slate-200">
          <div className="w-full flex justify-between items-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pharma-100 text-pharma-800 font-bold text-xs rounded-full border border-pharma-200 font-heading">
              <Sparkles className="w-3 h-3 text-pharma-600" />
              {product.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 bg-white rounded-lg border border-slate-200 text-slate-600 shadow-2xs font-heading">
              {product.dosageForm}
            </span>
          </div>

          <div className="my-auto w-full aspect-square max-w-[260px] rounded-2xl overflow-hidden shadow-soft-sm border border-slate-200 bg-white p-3 flex items-center justify-center group">
            <img 
              src={product.image} 
              alt={product.brandName} 
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="w-full mt-4 bg-white rounded-xl p-3 border border-slate-200 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">Packaging Format</p>
            <p className="text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 mt-0.5 font-body">
              <Package className="w-3.5 h-3.5 text-pharma-600 shrink-0" />
              {product.packaging}
            </p>
          </div>
        </div>

        {/* Product Specs Column */}
        <div className="md:w-7/12 p-6 md:p-8 overflow-y-auto space-y-5 flex flex-col justify-between font-body">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold rounded">
                WHO-GMP Certified
              </span>
              <span className="px-2 py-0.5 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-bold rounded">
                DCGI Approved
              </span>
            </div>

            <h2 className="text-2xl font-heading font-extrabold text-slate-900 tracking-tight">
              {product.brandName}
            </h2>
            <p className="text-xs font-medium text-pharma-700 mt-0.5">
              {product.genericName}
            </p>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Active Composition Table */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                  Active Drug Composition
                </h4>
                <span className="text-[10px] font-medium text-slate-400">Accurate Analytical Assay</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200/60">
                {product.composition.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-3.5 py-2 text-xs">
                    <span className="font-semibold text-slate-700">{item.ingredient}</span>
                    <span className="font-bold text-pharma-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indications snippet */}
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">
                Primary Indications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {product.indications.slice(0, 4).map((ind, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-pharma-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-3 font-heading">
            <Link 
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <span>Full Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button 
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-pharma-600 hover:bg-pharma-700 rounded-xl shadow-sm transition"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Get Quotation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

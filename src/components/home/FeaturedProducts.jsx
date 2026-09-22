import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Pill, Filter } from 'lucide-react';
import { PHARMA_PRODUCTS, CATEGORIES } from '../../data/pharmaData';
import ProductCard from '../common/ProductCard';

export default function FeaturedProducts({ onQuickView, onEnquire }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterTabs = [
    { id: 'all', name: 'All Formulations' },
    { id: 'antibiotics', name: 'Antibiotics' },
    { id: 'gastrointestinal', name: 'Gastro / Antacids' },
    { id: 'analgesics', name: 'Pain Relief (NSAIDs)' },
    { id: 'nutraceuticals', name: 'Nutraceuticals' },
    { id: 'injectables', name: 'Injectables' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PHARMA_PRODUCTS.slice(0, 8)
    : PHARMA_PRODUCTS.filter(p => p.categorySlug === selectedCategory);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded-full mb-3 font-heading">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>TOP DISPENSED FORMULATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Featured Pharmaceutical <br className="hidden sm:inline" />
              <span className="text-pharma-600">Product Showcase</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl font-body">
              High-stability pharmaceutical finished formulations packed in moisture-barrier Alu-Alu and premium blister standards.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-pharma-50 hover:text-pharma-700 text-slate-800 font-bold text-xs rounded-xl transition border border-slate-200 self-start md:self-auto font-heading"
          >
            <span>Explore All 350+ Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 font-heading ${
                selectedCategory === tab.id
                  ? 'bg-pharma-600 text-white shadow-soft-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onEnquire={onEnquire}
            />
          ))}
        </div>

        {/* Bottom CTA Card with solid Navy and solid Teal */}
        <div className="mt-14 p-8 rounded-3xl bg-navy-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800 shadow-soft-lg">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-pharma-400 font-heading">
              PCD Pharma Franchise Opportunity
            </span>
            <h3 className="font-heading font-extrabold text-2xl">
              Apply For District Monopoly Rights Today
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl font-body">
              Get complete promotional backup: Visual Aids, MR Bags, Reminder Cards, Physician Samples, Visiting Cards, and attractive profit schemes.
            </p>
          </div>
          <button
            onClick={() => onEnquire(null, "PCD Pharma Franchise Monopoly")}
            className="px-6 py-3.5 bg-pharma-600 hover:bg-pharma-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-md shrink-0 font-heading"
          >
            Apply for Monopoly Rights
          </button>
        </div>
      </div>
    </section>
  );
}

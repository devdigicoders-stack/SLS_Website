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
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold rounded-full mb-3 font-heading">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>TOP DISPENSED FORMULATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
              Featured Pharmaceutical <br className="hidden sm:inline" />
              <span className="text-pharma-600">Product Showcase</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl font-body leading-relaxed">
              High-stability pharmaceutical finished formulations packed in moisture-barrier Alu-Alu and premium blister standards.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-pharma-50 hover:text-pharma-700 text-slate-800 font-bold text-sm sm:text-base rounded-xl transition border border-slate-200 self-start md:self-auto font-heading shadow-2xs"
          >
            <span>Explore All Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 font-heading ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

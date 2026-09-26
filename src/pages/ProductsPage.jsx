import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  X, 
  Pill, 
  Sparkles, 
  SlidersHorizontal, 
  Check, 
  Grid3X3, 
  List, 
  RotateCcw,
  Package,
  Layers
} from 'lucide-react';
import { PHARMA_PRODUCTS, CATEGORIES, DOSAGE_FORMS } from '../data/pharmaData';
import ProductCard from '../components/common/ProductCard';
import productVideo from '../assest/product-page.mp4';

export default function ProductsPage({ onQuickView, onEnquire }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedDosage, setSelectedDosage] = useState('All Forms');
  const [sortBy, setSortBy] = useState('featured');

  // Sync state when URL params change
  useEffect(() => {
    if (searchParam !== searchQuery) {
      setSearchQuery(searchParam);
    }
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, searchParam]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    if (val.trim()) {
      searchParams.set('search', val);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDosage('All Forms');
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return PHARMA_PRODUCTS.filter((product) => {
      // Search filter
      const matchesSearch = !searchQuery.trim() || 
        product.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.composition.some(c => c.ingredient.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.indications.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.categorySlug === selectedCategory;

      // Dosage form filter
      const matchesDosage = selectedDosage === 'All Forms' || product.dosageForm.toLowerCase().includes(selectedDosage.toLowerCase().split(' ')[0]);

      return matchesSearch && matchesCategory && matchesDosage;
    }).sort((a, b) => {
      if (sortBy === 'brand-asc') return a.brandName.localeCompare(b.brandName);
      if (sortBy === 'brand-desc') return b.brandName.localeCompare(a.brandName);
      if (sortBy === 'new') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedDosage, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header with Background Video (product-page.mp4) in Loop matching Home */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800 mb-6 sm:mb-8">
        {/* Full-Banner Background Video in Loop */}
        <video
          src={productVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-100 transition-transform duration-700"
        />

        {/* Crystal Clear Balanced Tint Overlay */}
        <div className="absolute inset-0 bg-navy-950/45 sm:bg-navy-950/55 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-28 text-center space-y-3.5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-pharma-500/40 text-pharma-300 text-[11px] sm:text-xs font-bold font-heading tracking-wide sm:tracking-wider shadow-lg max-w-full">
            <Pill className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
            <span className="truncate">OFFICIAL PRODUCT FORMULARY</span>
          </div>

          <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
            Pharmaceutical Formulations <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
              & Product Showcase
            </span>
          </h1>

          <p className="text-slate-100 text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
            Explore our comprehensive catalogue of DCGI-approved, WHO-GMP manufactured finished drugs. Filter by active salt, therapeutic category, or dosage format.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Filter & Search Bar (Compact & Sleek) */}
        <div className="bg-white rounded-2xl shadow-soft-sm border border-slate-200/90 p-4 sm:p-5 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search by brand name, salt, composition..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none font-body transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dosage Form Select */}
            <div className="md:col-span-4">
              <div className="relative">
                <Layers className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  value={selectedDosage}
                  onChange={(e) => setSelectedDosage(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none appearance-none cursor-pointer font-body transition"
                >
                  {DOSAGE_FORMS.map((form) => (
                    <option key={form} value={form}>{form}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Select */}
            <div className="md:col-span-3">
              <div className="relative">
                <SlidersHorizontal className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none appearance-none cursor-pointer font-body transition"
                >
                  <option value="featured">Sort: Featured First</option>
                  <option value="brand-asc">Sort: Name (A to Z)</option>
                  <option value="brand-desc">Sort: Name (Z to A)</option>
                  <option value="new">Sort: New Formulations</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Chips Bar (Compact Pills) */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1.5 flex items-center gap-1 font-heading">
              <Filter className="w-3 h-3 text-pharma-600" />
              Category:
            </span>
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 font-heading shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-pharma-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              All Segments ({PHARMA_PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 font-heading shrink-0 ${
                    isSelected
                      ? 'bg-pharma-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500 font-body">
          <div>
            Showing <strong className="text-slate-900 font-semibold">{filteredProducts.length}</strong> formulations
            {(searchQuery || selectedCategory !== 'all' || selectedDosage !== 'All Forms') && (
              <span className="ml-2 text-pharma-700 font-semibold">matching your filters</span>
            )}
          </div>
          
          {(searchQuery || selectedCategory !== 'all' || selectedDosage !== 'All Forms') && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 transition font-heading"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onEnquire={onEnquire}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto my-12 shadow-soft-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Pill className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
              No matching formulations found
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-body">
              We couldn't find any drug matching "{searchQuery || selectedCategory}". Try searching by basic salt name like "Amoxicillin" or "Pantoprazole".
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-pharma-600 hover:bg-pharma-700 text-white text-xs font-bold rounded-xl transition shadow-md font-heading"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

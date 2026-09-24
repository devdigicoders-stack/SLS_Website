import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Package, 
  Check, 
  AlertTriangle, 
  Download, 
  Send, 
  FileText, 
  Share2, 
  Sparkles,
  Info,
  Clock,
  Thermometer,
  Layers
} from 'lucide-react';
import { PHARMA_PRODUCTS } from '../data/pharmaData';
import ProductCard from '../components/common/ProductCard';
import toast from 'react-hot-toast';

export default function ProductDetailPage({ onEnquire, onQuickView }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = PHARMA_PRODUCTS.find(p => p.slug === slug) || PHARMA_PRODUCTS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const relatedProducts = PHARMA_PRODUCTS
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard!", { icon: '🔗' });
    }
  };

  const handleDownloadMonograph = () => {
    toast.success(`Downloading Technical Monograph & COA for ${product.brandName}...`, {
      icon: '📄',
      duration: 4000
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-pharma-700 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-soft-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products Catalogue</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200/80 shadow-soft-sm transition"
              title="Share Formulation"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadMonograph}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200/80 shadow-soft-sm transition"
            >
              <Download className="w-3.5 h-3.5 text-pharma-600" />
              <span>Download Monograph (PDF)</span>
            </button>
          </div>
        </div>

        {/* Main Product Container */}
        <div className="bg-white rounded-3xl shadow-soft-md border border-slate-200/80 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Product Images & Specs */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200/70 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-pharma-100 text-pharma-800 font-bold text-xs rounded-full border border-pharma-200">
                    {product.category}
                  </span>
                  <span className="px-2.5 py-1 bg-white text-slate-700 font-semibold text-xs rounded-lg border border-slate-200 shadow-2xs">
                    {product.dosageForm}
                  </span>
                </div>

                {/* Main Active Image */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200/80 p-4 flex items-center justify-center shadow-soft-sm">
                  <img 
                    src={product.images ? product.images[activeImageIndex] : product.image} 
                    alt={product.brandName}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=90";
                    }}
                  />
                </div>

                {/* Thumbnail Gallery */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-2 mt-4">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 bg-white p-1 transition ${
                          activeImageIndex === idx ? 'border-pharma-600 ring-2 ring-pharma-100' : 'border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover rounded-lg" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Specs Highlight Box */}
              <div className="mt-6 bg-white rounded-2xl p-4 border border-slate-200/80 space-y-2.5 text-xs font-body">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Packaging Unit:</span>
                  <span className="font-bold text-slate-800">{product.packaging}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Therapeutic Class:</span>
                  <span className="font-bold text-slate-800 truncate max-w-[200px] text-right">{product.therapeuticClass}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Quality Compliance:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    WHO-GMP & DCGI
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Scientific Information */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {product.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md border border-emerald-200">
                      {cert}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                  {product.brandName}
                </h1>
                <p className="text-base sm:text-lg font-bold text-pharma-700 mt-2 font-body">
                  {product.genericName}
                </p>

                {/* Price & Packaging Banner on Detail Page */}
                <div className="mt-4 p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block font-heading">
                      Maximum Retail Price (MRP)
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading text-emerald-700">
                      {product.mrp || "₹ 150.00"}
                    </span>
                    <span className="text-xs text-slate-500 font-medium ml-2">(Inclusive of all taxes)</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-heading">
                      Standard Pack Form
                    </span>
                    <span className="text-sm font-bold text-slate-800 font-body flex items-center gap-1.5 sm:justify-end">
                      <Package className="w-4 h-4 text-pharma-600" />
                      {product.packPrice || product.packaging}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-body">
                  {product.shortDesc}
                </p>

                {/* Chemical Composition Table */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-pharma-600" />
                      <span>Drug Composition & Active Assay</span>
                    </h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      Analytical HPLC Verified
                    </span>
                  </div>

                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                    <table className="w-full text-sm text-left font-body">
                      <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-xs">
                        <tr>
                          <th className="px-5 py-3.5">Active Salt / Excipient</th>
                          <th className="px-5 py-3.5 text-right">Strength (Amount)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/80">
                        {product.composition.map((comp, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition">
                            <td className="px-5 py-3.5 font-semibold text-slate-800">{comp.ingredient}</td>
                            <td className="px-5 py-3.5 text-right font-bold text-pharma-700 text-sm sm:text-base">{comp.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Primary Indications */}
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-base text-slate-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                    <Info className="w-5 h-5 text-pharma-600" />
                    <span>Clinical Indications & Uses</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.indications.map((ind, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 font-body">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dosage & Storage Guidelines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                  <div className="p-5 bg-sky-50/70 rounded-2xl border border-sky-100 text-sm font-body">
                    <div className="flex items-center gap-2 font-bold text-sky-900 mb-1.5 font-heading text-base">
                      <Clock className="w-5 h-5 text-sky-600" />
                      <span>Dosage & Administration</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{product.dosageAdministration}</p>
                  </div>

                  <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-100 text-sm font-body">
                    <div className="flex items-center gap-2 font-bold text-amber-900 mb-1.5 font-heading text-base">
                      <Thermometer className="w-5 h-5 text-amber-600" />
                      <span>Storage & Shelf Life</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{product.storage}</p>
                  </div>
                </div>

                {/* Precautions Warning */}
                {product.warnings && (
                  <div className="mt-5 p-4 bg-rose-50/80 border border-rose-200 rounded-2xl text-sm text-rose-900 flex items-start gap-2.5 font-body">
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>Precaution:</strong> {product.warnings}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onEnquire(product, "Product Specific Order")}
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-pharma-600 hover:bg-pharma-700 shadow-md transition font-heading"
                >
                  <Package className="w-5 h-5" />
                  <span>Request Commercial Quotation</span>
                </button>

                <button
                  onClick={() => onEnquire(product, "PCD Monopoly Franchise")}
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-slate-800 bg-slate-100 hover:bg-slate-200 transition font-heading"
                >
                  <span>Inquire PCD Monopoly Rights</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading font-black text-2xl text-slate-900">
                  Related Formulations in {product.category}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-body">Complementary products manufactured in the same cleanroom suite</p>
              </div>
              <Link to={`/products?category=${product.categorySlug}`} className="text-xs font-bold text-pharma-600 hover:underline">
                View All in Segment →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard 
                  key={relProduct.id} 
                  product={relProduct}
                  onQuickView={onQuickView}
                  onEnquire={onEnquire}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

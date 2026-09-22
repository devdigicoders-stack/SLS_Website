import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare, Package } from 'lucide-react';
import toast from 'react-hot-toast';

export default function EnquiryModal({ isOpen, onClose, product = null, inquiryType = "Product Quotation" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    company: '',
    inquiryFor: product ? product.brandName : inquiryType,
    orderQuantity: 'Commercial Batch (5,000+ Units)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill required fields (Name, Phone, Email)!");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Thank you ${formData.name}! Your enquiry for "${formData.inquiryFor}" has been recorded. Our Pharma Sales Specialist will reach out within 2 hours.`,
        { duration: 5000, icon: '💊' }
      );
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pharma-600 text-white rounded-xl">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">
                {product ? `Request Quote for ${product.brandName}` : 'Pharma Business & Franchise Enquiry'}
              </h3>
              <p className="text-xs text-pharma-200 font-medium font-body">
                {product ? product.genericName : 'Connect with our B2B Commercial & Formulation Division'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 font-body">
          {product && (
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl flex items-center gap-3 text-xs text-slate-700">
              <span className="font-bold text-teal-900 bg-teal-200/60 px-2 py-0.5 rounded font-heading">Selected Drug:</span>
              <span className="font-semibold">{product.brandName}</span>
              <span className="text-slate-400">|</span>
              <span className="truncate">{product.packaging}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Kumar / Mr. Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                Phone / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  type="email"
                  required
                  placeholder="name@pharmadistributor.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                City & State <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  required
                  placeholder="e.g. Lucknow, Uttar Pradesh"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                Enquiry Category
              </label>
              <select 
                value={formData.inquiryFor}
                onChange={(e) => setFormData({...formData, inquiryFor: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition bg-white"
              >
                {product ? (
                  <option value={product.brandName}>{product.brandName} - Specific Order</option>
                ) : null}
                <option value="PCD Pharma Franchise Opportunity">PCD Pharma Franchise (Monopoly Rights)</option>
                <option value="Third Party / Contract Manufacturing">Third-Party / Contract Manufacturing</option>
                <option value="Institutional & Hospital Bulk Supply">Institutional / Hospital Bulk Supply</option>
                <option value="Export & International Distribution">Export & International Supply</option>
                <option value="Product Price List & Samples">Request Complete Price List & Sample Kit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                Anticipated Quantity
              </label>
              <select 
                value={formData.orderQuantity}
                onChange={(e) => setFormData({...formData, orderQuantity: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition bg-white"
              >
                <option value="Sample / Starter Trial Pack">Sample Trial / Trial Batch</option>
                <option value="Small Commercial (1,000 - 5,000 Units)">Small Commercial (1,000 - 5,000 Units)</option>
                <option value="Medium Commercial (5,000 - 20,000 Units)">Medium Commercial (5,000 - 20,000 Units)</option>
                <option value="Large Commercial (20,000+ Units)">Large Commercial (20,000+ Units)</option>
                <option value="Regular Monthly Contract">Regular Monthly Supply Contract</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
              Message / Specific Composition Requirements
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <textarea 
                rows="3"
                placeholder="Mention any target quantities, delivery timeline, custom packaging preferences or drug license details..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none transition resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WHO-GMP Quality Assured • 100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition font-heading"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-pharma-600 hover:bg-pharma-700 rounded-xl shadow-sm transition disabled:opacity-50 font-heading"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

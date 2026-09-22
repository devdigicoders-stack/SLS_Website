import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  User, 
  Sparkles,
  Award
} from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { COMPANY_INFO } from '../data/pharmaData';
import toast from 'react-hot-toast';
import contactVideo from '../assest/contact.mp4';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    interest: 'PCD Pharma Franchise Monopoly Rights',
    experience: '3-5 Years in Pharma Sales',
    investmentCapacity: '₹ 2 - 5 Lakhs',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in required fields (Name, Phone, Email)!");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Thank you ${formData.name}! Your enquiry for "${formData.interest}" in ${formData.city || 'your region'} has been submitted. Our Zonal Manager will contact you promptly.`,
        { duration: 5000, icon: '💊' }
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        interest: 'PCD Pharma Franchise Monopoly Rights',
        experience: '3-5 Years in Pharma Sales',
        investmentCapacity: '₹ 2 - 5 Lakhs',
        message: ''
      });
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = `Hello SLS Pharma team, I am interested in inquiring about your pharma products and PCD franchise opportunities.`;
    window.open(`https://wa.me/919140967607?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header with Background Video (contact.mp4) in Loop */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[62vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800 mb-8 sm:mb-12">
        {/* Full-Banner Background Video in Loop without controls */}
        <video
          src={contactVideo}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 scale-105 sm:scale-100 transition-transform duration-700"
        />

        {/* Clean Tint Overlay - Balanced so animation is clearly visible on mobile */}
        <div className="absolute inset-0 bg-navy-950/65 sm:bg-navy-950/80 z-10 backdrop-blur-[0.5px]"></div>

        {/* Centered Neat & Clean Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-pharma-300 text-xs font-bold font-heading shadow-md">
            <MessageSquare className="w-4 h-4 text-pharma-400" />
            <span>CONNECT WITH OUR COMMERCIAL DIVISION</span>
          </div>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-sm">
            Get In Touch For Formulations <br className="hidden sm:inline" />
            <span className="text-pharma-400">& PCD Franchise Rights</span>
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed font-body max-w-2xl mx-auto drop-shadow-xs">
            Partner with India's fastest growing WHO-GMP certified pharmaceutical company. Reach our corporate team or submit your business requirement below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main Grid: Contact Info (Left) + Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Direct Info & Addresses */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-soft-lg border border-slate-800 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">
                Corporate Office & Helpdesk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-body">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-900 text-pharma-400 border border-slate-800 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block font-heading">Headquarters:</span>
                    <span className="text-slate-300 leading-snug">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-900 text-pharma-400 border border-slate-800 rounded-xl shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block font-heading">Manufacturing Plant:</span>
                    <span className="text-slate-300 leading-snug">{COMPANY_INFO.manufacturingUnit}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 text-pharma-400 border border-slate-800 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block font-heading">Direct Support:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-pharma-300 font-bold hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 text-pharma-400 border border-slate-800 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block font-heading">Sales & Franchise:</span>
                    <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="text-pharma-300 font-bold hover:underline">
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2.5 bg-slate-900 text-pharma-400 border border-slate-800 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block font-heading">Operating Hours:</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition flex items-center justify-center gap-2 font-heading"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 91409 67607)</span>
                </button>
              </div>
            </div>

            {/* Quality & Assurance Banner */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft-sm space-y-3 font-body">
              <div className="flex items-center gap-2 text-pharma-700 font-bold text-xs font-heading">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Compromise Compliance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All franchise orders receive full marketing collateral support including Visual Aids, Doctor Reminder Cards, Catch Covers, MR Bags, and Certificate of Analysis (COA).
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry / Lead Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-soft-lg border border-slate-200">
            <div className="mb-6">
              <h3 className="font-heading font-black text-2xl text-slate-900">
                Send Direct Business Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-body">
                Fill this form to receive our latest product price list, samples, and franchise availability for your district.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Ramesh Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    City & State <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Varanasi, UP"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Business Model of Interest
                  </label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none bg-white"
                  >
                    <option value="PCD Pharma Franchise Monopoly Rights">PCD Pharma Franchise (Monopoly Rights)</option>
                    <option value="Third Party Contract Manufacturing">Third-Party / Contract Manufacturing</option>
                    <option value="Hospital & Government Supply">Hospital & Institutional Supply</option>
                    <option value="Export & International Trade">Export & International Supply</option>
                    <option value="Product Price List & Samples">Request Product Catalogue & Samples</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                    Investment Budget
                  </label>
                  <select 
                    value={formData.investmentCapacity}
                    onChange={(e) => setFormData({...formData, investmentCapacity: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none bg-white"
                  >
                    <option value="₹ 50,000 - ₹ 2 Lakhs">₹ 50,000 - ₹ 2 Lakhs (Starter)</option>
                    <option value="₹ 2 - 5 Lakhs">₹ 2 - 5 Lakhs (Standard District)</option>
                    <option value="₹ 5 - 15 Lakhs">₹ 5 - 15 Lakhs (Multi-District)</option>
                    <option value="₹ 15 Lakhs+">₹ 15 Lakhs+ (State Level / Third Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-heading">
                  Message / Specific Formulations Desired
                </label>
                <textarea 
                  rows="4"
                  placeholder="Specify targeted therapeutic segments (e.g. Antibiotics, Gastro, Pain Relief), targeted districts, or drug license availability..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your information is 100% confidential.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-pharma-600 hover:bg-pharma-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2 font-heading"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Business Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Location & Map Preview Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft-sm overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-heading font-bold text-lg text-slate-900">
              <MapPin className="w-5 h-5 text-pharma-600" />
              <span>Headquarters Location (Lucknow, UP)</span>
            </div>
            <span className="text-xs font-semibold text-pharma-600 bg-pharma-50 px-3 py-1 rounded-full border border-pharma-200 font-heading">
              SLS Pharma Manufacturing Plant
            </span>
          </div>

          <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center">
            {/* Embedded Google Map */}
            <iframe 
              title="SLS Pharma Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113876.36881775795!2d80.88720835!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd79b9b52205%3A0x6b8f36c4ff435422!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

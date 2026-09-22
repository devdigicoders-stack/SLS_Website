import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  Clock
} from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { COMPANY_INFO, CATEGORIES, CERTIFICATIONS } from '../../data/pharmaData';
import toast from 'react-hot-toast';

export default function Footer({ onOpenEnquiry }) {
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      toast.success("Thank you for subscribing to SLS Pharma B2B Product Updates & Price Lists!", {
        icon: '📬'
      });
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Top Certifications Strip */}
      <div className="border-b border-slate-800 bg-navy-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-850 border border-slate-800">
                <div className="p-1.5 rounded-lg bg-slate-800 text-pharma-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight font-heading">{cert.badge}</p>
                  <p className="text-[10px] text-slate-400 truncate font-body">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pharma-600 p-2 shadow-sm text-white flex items-center justify-center">
                <Pill className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  SLS <span className="text-pharma-400">Pharma</span>
                </span>
                <span className="text-[10px] ml-2 font-bold px-1.5 py-0.5 bg-slate-800 text-pharma-300 rounded border border-slate-700 uppercase tracking-wider">
                  LIFESCIENCES
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-body">
              {COMPANY_INFO.description}
            </p>

            {/* Quality Statement */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3 font-body">
              <Award className="w-5 h-5 text-pharma-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block font-heading">Quality Assurance Promise</span>
                <span className="text-[11px] text-slate-400">100% HPLC/GC tested active pharmaceutical ingredients with complete batch analytical documentation.</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <Link to="/" className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pharma-500" />
                  <span>Home Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pharma-500" />
                  <span>About Our Company</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pharma-500" />
                  <span>Pharma Products Showcase</span>
                </Link>
              </li>
              <li>
                <Link to="/facility" className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pharma-500" />
                  <span>Manufacturing Facility</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pharma-500" />
                  <span>Contact & Enquiry</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => onOpenEnquiry(null, "PCD Pharma Franchise")} 
                  className="text-pharma-400 font-bold hover:underline flex items-center gap-1.5 pt-1 font-heading"
                >
                  <ArrowRight className="w-3 h-3 text-pharma-400" />
                  <span>PCD Franchise Opportunity</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Segments */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-2.5">
              Therapeutic Segments
            </h4>
            <ul className="space-y-2.5 text-xs font-body">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.slug}`} 
                    className="text-slate-400 hover:text-pharma-300 transition flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.2 rounded font-mono border border-slate-800">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate & Manufacturing Unit Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-2.5">
              Corporate Desk
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pharma-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pharma-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-pharma-300 font-semibold">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pharma-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-pharma-300 truncate">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-pharma-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 font-heading">
                B2B Price List Alerts
              </p>
              <div className="flex gap-1">
                <input 
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-pharma-500 font-body"
                />
                <button 
                  type="submit"
                  className="p-2 bg-pharma-600 hover:bg-pharma-700 text-white rounded-lg transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Credit bar with digicoders.in link */}
      <div className="border-t border-slate-800 bg-navy-950 py-5 text-xs text-slate-400 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed & Developed with <span className="text-rose-500">♥</span> by</span>
            <a 
              href="https://digicoders.in" 
              target="_blank" 
              rel="noreferrer"
              className="text-pharma-400 font-bold hover:text-pharma-300 hover:underline inline-flex items-center gap-1 transition"
            >
              <span>#TeamDigiCoders</span>
              <span className="text-[11px] text-slate-400 font-mono font-normal">(digicoders.in)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

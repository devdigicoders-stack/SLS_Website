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
import slsLogo from '../../assest/images/product-9.jpeg';

export default function Footer({ onOpenEnquiry }) {
  const [emailInput, setEmailInput] = useState('');

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Story */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-3 group">
              <div className="h-14 sm:h-16 w-auto flex items-center justify-center p-2 rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src={slsLogo}
                  alt="SLS Innovation For Life"
                  className="h-full w-auto object-contain max-h-14 sm:max-h-16"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4 font-body">
              {COMPANY_INFO.description}
            </p>

            {/* Quality Statement */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-300 flex items-start gap-3.5 font-body">
              <Award className="w-6 h-6 text-pharma-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block font-heading text-sm">Quality Assurance Promise</span>
                <span className="text-xs text-slate-400 leading-relaxed">100% HPLC/GC tested active pharmaceutical ingredients with complete batch analytical documentation.</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pharma-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-800">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link to="/" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-pharma-500" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Segments */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-3">
              Therapeutic Segments
            </h4>
            <ul className="space-y-3 text-sm font-body">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    onClick={handleScrollToTop}
                    className="text-slate-400 hover:text-pharma-300 transition flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-pharma-500/70 group-hover:text-pharma-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate & Manufacturing Unit Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider border-l-2 border-pharma-400 pl-3">
              Corporate Desk
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300 font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pharma-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pharma-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-pharma-300 font-semibold">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pharma-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-pharma-300 truncate">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-pharma-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
        
          </div>
        </div>
      </div>

      {/* Bottom Legal & Credit bar with digicoders.in link */}
      <div className="border-t border-slate-800 bg-navy-950 py-5 text-xs text-slate-400 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex items-center gap-3 text-slate-500">
              <Link to="/privacy-policy" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition hover:underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-conditions" onClick={handleScrollToTop} className="text-slate-400 hover:text-pharma-300 transition hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted by</span>
            <a
              href="https://digicoders.in"
              target="_blank"
              rel="noreferrer"
              className="text-pharma-400 font-bold hover:text-pharma-300 hover:underline inline-flex items-center gap-1 transition"
            >
              <span>Team DigiCoders</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

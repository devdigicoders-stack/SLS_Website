import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  FileText, 
  ChevronDown, 
  Sparkles, 
  Pill, 
  ArrowRight,
  Download,
  Building2
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../../data/pharmaData';
import toast from 'react-hot-toast';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleDownloadBrochure = () => {
    toast.success("Downloading SLS Pharma Complete Product Glossary & Price List...", {
      icon: '📄',
      duration: 4000
    });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Pharma Products", path: "/products", badge: "350+" },
    { name: "Manufacturing Facility", path: "/facility" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top Notification & Quick Contact Bar */}
        

      {/* Main Clean Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md py-3 border-b border-slate-200" 
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-pharma-600 p-2 shadow-sm text-white flex items-center justify-center shrink-0">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                    SLS <span className="text-pharma-600">Pharma</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 bg-pharma-50 text-pharma-700 rounded border border-pharma-200 uppercase tracking-wider">
                    LIFESCIENCES
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                  WHO-GMP Formulations
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-1.5 relative font-heading ${
                      isActive 
                        ? "text-pharma-700 bg-pharma-50 shadow-2xs font-extrabold" 
                        : "text-slate-700 hover:text-pharma-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-pharma-600 text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Button (Desktop / Tablet) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Search Toggle */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-slate-600 hover:text-pharma-600 hover:bg-slate-100 rounded-xl transition"
                title="Search Medicines"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Quotation CTA */}
              <button
                onClick={() => onOpenEnquiry(null, "Business Enquiry")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-pharma-600 hover:bg-pharma-700 shadow-sm transition font-heading"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Request Quotation</span>
              </button>
            </div>

            {/* Mobile Menu trigger only (Search icon removed on mobile) */}
            <div className="flex items-center sm:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-pharma-600 hover:bg-slate-100 rounded-xl transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Quick Search Popdown Bar */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input 
                    type="text"
                    autoFocus
                    placeholder="Search medicines by brand name, generic salt, or composition (e.g., Amoxicillin, Pantoprazole)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-pharma-500 focus:border-pharma-500 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-pharma-600 text-white rounded-xl text-sm font-bold hover:bg-pharma-700 transition"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold ${
                      isActive 
                        ? "bg-pharma-50 text-pharma-700" 
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-pharma-600 text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry(null, "PCD Pharma Franchise");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-pharma-600 hover:bg-pharma-700 shadow-sm"
              >
                <span>Request Quotation & Franchise</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadBrochure}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100"
              >
                <Download className="w-4 h-4 text-pharma-600" />
                <span>Download Product Glossary (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

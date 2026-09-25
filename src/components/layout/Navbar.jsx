import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ShieldCheck, 
  Pill, 
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/pharmaData';
import toast from 'react-hot-toast';
import slsLogo from '../../assest/images/product-9.jpeg';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
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
    toast.success("Downloading SLS Pharma Product Catalogue & Price List...", {
      icon: '📄',
      duration: 3500
    });
  };

  const navLinks = [
    { name: "Home Page", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top Notification / Quick Info Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block font-body">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-pharma-400" />
              <span className="font-semibold text-slate-200">WHO-GMP & ISO 9001:2015</span> Certified Plant
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-pharma-400" />
              <span>Biotech Park, Lucknow (UP)</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-pharma-300 transition text-slate-200 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-pharma-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-pharma-300 transition text-slate-400"
            >
              <Mail className="w-3.5 h-3.5 text-pharma-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header (Clean, Spacious & Legible) */}
      <header 
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled 
            ? "shadow-md py-2.5 sm:py-3 border-b border-slate-200" 
            : "py-3 sm:py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with SLS Official Logo Image - Clean tightly cropped */}
            <Link to="/" className="flex items-center group shrink-0 py-0.5">
              <img 
                src={slsLogo} 
                alt="SLS Innovation For Life" 
                className="h-11 sm:h-12 md:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-103"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-5 py-2.5 rounded-xl text-[15px] sm:text-[16px] font-bold transition-all duration-200 font-heading ${
                      isActive 
                        ? "text-pharma-700 bg-pharma-50 border border-pharma-200 shadow-2xs font-extrabold" 
                        : "text-slate-700 hover:text-pharma-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu trigger */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-800 hover:text-pharma-600 hover:bg-slate-100 rounded-xl transition border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
              </button>
            </div>
          </div>
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
                <span>Download Product Catalogue (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FacilityPage from './pages/FacilityPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import QuickViewModal from './components/common/QuickViewModal';
import EnquiryModal from './components/common/EnquiryModal';

// Scroll to top automatically when location pathname changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Global modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [enquiryType, setEnquiryType] = useState("Product Quotation");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const handleOpenEnquiry = (product = null, type = "Product Quotation") => {
    setEnquiryProduct(product);
    setEnquiryType(type);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-pharma-500 selection:text-white">
      <ScrollToTop />
      
      {/* Toast Notification Container */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#0f172a',
            color: '#fff',
            borderRadius: '16px',
            fontSize: '13px',
            fontWeight: '600',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }}
      />

      {/* Main Header / Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* App Routes */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onQuickView={handleOpenQuickView} onEnquire={handleOpenEnquiry} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onEnquire={handleOpenEnquiry} />} 
          />
          <Route 
            path="/products" 
            element={<ProductsPage onQuickView={handleOpenQuickView} onEnquire={handleOpenEnquiry} />} 
          />
          <Route 
            path="/products/:slug" 
            element={<ProductDetailPage onQuickView={handleOpenQuickView} onEnquire={handleOpenEnquiry} />} 
          />
          <Route 
            path="/facility" 
            element={<FacilityPage onEnquire={handleOpenEnquiry} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="*" 
            element={<NotFoundPage />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Modals */}
      <QuickViewModal 
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onEnquire={(prod) => handleOpenEnquiry(prod, "Product Quick Quotation")}
      />

      <EnquiryModal 
        product={enquiryProduct}
        inquiryType={enquiryType}
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
      />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/pharmaData';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header with matching Dark Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800 mb-6 sm:mb-8">
        {/* Crystal Clear Balanced Tint Overlay */}
        <div className="absolute inset-0 bg-navy-950/70 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center space-y-3.5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-pharma-500/40 text-pharma-300 text-[11px] sm:text-xs font-bold font-heading tracking-wide sm:tracking-wider shadow-lg max-w-full">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
            <span className="truncate">DATA PRIVACY & REGULATORY COMPLIANCE</span>
          </div>

          <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
            Privacy Policy & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
              Data Protection
            </span>
          </h1>

          <p className="text-slate-100 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
            Effective for all {COMPANY_INFO.name} digital portals, B2B product distribution channels, and commercial franchise enquiries.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft-md border border-slate-200 space-y-8 text-slate-700 font-body text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              1. Introduction & Scope
            </h2>
            <p>
              Welcome to <strong>{COMPANY_INFO.name}</strong>. We are dedicated to maintaining the highest standards of confidentiality, transparency, and data integrity for all our partners, distributors, PCD franchise seekers, healthcare professionals, and website visitors.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard your personal and commercial business information when you interact with our website, request product catalogues, inquire about third-party contract manufacturing, or submit franchise applications.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              2. Information We Collect
            </h2>
            <p>We may collect information you provide directly to us through enquiry forms, telephone calls, or emails, including:</p>
            <ul className="space-y-2 pl-4 list-disc text-slate-600">
              <li><strong>Contact Information:</strong> Full name, corporate email address, mobile phone / WhatsApp number, and postal address.</li>
              <li><strong>Commercial Information:</strong> Targeted franchise territory / district, Drug License Number (DL), GSTIN, pharmaceutical marketing experience, and investment budget.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and browsing behaviour collected via cookies for website performance optimization.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              3. How We Use Your Information
            </h2>
            <p>Your data is processed strictly for legitimate commercial and regulatory purposes, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pharma-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Processing PCD Franchise & Monopoly availability inquiries.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pharma-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Dispatching technical monographs, COA, and quotation sheets.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pharma-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Fulfilling third-party contract manufacturing batches and invoices.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pharma-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Regulatory compliance with Drug Controller & WHO-GMP guidelines.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              4. Data Protection & Confidentiality
            </h2>
            <p>
              We implement industry-grade encryption, secure server firewalls, and restricted employee access protocols. <strong>We do NOT sell, rent, or trade your personal or commercial contact information to third-party telemarketers or advertisers.</strong>
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              5. Contact Our Privacy Officer
            </h2>
            <p>
              If you have any questions or wish to request data modification or deletion, please contact our administrative desk:
            </p>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pharma-600" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pharma-600" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pharma-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

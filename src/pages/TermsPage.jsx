import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, AlertCircle, Scale, ArrowLeft, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/pharmaData';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header with matching Dark Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-navy-950 text-white border-b border-slate-800 mb-6 sm:mb-8">
        {/* Crystal Clear Balanced Tint Overlay */}
        <div className="absolute inset-0 bg-navy-950/70 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center space-y-3.5 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-pharma-500/40 text-pharma-300 text-[11px] sm:text-xs font-bold font-heading tracking-wide sm:tracking-wider shadow-lg max-w-full">
            <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pharma-400 shrink-0" />
            <span className="truncate">LEGAL & COMMERCIAL TERMS</span>
          </div>

          <h1 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
            Terms & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-300 via-teal-200 to-emerald-300 drop-shadow-sm">
              Conditions
            </span>
          </h1>

          <p className="text-slate-100 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body drop-shadow-sm font-medium px-2 sm:px-0">
            Governing B2B commercial operations, PCD franchise distribution agreements, and contract manufacturing relationships.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft-md border border-slate-200 space-y-8 text-slate-700 font-body text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing any services on this website ({COMPANY_INFO.name}), or by submitting commercial PCD franchise / third-party manufacturing enquiries, you acknowledge that you have read, understood, and agree to be bound by the following Terms and Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              2. Pharmaceutical Regulatory & Licensing Requirements
            </h2>
            <p>
              Distribution, stockist, and PCD franchise agreements are entered into exclusively with registered pharmaceutical businesses holding valid:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-slate-600">
              <li><strong>Drug License (Form 20B / Form 21B)</strong> issued by the competent State / Central Licensing Authority.</li>
              <li><strong>Valid Goods & Services Tax Registration (GSTIN)</strong>.</li>
              <li>Compliance with the Drugs and Cosmetics Act, 1940 and the Drugs and Cosmetics Rules, 1945.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              3. PCD Franchise Monopoly Rights & Territory
            </h2>
            <p>
              Monopoly marketing rights for designated districts are allotted subject to formal mutual agreement and initial target dispatch commitments. {COMPANY_INFO.name} reserves the right to review territorial exclusivity in case of prolonged non-performance or unauthorized spill-over into adjacent territories.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              4. Quality Compliance & Batch Documentation
            </h2>
            <p>
              All formulations are manufactured in WHO-GMP and ISO 9001:2015 certified units. Every batch is released with a Certificate of Analysis (COA) conforming to Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), or United States Pharmacopeia (USP) specifications.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              5. Intellectual Property Rights
            </h2>
            <p>
              All brand names, trademarks, logos, visual aid designs, package graphics, and formulation monographs displayed on this website are the proprietary property of {COMPANY_INFO.name}. Unauthorized duplication or deceptive imitation is strictly prohibited under Indian trademark law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              6. Medical Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
              <strong>Notice:</strong> Product monographs and chemical compositions on this website are intended exclusively for pharmaceutical distributors, PCD partners, medical practitioners, and chemists. This website does not offer direct-to-consumer self-medication advice.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 border-l-4 border-pharma-500 pl-3">
              7. Jurisdiction & Dispute Resolution
            </h2>
            <p>
              All legal agreements, commercial transactions, and disputes shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in <strong>Lucknow, Uttar Pradesh, India</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

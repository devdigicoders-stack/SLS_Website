import React, { useState } from 'react';
import { ChevronDown, Star, MessageSquareQuote, HelpCircle, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../../data/pharmaData';

export default function TestimonialsFaq({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      name: "Dr. Arvind Saxena",
      role: "Chief Physician & Hospital Director, Lucknow",
      comment: "We have been prescribing SLS Pharma's CLAVANEX-625 and PANCON-DSR across our inpatient departments. The dissolution rate, bio-efficacy, and batch consistency are truly outstanding.",
      rating: 5,
      location: "Uttar Pradesh"
    },
    {
      name: "Rameshwar Patel",
      role: "PCD Franchise Distributor, Gujarat Zone",
      comment: "Best PCD Pharma company to partner with! Monopoly rights are strictly honored, packaging in Alu-Alu is world-class, and dispatch reaches our godown within 36 hours of ordering.",
      rating: 5,
      location: "Ahmedabad, Gujarat"
    },
    {
      name: "Sanjay Singhal",
      role: "Third-Party Brand Owner, Delhi NCR",
      comment: "Their contract manufacturing facility is unmatched. From artwork approval to final release with comprehensive HPLC Certificate of Analysis (COA), the turnaround was within 22 days.",
      rating: 5,
      location: "New Delhi"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-full mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>PARTNER TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Trusted By 750+ Doctors, <br className="hidden sm:inline" />
            <span className="text-pharma-600">Hospitals & PCD Franchisees</span>
          </h2>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((testi, i) => (
            <div 
              key={i}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-card-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(testi.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-pharma-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{testi.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pharma-600 text-white font-bold text-sm flex items-center justify-center shadow-xs font-heading">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 font-heading">{testi.name}</h4>
                  <p className="text-[11px] text-slate-500 font-body">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 text-xs font-bold rounded-full border border-teal-200 font-heading">
              <HelpCircle className="w-3.5 h-3.5 text-pharma-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl font-heading font-black text-slate-900 tracking-tight leading-snug">
              Got Questions About Our <br />
              <span className="text-pharma-600">Pharma Formulations & PCD?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
              Find answers to commonly asked questions regarding batch manufacturing, minimum order quantities (MOQ), monopoly rights, and dispatch protocols.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry(null, "General FAQ Enquiry")}
                className="px-5 py-3 bg-pharma-600 hover:bg-pharma-700 text-white font-bold text-xs rounded-xl shadow-sm transition font-heading"
              >
                Ask A Different Question
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-slate-900 hover:text-pharma-700 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-pharma-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

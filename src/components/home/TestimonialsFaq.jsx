import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, MessageSquareQuote, HelpCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FAQS } from '../../data/pharmaData';

export default function TestimonialsFaq({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    },
    {
      name: "Dr. Meenakshi Sundaram",
      role: "Senior Consultant Gynecologist, Chennai",
      comment: "The nutraceutical formulations like VITALIFE-9G and NEUROCOB-CD3 show remarkable clinical improvement in patient vitality and bone density parameters. Extremely trustworthy quality.",
      rating: 5,
      location: "Tamil Nadu"
    },
    {
      name: "Vikramjit Singh",
      role: "Ethical Pharma Distributor, Punjab",
      comment: "Zero breakage packaging, 100% genuine DCGI approved drugs, and regular supply continuity. We have scaled our regional turnover by 3x within 18 months of association.",
      rating: 5,
      location: "Ludhiana, Punjab"
    }
  ];

  // Auto slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold rounded-full mb-2.5 font-heading">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>PARTNER TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Trusted By 750+ Doctors, <br className="hidden sm:inline" />
            <span className="text-pharma-600">Hospitals & PCD Franchisees</span>
          </h2>
        </div>

        {/* Testimonials Sliding Carousel */}
        <div className="relative max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 sm:p-12 border border-slate-200/90 shadow-soft-lg relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex text-amber-400 gap-1.5">
                {[...Array(testimonials[currentSlide].rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <MessageSquareQuote className="w-10 h-10 text-pharma-200" />
            </div>

            <div className="min-h-[110px] sm:min-h-[90px] flex items-center">
              <p className="text-base sm:text-xl text-slate-800 leading-relaxed font-body italic font-medium">
                "{testimonials[currentSlide].comment}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pharma-600 text-white font-extrabold text-base flex items-center justify-center shadow-md font-heading shrink-0">
                  {testimonials[currentSlide].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-body">
                    {testimonials[currentSlide].role} ({testimonials[currentSlide].location})
                  </p>
                </div>
              </div>

              {/* Slider Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white hover:bg-pharma-50 text-slate-700 hover:text-pharma-700 border border-slate-200 shadow-2xs transition"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white hover:bg-pharma-50 text-slate-700 hover:text-pharma-700 border border-slate-200 shadow-2xs transition"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-pharma-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
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

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import QualityAssurance from '../components/home/QualityAssurance';
import FacilityPreview from '../components/home/FacilityPreview';
import TestimonialsFaq from '../components/home/TestimonialsFaq';

export default function HomePage({ onQuickView, onEnquire }) {
  return (
    <div className="min-h-screen">
      <HeroSection onOpenEnquiry={onEnquire} />
      <StatsSection />
      <CategoryGrid />
      <QualityAssurance />
      <FacilityPreview />
      <TestimonialsFaq onOpenEnquiry={onEnquire} />
    </div>
  );
}

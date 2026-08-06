import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import HealthBenefits from '../components/HealthBenefits';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';
import AreasWeServe from '../components/AreasWeServe';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ onOpenBooking }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection onOpenBooking={() => navigate('/book')} />

      {/* Trust Badges Marquee */}
      <TrustBadges />

      {/* Why Choose Us */}
      <WhyChooseUs onOpenBooking={() => navigate('/book')} />

      {/* Featured Services */}
      <ServicesSection onOpenBooking={() => navigate('/book')} />

      {/* 5-Step Process */}
      <ProcessSection onOpenBooking={() => navigate('/book')} />

      {/* Health & Family Safety */}
      <HealthBenefits onOpenBooking={() => navigate('/book')} />

      {/* Before / After Comparison */}
      <BeforeAfterSlider />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Testimonials */}
      <Testimonials />

      {/* Areas We Serve */}
      <AreasWeServe onOpenBooking={() => navigate('/book')} />
    </div>
  );
}

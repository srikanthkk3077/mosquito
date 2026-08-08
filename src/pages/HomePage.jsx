import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ServiceWarrantySection from '../components/ServiceWarrantySection';
import MosquitoSpeciesRadar from '../components/MosquitoSpeciesRadar';
import MosquitoRiskCalculator from '../components/MosquitoRiskCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import HealthBenefits from '../components/HealthBenefits';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';
import AreasWeServe from '../components/AreasWeServe';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* 1. Full Screen Video Hero Section */}
      <HeroSection onOpenBooking={() => navigate('/book')} />

      {/* 2. Emergency 24x7 Rapid Dispatch Banner */}

      {/* 3. Trust Badges (Government Licensed, Safe Chemicals, 90-Day Warranty) */}
      {/* <TrustBadges /> */}

      {/* 4. Mosquito Species Threat Radar */}
      {/* <MosquitoSpeciesRadar /> */}

      {/* 5. Interactive Mosquito Risk Estimator Calculator */}
      {/* <MosquitoRiskCalculator /> */}

      {/* 6. Why Choose Us */}
      <WhyChooseUs onOpenBooking={() => navigate('/book')} />

      {/* 7. Dedicated Service Warranty & Protection Guarantee Section */}
      {/* <ServiceWarrantySection onOpenBooking={() => navigate('/book')} /> */}

      {/* 8. 13 Services Catalog */}
      <ServicesSection onOpenBooking={() => navigate('/book')} />

      {/* 9. 5-Step Vector Process */}
      <ProcessSection onOpenBooking={() => navigate('/book')} />

      {/* 10. Health & Protection Benefits */}
      <HealthBenefits onOpenBooking={() => navigate('/book')} />

      {/* 11. Interactive Before / After Slider */}
      <BeforeAfterSlider />

      {/* 12. Stats Counter Bar */}
      {/* <StatsCounter /> */}

      {/* 13. Customer Reviews */}
      {/* <Testimonials /> */}

      {/* 14. Areas We Serve */}
      <AreasWeServe onOpenBooking={() => navigate('/book')} />
    </div>
  );
}

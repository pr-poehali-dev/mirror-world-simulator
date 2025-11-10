import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import WorldVisualization from '@/components/WorldVisualization';
import CareerSystem from '@/components/CareerSystem';
import BuildingShowcase from '@/components/BuildingShowcase';
import MirrorFilmsSection from '@/components/MirrorFilmsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E1A] via-[#1A1F2C] to-[#0A0E1A] text-white overflow-x-hidden">
      <HeroSection scrollY={scrollY} />
      <WorldVisualization />
      <FeaturesGrid />
      <CareerSystem />
      <BuildingShowcase />
      <MirrorFilmsSection />
      <Footer />
    </div>
  );
};

export default Index;

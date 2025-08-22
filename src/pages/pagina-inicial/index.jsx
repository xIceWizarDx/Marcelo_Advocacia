import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PracticeAreasSection from './components/PracticeAreasSection';
import FAQPreviewSection from './components/FAQPreviewSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import StickyCTABar from './components/StickyCTABar';
import Footer from '../../components/ui/Footer';

const PaginaInicial = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <FAQPreviewSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <StickyCTABar />
      <Footer />
    </div>
  );
};

export default PaginaInicial;

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProfessionalJourney from './components/ProfessionalJourney';
import MethodologySection from './components/MethodologySection';
import CredentialsSection from './components/CredentialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from '../../components/ui/Footer';

const SobreMarceloBaia = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Advocacia Especializada em Rondonópolis/MT</title>
        <meta 
          name="description" 
          content="Conheça a trajetória profissional de Marcelo Baía, advogado especialista em Direito Civil, Consumidor, Família e Empresarial em Rondonópolis/MT. Mais de 8 anos de experiência com atendimento humanizado." 
        />
        <meta name="keywords" content="advogado rondonópolis, marcelo baía, direito civil, direito consumidor, direito família, direito empresarial, oab mt" />
        <meta property="og:title" content="Sobre Nós - Advocacia Especializada em Rondonópolis/MT" />
        <meta property="og:description" content="Conheça a trajetória profissional de Marcelo Baía, advogado especialista com mais de 8 anos de experiência em Rondonópolis/MT." />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://marcelobaia.adv.br/sobre-marcelo-baia" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Marcelo Baía Advocacia",
            telephone: "+55 66 99911-1314",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Tiradentes, 1888",
              addressLocality: "Rondonópolis",
              addressRegion: "MT",
              postalCode: "78700-028",
              addressCountry: "BR",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              description:
                "Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.",
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection 
            onContactClick={handleContactClick}
            onWhatsAppClick={handleWhatsAppClick}
          />

          {/* Professional Journey */}
          <ProfessionalJourney />

          {/* Methodology */}
          <MethodologySection />

          {/* Credentials */}
          <CredentialsSection />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Contact Section */}
          <div id="contact-section">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SobreMarceloBaia;
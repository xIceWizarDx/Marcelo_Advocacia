import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProfessionalJourney from './components/ProfessionalJourney';
import MethodologySection from './components/MethodologySection';
import CredentialsSection from './components/CredentialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const AboutMarceloBaia = () => {
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
        <title>Sobre Marcelo Baía - Advogado Especialista em Rondonópolis/MT</title>
        <meta 
          name="description" 
          content="Conheça a trajetória profissional de Marcelo Baía, advogado especialista em Direito Civil, Consumidor, Família e Empresarial em Rondonópolis/MT. Mais de 8 anos de experiência com atendimento humanizado." 
        />
        <meta name="keywords" content="advogado rondonópolis, marcelo baía, direito civil, direito consumidor, direito família, direito empresarial, oab mt" />
        <meta property="og:title" content="Sobre Marcelo Baía - Advogado Especialista em Rondonópolis/MT" />
        <meta property="og:description" content="Conheça a trajetória profissional de Marcelo Baía, advogado especialista com mais de 8 anos de experiência em Rondonópolis/MT." />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marcelobaia.adv.br/about-marcelo-ba-a" />
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
                "Atendimento mediante agendamento. Atendimento via WhatsApp é em tempo integral.",
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

        {/* Footer */}
        <footer className="bg-brand-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <h3 className="font-lora text-xl font-semibold mb-4">
                  Marcelo Baía Advocacia
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Assessoria jurídica clara e segura para decisões importantes da sua vida. 
                  Atendimento humanizado e comunicação transparente.
                </p>
                <p className="text-slate-400 text-xs">
                  OAB/MT 14.159-B
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>📍 Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028</p>
                  <p>📞 <a href="tel:+5566999111314" className="text-slate-300">(66) 99911-1314</a></p>
                  <p>💬 <a href="https://wa.me/5566999111314" target="_blank" rel="noopener noreferrer" className="text-slate-300">(66) 99911-1314</a></p>
                  <p>✉️ <a href="mailto:marcelobaiaadvogado@gmail.com" className="text-slate-300">marcelobaiaadvogado@gmail.com</a></p>
                  <p>🕒 Atendimento mediante agendamento. Atendimento via WhatsApp é em tempo integral.</p>
                </div>
              </div>

              {/* Areas */}
              <div>
                <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Direito Civil</li>
                  <li>• Direito do Consumidor</li>
                  <li>• Direito de Família</li>
                  <li>• Direito Empresarial</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © {new Date()?.getFullYear()} Marcelo Baía Advocacia. Todos os direitos reservados.
              </p>
              <p className="text-slate-500 text-xs mt-2">
                Este site está em conformidade com o Provimento 205/2021 da OAB e a LGPD.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                <a href="/privacy-policy" className="hover:text-white">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutMarceloBaia;
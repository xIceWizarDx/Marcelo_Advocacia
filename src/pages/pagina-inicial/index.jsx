import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PracticeAreasSection from './components/PracticeAreasSection';
import FAQPreviewSection from './components/FAQPreviewSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import StickyCTABar from './components/StickyCTABar';

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
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-slate-700 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-lora font-semibold text-lg">Marcelo Baía</h3>
                  <p className="text-slate-400 text-sm">Advocacia</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Assessoria jurídica clara e segura para decisões importantes.
                Atendimento humanizado online.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contato</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:contato@marcelobaia.adv.br" className="text-slate-400">contato@marcelobaia.adv.br</a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:+5566999111314" className="text-slate-400">(66) 99911-1314</a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-slate-400">Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8a2 2 0 100 4 2 2 0 000-4z"/>
                  </svg>
                  <span className="text-slate-400">Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.</span>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Informações</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>CNPJ: 34.362.076/0001-89</p>
                <p>OAB/MT: 14.159-B</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date()?.getFullYear()} Marcelo Baía Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaginaInicial;
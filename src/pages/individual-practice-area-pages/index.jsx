import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PracticeAreaHero from './components/PracticeAreaHero';
import ServiceBreakdown from './components/ServiceBreakdown';
import ContextualFAQ from './components/ContextualFAQ';
import CaseStudyApproach from './components/CaseStudyApproach';
import PracticeAreaSelector from './components/PracticeAreaSelector';
import ContactCTA from './components/ContactCTA';

const IndividualPracticeAreaPages = () => {
  const [searchParams] = useSearchParams();
  const [currentArea, setCurrentArea] = useState('civil');

  useEffect(() => {
    const area = searchParams?.get('area');
    if (area && ['civil', 'consumer', 'family', 'business']?.includes(area)) {
      setCurrentArea(area);
    }
  }, [searchParams]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  const getPageTitle = () => {
    const titles = {
      civil: 'Direito Civil - Marcelo Baía Advocacia',
      consumer: 'Direito do Consumidor - Marcelo Baía Advocacia',
      family: 'Direito de Família - Marcelo Baía Advocacia',
      business: 'Direito Empresarial - Marcelo Baía Advocacia'
    };
    return titles?.[currentArea] || titles?.civil;
  };

  const getPageDescription = () => {
    const descriptions = {
      civil: 'Especialista em Direito Civil em Rondonópolis/MT. Contratos, responsabilidade civil, direitos reais e questões patrimoniais com atendimento personalizado.',
      consumer: 'Defesa do Consumidor em Rondonópolis/MT. Proteção contra práticas abusivas, vícios de produtos, serviços bancários e direitos do consumidor.',
      family: 'Direito de Família em Rondonópolis/MT. Divórcio, guarda, pensão alimentícia e questões familiares com atendimento humanizado e discreto.',
      business: 'Direito Empresarial em Rondonópolis/MT. Consultoria jurídica para empresas, contratos comerciais, recuperação judicial e compliance.'
    };
    return descriptions?.[currentArea] || descriptions?.civil;
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={`${currentArea === 'civil' ? 'direito civil, contratos, responsabilidade civil' : currentArea === 'consumer' ? 'direito consumidor, defesa consumidor, vícios produtos' : currentArea === 'family' ? 'direito família, divórcio, guarda, pensão' : 'direito empresarial, consultoria jurídica, contratos comerciais'}, advogado rondonópolis, marcelo baía`} />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://marcelobaia.adv.br/individual-practice-area-pages?area=${currentArea}`} />
        <link rel="canonical" href={`https://marcelobaia.adv.br/individual-practice-area-pages?area=${currentArea}`} />
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
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          <PracticeAreaHero 
            practiceArea={currentArea}
            onWhatsAppClick={handleWhatsAppClick}
            onCallClick={handleCallClick}
          />
          
          <ServiceBreakdown practiceArea={currentArea} />
          
          <CaseStudyApproach practiceArea={currentArea} />
          
          <ContextualFAQ practiceArea={currentArea} />
          
          <ContactCTA practiceArea={currentArea} />
          
          <PracticeAreaSelector currentArea={currentArea} />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Contato</h3>
                <div className="space-y-3">
                  <p className="font-inter text-slate-300">
                    📍 Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028
                  </p>
                  <p className="font-inter text-slate-300">
                    📞 <a href="tel:+5566999111314" className="text-slate-300">(66) 99911-1314</a>
                  </p>
                  <p className="font-inter text-slate-300">
                    💬 <a href="https://wa.me/5566999111314" target="_blank" rel="noopener noreferrer" className="text-slate-300">(66) 99911-1314</a>
                  </p>
                  <p className="font-inter text-slate-300">
                    ✉️ <a href="mailto:marcelobaiaadvogado@gmail.com" className="text-slate-300">marcelobaiaadvogado@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Practice Areas */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Áreas de Atuação</h3>
                <div className="space-y-2">
                  <p className="font-inter text-slate-300">Direito Civil</p>
                  <p className="font-inter text-slate-300">Direito do Consumidor</p>
                  <p className="font-inter text-slate-300">Direito de Família</p>
                  <p className="font-inter text-slate-300">Direito Empresarial</p>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Informações Legais</h3>
                <div className="space-y-2">
                  <p className="font-inter text-slate-300 text-sm">
                    Marcelo Baía — OAB/MT 14.159-B
                  </p>
                  <p className="font-inter text-slate-300 text-sm">
                    Atendimento mediante agendamento
                  </p>
                  <p className="font-inter text-slate-300 text-sm">
                    Atendimento via WhatsApp é em tempo integral
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="font-inter text-slate-400 text-sm">
                © {new Date()?.getFullYear()} Marcelo Baía Advocacia. Todos os direitos reservados.
              </p>
              <p className="font-inter text-slate-400 text-sm mt-2">
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

export default IndividualPracticeAreaPages;
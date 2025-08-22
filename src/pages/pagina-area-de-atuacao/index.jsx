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
import Footer from '../../components/ui/Footer';

const PaginaAreaDeAtuacao = () => {
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
          <meta property="og:url" content={`https://marcelobaia.adv.br/pagina-area-de-atuacao?area=${currentArea}`} />
          <link rel="canonical" href={`https://marcelobaia.adv.br/pagina-area-de-atuacao?area=${currentArea}`} />
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
        <Footer />
      </div>
    </>
  );
};

export default PaginaAreaDeAtuacao;
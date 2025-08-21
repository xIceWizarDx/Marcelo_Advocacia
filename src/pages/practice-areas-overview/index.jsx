import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PracticeAreaCard from './components/PracticeAreaCard';
import FAQSection from './components/FAQSection';
import ConsultationWidget from './components/ConsultationWidget';
import PreventiveLegalSection from './components/PreventiveLegalSection';
import Icon from '../../components/AppIcon';

const PracticeAreasOverview = () => {
  const practiceAreas = [
    {
      title: "Direito Civil",
      description: "Soluções para questões contratuais, responsabilidade civil, direitos reais e obrigações entre particulares.",
      icon: "Scale",
      gradient: "bg-gradient-to-br from-brand-primary to-brand-secondary",
      scenarios: [
        "Problemas com contratos de compra e venda",
        "Questões de responsabilidade civil e danos",
        "Disputas sobre propriedade e posse",
        "Cobranças e inadimplência"
      ],
      commonCases: [
        "Contratos de compra e venda",
        "Locação residencial e comercial",
        "Responsabilidade civil por danos",
        "Usucapião e questões possessórias",
        "Cobranças judiciais e extrajudiciais"
      ],
      estimatedTimeline: "3 a 18 meses, dependendo da complexidade e necessidade de processo judicial",
      whatsappMessage: "Olá, preciso de ajuda com uma questão de Direito Civil. Poderia me orientar?"
    },
    {
      title: "Direito do Consumidor",
      description: "Defesa dos seus direitos como consumidor contra práticas abusivas e produtos/serviços defeituosos.",
      icon: "ShieldCheck",
      gradient: "bg-gradient-to-br from-brand-accent to-indigo-700",
      scenarios: [
        "Direitos do consumidor violados",
        "Produtos com defeito ou serviços mal prestados",
        "Cobranças indevidas e abusivas",
        "Problemas com planos de saúde e seguros"
      ],
      commonCases: [
        "Vícios em produtos e serviços",
        "Cobranças indevidas",
        "Negativação irregular",
        "Problemas com planos de saúde",
        "Contratos abusivos"
      ],
      estimatedTimeline: "2 a 12 meses, com possibilidade de acordo extrajudicial mais rápido",
      whatsappMessage: "Olá, estou com um problema como consumidor e preciso de orientação jurídica."
    },
    {
      title: "Direito de Família",
      description: "Acompanhamento sensível e humanizado em questões familiares, priorizando o bem-estar de todos os envolvidos.",
      icon: "Heart",
      gradient: "bg-gradient-to-br from-rose-600 to-pink-700",
      scenarios: [
        "Questões familiares delicadas",
        "Separação e divórcio consensual ou litigioso",
        "Guarda e pensão alimentícia",
        "Inventário e partilha de bens"
      ],
      commonCases: [
        "Divórcio consensual e litigioso",
        "Guarda de filhos",
        "Pensão alimentícia",
        "Inventário e partilha",
        "União estável"
      ],
      estimatedTimeline: "4 a 24 meses, priorizando acordos para preservar relacionamentos familiares",
      whatsappMessage: "Olá, preciso de orientação sobre uma questão familiar. Podem me ajudar com discrição?"
    },
    {
      title: "Direito Empresarial",
      description: "Proteção jurídica completa para seu negócio, desde a constituição até questões contratuais complexas.",
      icon: "Building2",
      gradient: "bg-gradient-to-br from-emerald-600 to-teal-700",
      scenarios: [
        "Proteção empresarial e compliance",
        "Contratos comerciais e parcerias",
        "Questões trabalhistas e tributárias",
        "Recuperação judicial e falência"
      ],
      commonCases: [
        "Constituição de empresas",
        "Contratos comerciais",
        "Questões societárias",
        "Recuperação judicial",
        "Compliance empresarial"
      ],
      estimatedTimeline: "1 a 36 meses, com foco em soluções preventivas e estratégicas",
      whatsappMessage: "Olá, sou empresário e preciso de consultoria jurídica para meu negócio."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Áreas de Atuação - Marcelo Baía Advocacia | Foco em Direito Civil, Consumidor, Família e Empresarial</title>
        <meta name="description" content="Conheça as áreas de atuação do escritório Marcelo Baía Advocacia: Direito Civil, Consumidor, Família e Empresarial. Atendimento humanizado em Rondonópolis/MT." />
        <meta name="keywords" content="advocacia, direito civil, direito consumidor, direito família, direito empresarial, Rondonópolis, Mato Grosso" />
        <link rel="canonical" href="https://marcelobaia.adv.br/practice-areas-overview" />
        <meta property="og:title" content="Áreas de Atuação - Marcelo Baía Advocacia | Foco em Direito Civil, Consumidor, Família e Empresarial" />
        <meta property="og:description" content="Conheça as áreas de atuação do escritório Marcelo Baía Advocacia: Direito Civil, Consumidor, Família e Empresarial. Atendimento humanizado em Rondonópolis/MT." />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marcelobaia.adv.br/practice-areas-overview" />
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
        
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-slate-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Icon name="Scale" size={36} color="white" />
              </div>
              
              <h1 className="font-lora font-semibold text-4xl lg:text-6xl mb-6 leading-tight">
                Áreas de Atuação
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 font-inter mb-8 leading-relaxed">
                Atuação jurídica dedicada para proteger seus direitos e interesses
                com atendimento humanizado e soluções eficazes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary font-inter font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Consulta Imediata
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+5566999111314'}
                  className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-inter font-medium rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  (66) 99911-1314
                </button>
              </div>
              <p className="mt-2 text-xs text-white/80">
                Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
                Focos Jurídicos
              </h2>
              <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto">
                Cada área de atuação é tratada com expertise técnica e abordagem humanizada, 
                priorizando soluções eficazes e preventivas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {practiceAreas?.map((area, index) => (
                <PracticeAreaCard
                  key={index}
                  title={area?.title}
                  description={area?.description}
                  icon={area?.icon}
                  scenarios={area?.scenarios}
                  commonCases={area?.commonCases}
                  estimatedTimeline={area?.estimatedTimeline}
                  whatsappMessage={area?.whatsappMessage}
                  gradient={area?.gradient}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Legal Section */}
        <PreventiveLegalSection />

        {/* Methodology Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full mb-6">
                <Icon name="Target" size={28} color="white" />
              </div>
              <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto">
                Um processo estruturado que busca oferecer atendimento de qualidade e resultados eficazes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Análise Inicial",
                  description: "Escuta atenta e análise detalhada da sua situação jurídica",
                  icon: "Search"
                },
                {
                  step: "02", 
                  title: "Estratégia",
                  description: "Desenvolvimento de estratégia personalizada para seu caso",
                  icon: "Target"
                },
                {
                  step: "03",
                  title: "Execução",
                  description: "Implementação das ações jurídicas com acompanhamento constante",
                  icon: "Play"
                },
                {
                  step: "04",
                  title: "Resultado",
                  description: "Solução eficaz com transparência total do processo",
                  icon: "CheckCircle"
                }
              ]?.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item?.icon} size={24} color="white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item?.step}
                    </div>
                  </div>
                  <h3 className="font-lora font-semibold text-lg text-brand-primary mb-3">
                    {item?.title}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Consultation Widget */}
        <ConsultationWidget />

        {/* Footer */}
        <footer className="bg-brand-primary text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo and Description */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-lg flex items-center justify-center">
                    <Icon name="Scale" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-lora font-semibold text-xl">Marcelo Baía</h3>
                    <p className="text-white/80 text-sm">Advocacia</p>
                  </div>
                </div>
                <p className="text-white/80 font-inter leading-relaxed mb-4">
                  Assessoria jurídica clara e segura para decisões importantes. 
                  Atendimento humanizado com expertise técnica em Rondonópolis/MT.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/5566999111314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a
                    href="tel:+5566999111314"
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Ligar para (66) 99911-1314"
                  >
                    <Icon name="Phone" size={20} />
                  </a>
                </div>
                <p className="mt-2 text-xs text-white/70">
                  Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-inter font-semibold text-lg mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-white/80 hover:text-white font-inter text-sm transition-colors duration-200">Início</a></li>
                  <li><a href="/about-marcelo-ba-a" className="text-white/80 hover:text-white font-inter text-sm transition-colors duration-200">Sobre Marcelo</a></li>
                  <li><a href="/faq-hub" className="text-white/80 hover:text-white font-inter text-sm transition-colors duration-200">FAQ</a></li>
                  <li><a href="/contact-consultation-hub" className="text-white/80 hover:text-white font-inter text-sm transition-colors duration-200">Contato</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-inter font-semibold text-lg mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={16} className="text-brand-accent" />
                    <a
                      href="https://wa.me/5566999111314"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 font-inter text-sm"
                    >
                      (66) 99911-1314
                    </a>
                  </div>
                  <p className="mt-2 text-xs text-white/70">
                    Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-brand-accent" />
                    <a href="tel:+5566999111314" className="text-white/80 font-inter text-sm">(66) 99911-1314</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-brand-accent" />
                    <a href="mailto:marcelobaiaadvogado@gmail.com" className="text-white/80 font-inter text-sm">marcelobaiaadvogado@gmail.com</a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="text-brand-accent mt-0.5" />
                    <span className="text-white/80 font-inter text-sm">Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={16} className="text-brand-accent mt-0.5" />
                    <span className="text-white/80 font-inter text-sm">Atendimento mediante agendamento. Atendimento via WhatsApp é em tempo integral.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 font-inter text-sm mb-4 md:mb-0">
                © {new Date()?.getFullYear()} Marcelo Baía Advocacia. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy-policy" className="text-white/60 hover:text-white font-inter text-sm transition-colors duration-200">
                  Política de Privacidade
                </a>
                <a href="#" className="text-white/60 hover:text-white font-inter text-sm transition-colors duration-200">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PracticeAreasOverview;
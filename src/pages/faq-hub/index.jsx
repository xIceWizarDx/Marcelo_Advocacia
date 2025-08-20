import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import FAQAccordion from './components/FAQAccordion';
import PopularQuestions from './components/PopularQuestions';
import ContactCTA from './components/ContactCTA';
import Icon from '../../components/AppIcon';

const FAQHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [currentLanguage, setCurrentLanguage] = useState('pt-BR');

  // Load language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'pt-BR';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock FAQ data
  const faqData = [
    {
      id: 1,
      question: "Como funciona a primeira consulta?",
      answer: `A primeira consulta é uma conversa inicial onde você pode expor sua situação jurídica sem compromisso. Durante este encontro, analiso seu caso, esclareço suas dúvidas principais e apresento as possíveis estratégias legais.\n\nA consulta tem duração média de 60 minutos e pode ser realizada presencialmente em nosso escritório em Rondonópolis ou por videoconferência. Ao final, você receberá uma orientação clara sobre os próximos passos e os custos envolvidos.`,
      category: "Primeiros Passos",
      categoryId: "primeiros-passos",
      isPopular: true,
      relatedLinks: [
        { title: "Agendar consulta", url: "/contact-consultation-hub" },
        { title: "Sobre Marcelo Baía", url: "/about-marcelo-ba-a" }
      ]
    },
    {
      id: 2,
      question: "Quais documentos preciso trazer?",
      answer: `Os documentos necessários variam conforme o tipo de caso, mas geralmente incluem:\n\n• Documentos pessoais (RG, CPF, comprovante de residência)\n• Contratos relacionados ao caso\n• Correspondências e notificações recebidas\n• Comprovantes de pagamento ou recibos\n• Laudos, perícias ou documentos técnicos\n• Procurações anteriores (se houver)\n\nAntes da consulta, envio uma lista específica dos documentos necessários para seu tipo de caso, otimizando nosso tempo de atendimento.`,
      category: "Primeiros Passos",
      categoryId: "primeiros-passos",
      isPopular: true,
      relatedLinks: [
        { title: "Áreas de Atuação", url: "/practice-areas-overview" }
      ]
    },
    {
      id: 3,
      question: "Quanto tempo demora um processo?",
      answer: `O tempo de duração varia significativamente conforme o tipo de processo e a complexidade do caso:\n\n• Processos administrativos: 3 a 12 meses\n• Ações de cobrança: 6 a 18 meses\n• Processos trabalhistas: 12 a 24 meses\n• Ações de família: 6 a 36 meses\n• Processos criminais: 12 meses a vários anos\n\nEstes prazos são estimativas baseadas na experiência prática. Durante a consulta, forneço uma previsão mais precisa considerando as particularidades do seu caso e a comarca onde será processado.`,
      category: "Processo Legal",
      categoryId: "processo-legal",
      isPopular: true
    },
    {
      id: 4,
      question: "Como são calculados os honorários advocatícios?",
      answer: `Os honorários são calculados considerando diversos fatores:\n\n• Complexidade do caso\n• Tempo estimado de dedicação\n• Valor da causa (quando aplicável)\n• Urgência do atendimento\n• Modalidade de cobrança escolhida\n\nOfereço três modalidades:\n1. Honorários fixos: valor determinado no início\n2. Honorários por hora: cobrança pelo tempo efetivamente trabalhado\n3. Honorários de êxito: percentual sobre o resultado obtido\n\nTodos os valores são transparentes e formalizados em contrato, sem surpresas ou custos ocultos.`,
      category: "Custos e Honorários",
      categoryId: "custos-honorarios",
      isPopular: false
    },
    {
      id: 5,
      question: "Posso acompanhar o andamento do meu processo?",
      answer: `Sim, você terá acesso completo ao andamento do seu processo através de:\n\n• Relatórios mensais por email\n• Acesso ao sistema de acompanhamento processual\n• WhatsApp para dúvidas rápidas\n• Reuniões presenciais quando necessário\n\nMantemos comunicação transparente e proativa, informando sobre cada movimentação importante e explicando os próximos passos de forma clara e acessível.`,
      category: "Processo Legal",
      categoryId: "processo-legal",
      isPopular: false
    },
    {
      id: 6,
      question: "Atende casos em outras cidades além de Rondonópolis?",
      answer: `Sim, atendo clientes em toda a região de Rondonópolis e cidades vizinhas. Para casos em outras comarcas, avalio a viabilidade considerando:\n\n• Complexidade do caso\n• Necessidade de deslocamento\n• Possibilidade de atendimento remoto\n• Custos adicionais de deslocamento\n\nMuitos atendimentos podem ser realizados por videoconferência, especialmente consultas iniciais e acompanhamentos. Para audiências e atos presenciais obrigatórios, organizo a agenda para otimizar custos e tempo.`,
      category: "Atendimento",
      categoryId: "atendimento",
      isPopular: false
    },
    {
      id: 7,
      question: "Qual a diferença entre Direito Civil e Direito do Consumidor?",
      answer: `O Direito Civil regula as relações entre pessoas físicas e jurídicas em geral, incluindo:\n• Contratos diversos\n• Responsabilidade civil\n• Direitos reais (propriedade)\n• Família e sucessões\n\nO Direito do Consumidor é uma especialização que protege especificamente as relações de consumo:\n• Compra e venda de produtos\n• Prestação de serviços\n• Publicidade enganosa\n• Cobrança abusiva\n• Defeitos e vícios\n\nAmbas as áreas se complementam, e muitas vezes um caso pode envolver aspectos dos dois ramos do direito.`,
      category: "Direito Civil",
      categoryId: "direito-civil",
      isPopular: false,
      relatedLinks: [
        { title: "Direito Civil", url: "/individual-practice-area-pages" },
        { title: "Direito do Consumidor", url: "/individual-practice-area-pages" }
      ]
    },
    {
      id: 8,
      question: "Como funciona a pensão alimentícia?",
      answer: `A pensão alimentícia é uma obrigação legal que visa garantir o sustento de quem não pode prover suas próprias necessidades. Principais aspectos:\n\n• Pode ser para filhos menores, cônjuges ou pais idosos\n• Valor baseado na necessidade de quem recebe e possibilidade de quem paga\n• Inclui alimentação, moradia, saúde, educação e lazer\n• Pode ser revista a qualquer tempo mediante mudança de circunstâncias\n• Descumprimento pode levar à prisão civil\n\nO processo de fixação considera a renda do alimentante, as necessidades do alimentado e o padrão de vida anterior da família.`,
      category: "Direito de Família",
      categoryId: "direito-familia",
      isPopular: false,
      relatedLinks: [
        { title: "Direito de Família", url: "/individual-practice-area-pages" }
      ]
    },
    {
      id: 9,
      question: "Minha empresa precisa de assessoria jurídica permanente?",
      answer: `A assessoria jurídica permanente é recomendada para empresas que:\n\n• Têm contratos frequentes com fornecedores/clientes\n• Lidam com questões trabalhistas regularmente\n• Precisam de orientação em decisões estratégicas\n• Querem prevenir problemas legais\n• Têm faturamento acima de R$ 500.000/ano\n\nPara empresas menores, ofereço consultoria pontual e plantão jurídico mensal. A assessoria permanente inclui:\n• Análise de contratos\n• Orientação trabalhista\n• Compliance básico\n• Atendimento prioritário\n• Desconto em demandas judiciais`,
      category: "Direito Empresarial",
      categoryId: "direito-empresarial",
      isPopular: false,
      relatedLinks: [
        { title: "Direito Empresarial", url: "/individual-practice-area-pages" }
      ]
    },
    {
      id: 10,
      question: "O que fazer quando recebo uma cobrança indevida?",
      answer: `Ao receber uma cobrança indevida, siga estes passos:\n\n1. **Não pague imediatamente** - Analise a cobrança com calma\n2. **Reúna documentos** - Contratos, comprovantes de pagamento, correspondências\n3. **Conteste formalmente** - Por escrito, preferencialmente por email\n4. **Guarde comprovantes** - De todas as comunicações realizadas\n5. **Procure orientação jurídica** - Se a empresa insistir na cobrança\n\nVocê tem direito a:\n• Cancelamento da cobrança\n• Exclusão do nome dos órgãos de proteção\n• Indenização por danos morais (em casos específicos)\n• Devolução em dobro do valor pago indevidamente`,
      category: "Direito do Consumidor",
      categoryId: "direito-consumidor",
      isPopular: false,
      relatedLinks: [
        { title: "Direito do Consumidor", url: "/individual-practice-area-pages" }
      ]
    }
  ];

  // Categories with counts
  const categories = [
    { id: 'todos', name: 'Todas', icon: 'Grid3X3', count: faqData?.length },
    { id: 'primeiros-passos', name: 'Primeiros Passos', icon: 'Play', count: faqData?.filter(faq => faq?.categoryId === 'primeiros-passos')?.length },
    { id: 'custos-honorarios', name: 'Custos', icon: 'DollarSign', count: faqData?.filter(faq => faq?.categoryId === 'custos-honorarios')?.length },
    { id: 'processo-legal', name: 'Processo Legal', icon: 'FileText', count: faqData?.filter(faq => faq?.categoryId === 'processo-legal')?.length },
    { id: 'direito-civil', name: 'Direito Civil', icon: 'Scale', count: faqData?.filter(faq => faq?.categoryId === 'direito-civil')?.length },
    { id: 'direito-familia', name: 'Direito de Família', icon: 'Users', count: faqData?.filter(faq => faq?.categoryId === 'direito-familia')?.length },
    { id: 'direito-empresarial', name: 'Direito Empresarial', icon: 'Building', count: faqData?.filter(faq => faq?.categoryId === 'direito-empresarial')?.length },
    { id: 'direito-consumidor', name: 'Direito do Consumidor', icon: 'ShoppingCart', count: faqData?.filter(faq => faq?.categoryId === 'direito-consumidor')?.length }
  ];

  // Popular questions (first 5 popular ones)
  const popularQuestions = faqData?.filter(faq => faq?.isPopular)?.slice(0, 5);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory !== 'todos') {
      filtered = filtered?.filter(faq => faq?.categoryId === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      filtered = filtered?.filter(faq => 
        faq?.question?.toLowerCase()?.includes(searchLower) ||
        faq?.answer?.toLowerCase()?.includes(searchLower) ||
        faq?.category?.toLowerCase()?.includes(searchLower)
      );
    }

    return filtered;
  }, [searchTerm, activeCategory]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchTerm(''); // Clear search when changing category
  };

  const handlePopularQuestionClick = (questionId) => {
    // Find the question and scroll to it
    const element = document.getElementById(`faq-${questionId}`);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Perguntas Frequentes | Marcelo Baía Advocacia</title>
        <meta name="description" content="Encontre respostas para as principais dúvidas jurídicas. FAQ completo sobre direito civil, consumidor, família e empresarial em Rondonópolis-MT." />
        <meta name="keywords" content="FAQ jurídico, perguntas frequentes direito, dúvidas advocacia, Rondonópolis MT, consulta jurídica" />
        <link rel="canonical" href="https://marcelobaia.adv.br/faq-hub" />
        <meta property="og:title" content="FAQ - Perguntas Frequentes | Marcelo Baía Advocacia" />
        <meta property="og:description" content="Encontre respostas para as principais dúvidas jurídicas. FAQ completo sobre direito civil, consumidor, família e empresarial." />
        <meta property="og:image" content="/imagens/logo-512x512.png" />
        <meta name="twitter:image" content="/imagens/logo-512x512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marcelobaia.adv.br/faq-hub" />
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
        <section className="pt-20 lg:pt-24 pb-12 lg:pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon name="HelpCircle" size={28} />
                </div>
                <div className="text-left">
                  <h1 className="font-lora font-bold text-3xl lg:text-5xl leading-tight">
                    Perguntas Frequentes
                  </h1>
                  <p className="text-white/80 text-lg lg:text-xl font-inter">
                    Respostas claras para suas dúvidas jurídicas
                  </p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                Encontre respostas imediatas para as principais questões jurídicas ou entre em contato 
                para esclarecimentos personalizados sobre seu caso específico.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-4xl mx-auto">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                  onClearSearch={handleClearSearch}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 lg:py-12 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* FAQ Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-lora font-semibold text-2xl lg:text-3xl text-text-primary">
                      {activeCategory === 'todos' ? 'Todas as Perguntas' : categories?.find(cat => cat?.id === activeCategory)?.name}
                    </h2>
                    <span className="text-text-secondary font-inter">
                      {filteredFAQs?.length} {filteredFAQs?.length === 1 ? 'pergunta' : 'perguntas'}
                    </span>
                  </div>
                  
                  {searchTerm && (
                    <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-text-primary font-inter">
                        Mostrando resultados para: <span className="font-semibold">"{searchTerm}"</span>
                      </p>
                    </div>
                  )}
                </div>

                <FAQAccordion faqs={filteredFAQs} searchTerm={searchTerm} />
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular Questions */}
                <PopularQuestions
                  questions={popularQuestions}
                  onQuestionClick={handlePopularQuestionClick}
                />

                {/* Quick Stats */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-lora font-semibold text-lg text-text-primary mb-4">
                    Central de Ajuda
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={16} className="text-brand-accent" />
                      </div>
                      <div>
                        <p className="font-inter font-medium text-text-primary">{faqData?.length} Perguntas</p>
                        <p className="text-text-secondary text-sm">Respondidas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" size={16} className="text-brand-accent" />
                      </div>
                      <div>
                        <p className="font-inter font-medium text-text-primary">24h</p>
                        <p className="text-text-secondary text-sm">Resposta média</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="Users" size={16} className="text-brand-accent" />
                      </div>
                      <div>
                        <p className="font-inter font-medium text-text-primary">500+</p>
                        <p className="text-text-secondary text-sm">Clientes atendidos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practice Areas Quick Links */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-lora font-semibold text-lg text-text-primary mb-4">
                    Áreas de Atuação
                  </h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Direito Civil', icon: 'Scale', url: '/individual-practice-area-pages' },
                      { name: 'Direito do Consumidor', icon: 'ShoppingCart', url: '/individual-practice-area-pages' },
                      { name: 'Direito de Família', icon: 'Users', url: '/individual-practice-area-pages' },
                      { name: 'Direito Empresarial', icon: 'Building', url: '/individual-practice-area-pages' }
                    ]?.map((area) => (
                      <a
                        key={area?.name}
                        href={area?.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200 group"
                      >
                        <Icon name={area?.icon} size={16} className="text-brand-accent" />
                        <span className="text-text-primary font-inter text-sm group-hover:text-brand-accent transition-colors duration-200">
                          {area?.name}
                        </span>
                        <Icon name="ArrowRight" size={14} className="text-text-secondary group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-200 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <ContactCTA />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
            <div className="mb-6">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-4 opacity-80" />
              <h2 className="font-lora font-bold text-2xl lg:text-3xl mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                Nossa equipe está pronta para esclarecer suas questões jurídicas 
                e orientar sobre os melhores caminhos para seu caso.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-white text-brand-primary rounded-xl font-inter font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Conversar no WhatsApp</span>
              </button>
              
              <button
                onClick={() => window.location.href = 'tel:+5566999111314'}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-inter font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Icon name="Phone" size={20} />
                <span>Ligar Agora</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQHub;
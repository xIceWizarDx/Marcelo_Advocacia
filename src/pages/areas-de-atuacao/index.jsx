import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/ui/Header';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';
import Footer from '@/components/ui/Footer';


const PracticeAreaCard = ({ 
  title, 
  description, 
  icon, 
  scenarios, 
  commonCases, 
  estimatedTimeline, 
  whatsappMessage,
  gradient 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handleConsultationClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 ${gradient} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
            <Icon name={icon} size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="font-lora font-semibold text-xl lg:text-2xl text-brand-primary mb-2">
              {title}
            </h3>
            <p className="text-text-secondary font-inter leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Scenarios */}
        <div className="mb-6">
          <h4 className="font-inter font-medium text-brand-secondary mb-3 flex items-center">
            <Icon name="AlertCircle" size={16} className="mr-2 text-brand-accent" />
            Situações Comuns
          </h4>
          <div className="grid gap-2">
            {scenarios?.map((scenario, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                <Icon name="ArrowRight" size={14} className="mt-0.5 text-brand-accent flex-shrink-0" />
                <span className="text-sm text-text-primary font-inter">{scenario}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="border-t border-border pt-6 mb-6">
            {/* Common Cases */}
            <div className="mb-4">
              <h5 className="font-inter font-medium text-brand-secondary mb-2 flex items-center">
                <Icon name="FileText" size={14} className="mr-2 text-brand-accent" />
                Tipos de Casos
              </h5>
              <ul className="space-y-1">
                {commonCases?.map((caseType, index) => (
                  <li key={index} className="text-sm text-text-secondary font-inter flex items-center">
                    <Icon name="Check" size={12} className="mr-2 text-success flex-shrink-0" />
                    {caseType}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <h5 className="font-inter font-medium text-brand-secondary mb-2 flex items-center">
                <Icon name="Clock" size={14} className="mr-2 text-brand-accent" />
                Prazo Estimado
              </h5>
              <p className="text-sm text-text-secondary font-inter">{estimatedTimeline}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
            className="flex-1 text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
          >
            {isExpanded ? 'Ver Menos' : 'Ver Detalhes'}
          </Button>
          
          <Button
            variant="default"
            onClick={handleWhatsAppClick}
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={16}
            className="flex-1 bg-brand-accent hover:bg-brand-accent/90 text-white"
          >
            Consultar
          </Button>
        </div>

        {/* Quick Consultation */}
        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleConsultationClick}
            iconName="Calendar"
            iconPosition="left"
            iconSize={14}
            fullWidth
            className="text-brand-secondary hover:text-brand-accent hover:bg-accent/10 text-sm"
          >
            Agendar Consulta Presencial
          </Button>
        </div>
      </div>
    </div>
  );
};



const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Como funciona a primeira consulta?",
      answer: `A primeira consulta é uma conversa detalhada onde analisamos sua situação específica.\n\nDurante este encontro:\n• Ouvimos sua questão com atenção e sigilo\n• Explicamos as opções legais disponíveis\n• Definimos a melhor estratégia para seu caso\n• Esclarecemos prazos e procedimentos\n\nO primeiro contato é sempre por meios digitais para sua maior comodidade, que geralmente é suficiente, para casos menos complexos, podendo ser realizada videoconferência para melhor elucidação da lide, reservando-se atendimento presencial para casos específicos.`
    },
    {
      id: 2,
      question: "Quais documentos devo levar na consulta?",
      answer: `Os documentos variam conforme o tipo de questão, mas geralmente incluem:\n\n**Documentos Pessoais:**\n• RG e CPF\n• Comprovante de residência\n\n**Documentos Específicos:**\n• Contratos relacionados ao caso\n• Correspondências e e-mails\n• Comprovantes de pagamento\n• Fotos ou evidências relevantes\n\nNão se preocupe se não tiver todos os documentos - podemos orientá-lo sobre quais são necessários.`
    },
    {
      id: 3,
      question: "Quanto tempo demora para resolver um processo?",
      answer: `O prazo varia significativamente conforme o tipo de caso e complexidade:\n\n**Casos Administrativos:** 30 a 90 dias\n**Questões Contratuais:** 6 meses a 2 anos\n**Processos Familiares:** 6 meses a 1 ano\n**Ações Consumeristas:** 3 meses a 1 ano\n\nSempre buscamos a resolução mais rápida possível, priorizando acordos quando vantajosos para você. Os prazos apresentados levam por base nossa experiência em casos semelhantes, mas não são em absoluto uma promessa de resultado a curto prazo.`
    },
    {
      id: 4,
      question: "É possível resolver sem recorrer à justiça?",
      answer: `Sim, priorizamos soluções extrajudiciais sempre que possível:\n\n**Negociação Direta:** Conversas com a outra parte\n**Mediação:** Processo assistido por mediador\n**Arbitragem:** Decisão por árbitro especializado\n**Acordos:** Soluções consensuais\n\nEssas alternativas são mais rápidas, econômicas e preservam relacionamentos. Em último caso, quando não há viabilidade em um acordo satisfatório ao cliente, recomendamos o processo judicial, após orientar sobre os riscos da demanda.`
      },
    {
      id: 5,
      question: "Como são calculados os honorários?",
      answer: `Os honorários são definidos de forma transparente e justa no momento da contratação, sempre respeitando a lei e a tabela de honorários emitida pela Ordem dos Advogados do Brasil, seccional Mato Grosso.\n\nConsulta inicial: gratuita, para orientações simples e gerais.\nConsulta com auditoria: valor pré-fixado em horas de trabalho, quando o cliente não busca contratar imediatamente nossos serviços para demandas judidiciais, e sim obter orientação jurídica aprofundada sobre situação jurídica complexa que demande análise pormenorizada e orientação preventiva de ação específica.\nCausas sem proveito econômico: valor pré-fixado em conformidade com a tabela da OAB/MT e complexidade da causa.\nCausas com proveito econômico: percentual sobre o resultado útil do processo.\nDependendo das peculiaridades do caso contratações diversas ou híbridas podem ser realizadas, sempre de modo transparente, antes de iniciar qualquer trabalho, com orientação adequada sobre os custos envolvidos. Não há surpresa.`
    },
    {
      id: 6,
      question: "Atende casos em outras cidades?",
      answer: `Nosso escritório atende em todo o território nacional, em razão da virtualização dos processos no Brasil, permitindo interposição, defesa e acompanhamento de qualquer lugar do mundo pela rede mundial de computadores.\n\nA maioria dos serviços, desde a consulta inicial até a finalização da demanda, podem ser efetivados por meios digitais, sem necessidade de comparecimento presencial do cliente ao escritório ou fórum, e sem necessidade de comparecimento físico de um advogado ao local em que tramita o processo.\n\nSe houver necessidade de deslocamento, as taxas são previstas em contrato. Serviços praticados na cidade de Rondonópolis-MT não tem custo de deslocamento ou diligência. Em casos específicos o cliente pode ser orientado a procurar um profissional em sua localidade, se houver necessidade de comparecimento presencial constante em órgãos públicos ou comarcas, de modo que o custo de deslocamento se torne excessivamente expressivo.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full mb-6">
            <Icon name="HelpCircle" size={28} color="white" />
          </div>
          <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Esclarecemos as dúvidas mais comuns sobre nossos serviços jurídicos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
              >
                <h3 className="font-inter font-medium text-lg text-brand-primary pr-4">
                  {faq?.question}
                </h3>
                <Icon
                  name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className={`text-brand-accent transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq?.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                    openFAQ === faq?.id
                      ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
              >
                <div className="px-6 pb-5 border-t border-border/50">
                  <div className="pt-4">
                    {faq?.answer?.split('\n')?.map((line, index) => (
                      <React.Fragment key={index}>
                        {line && (
                          <p className={`text-text-secondary font-inter leading-relaxed ${
                            line?.startsWith('**') && line?.endsWith('**')
                              ? 'font-medium text-brand-secondary mt-3 mb-1' : line?.startsWith('•')
                              ? 'ml-4 mb-1' :'mb-2'
                          }`}>
                            {line?.replace(/\*\*/g, '')}
                          </p>
                        )}
                        {!line && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary font-inter mb-6">
            Precisa de outras orientações?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-inter font-medium rounded-lg transition-colors duração-200"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Perguntar no WhatsApp
            </button>
            <button
              onClick={() => window.location.href = 'tel:+5566999111314'}
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-inter font-medium rounded-lg transition-colors duração-200"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              (66) 99911-1314
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



const ConsultationWidget = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock available time slots
  const availableDates = [
    { date: '2025-01-22', day: 'Qua', dayNumber: '22' },
    { date: '2025-01-23', day: 'Qui', dayNumber: '23' },
    { date: '2025-01-24', day: 'Sex', dayNumber: '24' },
    { date: '2025-01-27', day: 'Seg', dayNumber: '27' },
    { date: '2025-01-28', day: 'Ter', dayNumber: '28' }
  ];

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:30', available: true },
    { time: '14:00', available: false },
    { time: '15:30', available: true },
    { time: '17:00', available: true }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert('Por favor, selecione uma data e horário.');
      return;
    }

    window.open('https://wa.me/5566999111314', '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Icon name="Calendar" size={28} color="white" />
              </div>
              <h2 className="font-lora font-semibold text-3xl lg:text-4xl mb-4">
                Agende sua Consulta
              </h2>
              <p className="text-lg text-white/90 font-inter max-w-2xl mx-auto">
                Escolha o melhor horário para uma conversa detalhada sobre sua questão jurídica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h3 className="font-inter font-medium text-lg mb-4 flex items-center">
                  <Icon name="CalendarDays" size={20} className="mr-2" />
                  Escolha a Data
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates?.map((dateObj) => (
                    <button
                      key={dateObj?.date}
                      onClick={() => setSelectedDate(dateObj?.date)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        selectedDate === dateObj?.date
                          ? 'bg-white text-brand-primary shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      <div className="text-xs font-inter font-medium mb-1">
                        {dateObj?.day}
                      </div>
                      <div className="text-lg font-lora font-semibold">
                        {dateObj?.dayNumber}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="font-inter font-medium text-lg mb-4 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Escolha o Horário
                </h3>
                <div className="space-y-2">
                  {timeSlots?.map((slot) => (
                    <button
                      key={slot?.time}
                      onClick={() => slot?.available && setSelectedTimeSlot(slot?.time)}
                      disabled={!slot?.available}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                        !slot?.available
                          ? 'bg-white/10 text-white/50 cursor-not-allowed'
                          : selectedTimeSlot === slot?.time
                          ? 'bg-white text-brand-primary shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-inter font-medium">{slot?.time}</span>
                        {!slot?.available && (
                          <span className="text-xs text-white/50">Ocupado</span>
                        )}
                        {slot?.available && selectedTimeSlot === slot?.time && (
                          <Icon name="Check" size={16} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  onClick={handleBooking}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-white text-brand-primary hover:bg-white/90 font-medium px-8 py-3"
                >
                  Confirmar via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+5566999111314'}
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={18}
                  className="border-white text-white hover:bg-white hover:text-brand-primary font-medium px-8 py-3"
                >
                  (66) 99911-1314
                </Button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-white/80 font-inter">
                  <Icon name="Shield" size={14} className="inline mr-1" />
                  Consulta inicial com valor acessível • Sigilo profissional garantido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const PreventiveLegalSection = () => {
  const preventiveServices = [
    {
      icon: 'FileCheck',
      title: 'Revisão de Contratos',
      description: 'Análise preventiva de contratos antes da assinatura para evitar problemas futuros.',
      benefits: ['Identificação de cláusulas abusivas', 'Sugestões de melhorias', 'Proteção contra riscos']
    },
    {
      icon: 'Shield',
      title: 'Consultoria Empresarial',
      description: 'Orientação jurídica contínua para empresas evitarem problemas legais.',
      benefits: ['Compliance empresarial', 'Prevenção de litígios', 'Segurança jurídica']
    },
    {
      icon: 'Users',
      title: 'Planejamento Familiar',
      description: 'Estruturação legal preventiva para questões familiares e sucessórias.',
      benefits: ['Testamentos e inventários', 'Regime de bens', 'Proteção patrimonial']
    },
    {
      icon: 'TrendingUp',
      title: 'Auditoria Legal',
      description: 'Análise completa da situação jurídica para identificar e corrigir vulnerabilidades.',
      benefits: ['Diagnóstico completo', 'Plano de ação', 'Monitoramento contínuo']
    }
  ];

  const handlePreventiveConsultation = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full mb-6">
            <Icon name="Shield" size={28} color="white" />
          </div>
          <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
            Advocacia Preventiva
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto leading-relaxed">
            Prevenir é sempre melhor que remediar. Nossa abordagem preventiva ajuda você a evitar problemas 
            jurídicos antes que eles aconteçam, economizando tempo, dinheiro e preocupações.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {preventiveServices?.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service?.icon} size={24} color="white" />
              </div>
              
              <h3 className="font-lora font-semibold text-lg text-brand-primary mb-3">
                {service?.title}
              </h3>
              
              <p className="text-text-secondary font-inter text-sm mb-4 leading-relaxed">
                {service?.description}
              </p>
              
              <ul className="space-y-2">
                {service?.benefits?.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-2">
                    <Icon name="Check" size={14} className="mt-0.5 text-success flex-shrink-0" />
                    <span className="text-xs text-text-secondary font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Comparison */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-border mb-16">
          <h3 className="font-lora font-semibold text-2xl text-brand-primary text-center mb-8">
            Advocacia Preventiva vs. Advocacia Reativa
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Preventive */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full mb-4">
                <Icon name="Shield" size={28} color="white" />
              </div>
              <h4 className="font-inter font-semibold text-lg text-success mb-4">
                Advocacia Preventiva
              </h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={16} className="mt-0.5 text-success flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Menor custo:</strong> Investimento inicial menor que litígios
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={16} className="mt-0.5 text-success flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Menos estresse:</strong> Evita desgaste emocional de processos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={16} className="mt-0.5 text-success flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Tempo otimizado:</strong> Soluções rápidas e eficientes
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={16} className="mt-0.5 text-success flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Relacionamentos preservados:</strong> Evita conflitos desnecessários
                  </span>
                </li>
              </ul>
            </div>

            {/* Reactive */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-full mb-4">
                <Icon name="AlertTriangle" size={28} color="white" />
              </div>
              <h4 className="font-inter font-semibold text-lg text-warning mb-4">
                Advocacia Reativa
              </h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Icon name="X" size={16} className="mt-0.5 text-warning flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Maior custo:</strong> Processos judiciais são mais caros
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="X" size={16} className="mt-0.5 text-warning flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Alto estresse:</strong> Desgaste emocional significativo
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="X" size={16} className="mt-0.5 text-warning flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Tempo prolongado:</strong> Processos podem durar anos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="X" size={16} className="mt-0.5 text-warning flex-shrink-0" />
                  <span className="text-text-secondary font-inter text-sm">
                    <strong>Relacionamentos prejudicados:</strong> Conflitos podem ser irreversíveis
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-lora font-semibold text-2xl lg:text-3xl mb-4">
              Proteja-se Antes dos Problemas Aparecerem
            </h3>
            <p className="text-lg text-white/90 font-inter mb-8 max-w-2xl mx-auto">
              Agende uma consultoria preventiva e descubra como proteger seus interesses 
              de forma proativa e inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={handlePreventiveConsultation}
                iconName="Shield"
                iconPosition="left"
                iconSize={18}
                className="bg-white text-brand-primary hover:bg-white/90 font-medium px-8 py-3"
              >
                Consultoria Preventiva
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = 'tel:+5566999111314'}
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
                className="border-white text-white hover:bg-white hover:text-brand-primary font-medium px-8 py-3"
              >
                (66) 99911-1314
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const AreasDeAtuacao = () => {
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
        "Inventário e Partilha de Bens",
        "Regularização de Imóveis",
        "Indenizações",
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
        "Produtos defeituosos",
        "Direito de devolução",
        "Negativação indevida",
        "Recusa de atendimento por planos de saúde",
        "Revisão de contratos de consumo"
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
        "Partilha de bens"
      ],
      commonCases: [
        "Divórcio consensual e litigioso",
        "Guarda de filhos",
        "Pensão alimentícia",
        "Regime de casamento e partilha de bens",
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
        "Estratégias comerciais e empresariais refinadas"
      ],
      commonCases: [
        "Tipos societários e suas nuances",
        "Recuperação de ativos",
        "Questões entre os sócios",
        "Análise de contratos bancários",
        "Revisão de juros"
      ],
      estimatedTimeline: "1 a 36 meses, com foco em soluções preventivas e estratégicas",
      whatsappMessage: "Olá, sou empresário e preciso de consultoria jurídica para meu negócio."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Áreas de Atuação - Marcelo Baía Advocacia | Especialista em Direito Civil, Consumidor, Família e Empresarial</title>
        <meta name="description" content="Conheça as áreas de especialização do escritório Marcelo Baía Advocacia: Direito Civil, Consumidor, Família e Empresarial. Atendimento humanizado online." />
        <meta name="keywords" content="advocacia, direito civil, direito consumidor, direito família, direito empresarial, Rondonópolis, Mato Grosso" />
          <link rel="canonical" href="https://marcelobaia.adv.br/areas-de-atuacao" />
        <meta property="og:title" content="Áreas de Atuação - Marcelo Baía Advocacia | Especialista em Direito Civil, Consumidor, Família e Empresarial" />
        <meta property="og:description" content="Conheça as áreas de especialização do escritório Marcelo Baía Advocacia: Direito Civil, Consumidor, Família e Empresarial. Atendimento humanizado online." />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
        <meta property="og:type" content="website" />
          <meta property="og:url" content="https://marcelobaia.adv.br/areas-de-atuacao" />
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
                Expertise jurídica especializada para proteger seus direitos e interesses 
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
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
                Especialidades Jurídicas
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
                Um processo estruturado que garante atendimento de qualidade e resultados eficazes
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
        <Footer />
      </div>
    </>
  );
};

export default AreasDeAtuacao;
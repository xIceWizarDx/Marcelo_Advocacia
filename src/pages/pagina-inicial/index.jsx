import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/ui/Header';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Footer from '@/components/ui/Footer';


const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationSubmit = (e) => {
    e?.preventDefault();
    window.open('https://wa.me/5566999111314', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-800 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
          {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-lora text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Assessoria jurídica{' '}
                <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
                  clara e segura
                </span>{' '}
                para decisões importantes
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 font-inter leading-relaxed max-w-2xl">
                Orientação técnica com linguagem simples. Prevenção de riscos e solução de conflitos com atendimento humanizado. Atendimento facilitado por meios virtuais para atuação em todo o território nacional, e presencialmente em Rondonópolis-MT.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'MessageCircle', text: 'Comunicação direta' },
                { icon: 'Clock', text: 'Resposta imediata' },
                { icon: 'Shield', text: 'Sigilo garantido' },
                { icon: 'MapPin', text: 'Atendimento facilitado' }
              ]?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-200">
                  <Icon name={benefit?.icon} size={20} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit?.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Conversar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:+5566999111314'}
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                (66) 99911-1314
              </Button>
            </div>
          </div>

          {/* Right Column - Quick Consultation Form */}
          <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  <Icon name="Calendar" size={24} className="text-indigo-600" />
                </div>
                <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2">
                  Diga-nos como podemos ajudar
                </h3>
                <p className="text-slate-600 text-sm">
                  Envie sua mensagem e retornaremos rapidamente
                </p>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <Input
                  label="Nome completo"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  placeholder="(66) 99911-1314"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Motivo do contato
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Descreva brevemente sua situação..."
                    value={formData?.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  iconSize={18}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Resposta imediata
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      id: 'civil',
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direitos reais e obrigações',
      icon: 'FileText',
      scenarios: [
        'Contratos de compra e venda',
        'Responsabilidade por danos',
        'Direitos de propriedade',
        'Questões condominiais'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'consumer',
      title: 'Direito do Consumidor',
      description: 'Proteção aos direitos do consumidor e relações de consumo',
      icon: 'ShoppingCart',
      scenarios: [
        'Produtos com defeito',
        'Serviços mal prestados',
        'Cobrança indevida',
        'Negativação irregular'
      ],
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'family',
      title: 'Direito de Família',
      description: 'Divórcio, pensão alimentícia, guarda e sucessões',
      icon: 'Heart',
      scenarios: [
        'Divórcio consensual',
        'Pensão alimentícia',
        'Guarda de filhos',
        'Inventário e partilha'
      ],
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'business',
      title: 'Direito Empresarial',
      description: 'Consultoria preventiva e solução de conflitos empresariais',
      icon: 'Building2',
      scenarios: [
        'Constituição de empresas',
        'Contratos comerciais',
        'Recuperação judicial',
        'Compliance empresarial'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Icon name="Scale" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Áreas de Atuação</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Expertise jurídica completa para{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              suas necessidades
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Atendimento especializado em diferentes áreas do direito, sempre com foco na prevenção de riscos e solução eficaz de conflitos.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas?.map((area, index) => (
            <div
              key={area?.id}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden card-hover"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${area?.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={area?.icon} size={24} className={area?.iconColor} />
                </div>

                {/* Title & Description */}
                <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {area?.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {area?.description}
                </p>

                {/* Scenarios List */}
                <div className="space-y-2 mb-6">
                  {area?.scenarios?.map((scenario, scenarioIndex) => (
                    <div key={scenarioIndex} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600">{scenario}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                  <Link
                    to="/areas-de-atuacao"
                  className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:underline transition-colors duration-300"
                >
                  <span>Saiba mais</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
            <Link
              to="/areas-de-atuacao"
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Ver todas as áreas de atuação</span>
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};



const FAQPreviewSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Quanto custa uma consulta jurídica?",
      answer: `A primeira consulta é gratuita e sem compromisso. Durante esta conversa inicial, avaliamos seu caso e apresentamos as opções disponíveis.\n\nApós a análise, apresentamos um orçamento transparente baseado na complexidade do caso e tempo estimado. Trabalhamos com valores fixos sempre que possível, evitando surpresas.`
    },
    {
      question: "Como funciona o atendimento?",
      answer: `O atendimento é super facilitado. Primeiro você informa qual a situação por meios digitais e envia os documentos de que dispõe.\n\nDepois, elaboramos uma estratégia jurídica clara e mantemos você informado sobre cada etapa do processo. Utilizamos linguagem simples e estamos sempre disponíveis para esclarecer dúvidas.`
    },
    {
      question: "Qual o prazo para resolução dos casos?",
      answer: `Os prazos variam conforme a complexidade e natureza de cada caso. Na consulta inicial, apresentamos uma estimativa realista baseada na nossa experiência.\n\nSempre priorizamos soluções extrajudiciais quando possível, pois são mais rápidas e econômicas. Mantemos você informado sobre o andamento regularmente.`
    },
    {
      question: "Atende apenas em Rondonópolis?",
      answer: `Atualmente todos os processos são digitais, por isso nossos atendimentos a princípio são virtuais, e abrangem todo o território nacional. Se houver necessidade agendaremos uma videoconferência para entender melhor a demanda.\n\nNosso escritório físico está localizado em Rondonópolis/MT, onde os atendimentos presenciais são realizados, havendo possibilidade de deslocamento, tanto para atendimentos como para atos específicos como reuniões, audiências e diligências em geral, que exijam a presença de um advogado, conforme ficar estabelecido em contrato.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Icon name="HelpCircle" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Respostas para suas{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              principais dúvidas
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Esclarecimentos sobre custos, prazos e procedimentos para que você tome decisões informadas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-lora text-lg font-semibold text-slate-900 pr-4">
                  {faq?.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={20} className="text-slate-500" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-slate-100">
                    {faq?.answer?.split('\n\n')?.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600 leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-6">
              <Icon name="MessageCircle" size={32} className="text-indigo-600 mx-auto mb-4" />
              <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2">
                Precisa de outras orientações?
              </h3>
              <p className="text-slate-600">
                Entre em contato para esclarecimentos personalizados sobre seu caso específico.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/perguntas-frequentes"
                className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="Search" size={18} />
                <span>Ver todas as perguntas</span>
              </Link>
              
              <button
                onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Fazer pergunta</span>
              </button>
           </div>
         </div>
       </div>
     </div>
   </section>
  );
};



const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: `Atendimento excepcional com explicações claras sobre todo o processo. O Dr. Marcelo sempre esteve disponível para esclarecer dúvidas e manteve comunicação constante durante todo o caso.`,
      author: "Cliente - Direito Civil",
      rating: 5,
      case: "Resolução de conflito contratual",
      outcome: "Acordo extrajudicial em 45 dias"
    },
    {
      id: 2,
      content: `Profissional competente que conseguiu resolver minha situação de forma rápida e eficiente. A linguagem simples e o atendimento humanizado fizeram toda a diferença no processo.`,
      author: "Cliente - Direito do Consumidor",
      rating: 5,
      case: "Negativação indevida",
      outcome: "Remoção do nome + indenização"
    },
    {
      id: 3,
      content: `Excelente trabalho na condução do meu divórcio. Processo conduzido com sensibilidade e profissionalismo, sempre priorizando o bem-estar de todos os envolvidos, especialmente das crianças.`,
      author: "Cliente - Direito de Família",
      rating: 5,
      case: "Divórcio consensual",
      outcome: "Processo finalizado em 60 dias"
    }
  ];

  const stats = [
    { number: "2.500+", label: "Casos resolvidos", icon: "CheckCircle" },
    { number: "97%", label: "Taxa de sucesso", icon: "TrendingUp" },
    { number: "18+", label: "Anos de experiência", icon: "Calendar" },
    { number: "2h", label: "Tempo máximo de resposta", icon: "Clock" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Icon name="Star" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Depoimentos</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Resultados que{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A satisfação dos clientes é o reflexo do compromisso com a excelência e transparência em cada caso atendido.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4">
                <Icon name={stat?.icon} size={24} className="text-indigo-600" />
              </div>
              <div className="font-lora text-3xl font-bold text-slate-900 mb-1">
                {stat?.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 card-hover"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, starIndex) => (
                  <Icon key={starIndex} name="Star" size={16} className="text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Icon name="Quote" size={24} className="text-indigo-600 mb-3" />
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial?.content}"
                </p>
              </div>

              {/* Case Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <Icon name="FileText" size={14} className="text-slate-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    <strong>Caso:</strong> {testimonial?.case}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    <strong>Resultado:</strong> {testimonial?.outcome}
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">
                      {testimonial?.author}
                    </div>
                    <div className="text-xs text-slate-500">
                      Caso resolvido com sucesso
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-slate-900 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-lora text-2xl font-bold mb-4">
                Pronto para resolver sua questão jurídica?
              </h3>
              <p className="text-indigo-100 mb-6">
                Agende seu atendimento e descubra como podemos ajudar você a alcançar os melhores resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                  className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300"
                >
                  <Icon name="MessageCircle" size={18} />
                  <span>Agendar atendimento</span>
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+5566999111314'}
                  className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  <Icon name="Phone" size={18} />
                  <span>(66) 99911-1314</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Disponível 24h por dia, 7 dias por semana.',
      value: '(66) 99911-1314',
      action: () => window.open('https://wa.me/5566999111314', '_blank'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'Phone',
      title: 'Telefone',
      description: 'Atendimento em horário comercial.',
      value: '(66) 99911-1314',
      action: () => window.location.href = 'tel:+5566999111314',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Mail',
      title: 'E-mail',
      description: 'Resposta imediata',
      value: 'contato@marcelobaia.adv.br',
      action: () => window.location.href = 'mailto:contato@marcelobaia.adv.br',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: 'MapPin',
      title: 'Escritório',
      description: 'Rondonópolis/MT',
      value: 'Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028',
      action: () => window.open('https://maps.google.com/?q=Rua+Tiradentes,+1888+Centro+Rondonópolis+MT', '_blank'),
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Icon name="MessageCircle" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Entre em Contato</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Vamos conversar sobre{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              sua situação
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Escolha a forma de contato mais conveniente para você. Estamos sempre disponíveis para esclarecer dúvidas e agendar atendimentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="font-lora text-2xl font-semibold text-slate-900 mb-6">
                Formas de contato
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods?.map((method, index) => (
                  <button
                    key={index}
                    onClick={method?.action}
                    className="text-left p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 card-hover group"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${method?.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method?.icon} size={24} className={method?.color} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {method?.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {method?.description}
                    </p>
                    <p className="text-sm font-medium text-slate-800">
                      {method?.value}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h4 className="font-lora text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Clock" size={20} className="text-indigo-600 mr-2" />
                Horário de atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Endereço</span>
                  <span className="font-medium text-slate-900 text-right">Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="mb-6">
              <h3 className="font-lora text-2xl font-semibold text-slate-900 mb-2">
                Envie sua mensagem
              </h3>
              <p className="text-slate-600">
                Preencha o formulário e entraremos em contato imediatamente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Nome completo"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Telefone"
                  type="tel"
                  name="phone"
                  placeholder="(66) 99911-1314"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="E-mail"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData?.email}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Assunto"
                type="text"
                name="subject"
                placeholder="Qual área do direito?"
                value={formData?.subject}
                onChange={handleInputChange}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua situação com detalhes..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                iconName="Send"
                iconPosition="right"
                iconSize={18}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Enviar mensagem
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Ao enviar, você concorda com nossa política de privacidade e proteção de dados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};



const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300">
      {/* Main CTA Bar */}
      <div className={`bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Info */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-slate-900 rounded-lg">
                <Icon name="Scale" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-lora font-semibold text-slate-900 text-sm">
                  Precisa de ajuda jurídica?
                </h4>
                <p className="text-xs text-slate-600">
                  Entre em contato
                </p>
              </div>
            </div>

            {/* Center - Mobile Info */}
            <div className="sm:hidden flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-600 to-slate-900 rounded-lg">
                <Icon name="Scale" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-lora font-semibold text-slate-900 text-sm">
                  Entre em contato
                </h4>
              </div>
            </div>

            {/* Right - CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                className="hidden sm:inline-flex text-slate-700 border-slate-300 hover:bg-slate-50"
              >
                (66) 99911-1314
              </Button>
              
              <Button
                variant="default"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
              >
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Conversar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimize/Maximize Button */}
      <button
        onClick={toggleMinimize}
        className="absolute -top-10 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-t-lg shadow-lg transition-colors duration-200"
        aria-label={isMinimized ? 'Mostrar barra de contato' : 'Ocultar barra de contato'}
      >
        <Icon 
          name={isMinimized ? "ChevronUp" : "ChevronDown"} 
          size={16} 
        />
      </button>
    </div>
  );
};


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

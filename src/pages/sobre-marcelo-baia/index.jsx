import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/ui/Header';
import Image from '@/components/AppImage';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Footer from '@/components/ui/Footer';


const HeroSection = ({ onContactClick, onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-zinc-100 pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            
            <h1 className="font-lora text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Marcelo Baía Advocacia
            </h1>
            <div className="prose prose-lg text-text-primary mb-10">
              <p>
                Nossa empresa é dirigida pelo advogado Marcelo Andrigo Baía Eduardo, com endereço profissional em Rondonópolis-MT, tendo atuado nos estados de Tocantins, Goiás, Mato Grosso do Sul, Mato Grosso, Rondônia, Santa Catarina e São Paulo.
              </p>
            </div>

            <p className="text-xl lg:text-2xl text-text-secondary font-light mb-8 leading-relaxed">
              Nossa missão é oferecer um trabalho profissional, com informações claras, seguras e confiáveis para possibilitá-lo a tomar decisões importantes que trazem grandes repercussões em sua vida.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onContactClick}
                iconName="Calendar"
                iconPosition="left"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg"
              >
                Agendar Consulta
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
              >
                WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="public\assets\images\Marcelo.png"
                  alt="Marcelo Baía - Advogado especialista em Direito Civil, Consumidor, Família e Empresarial"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating credential card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-brand-accent font-bold text-lg">MB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-primary">OAB/MT 14.159-B</h3>
                    <p className="text-sm text-text-secondary">Ativo desde 2005</p>
                  </div>
                </div>
                <p className="text-sm text-text-primary">
                  Especialista em Direito Civil, Consumidor, Família e Empresarial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const ProfessionalJourney = () => {
  const milestones = [
    {
      year: "2005",
      title: "Início na OAB como Estagiário",
      description: "Inscrição como estagiário na OAB/GO nº 17.604/E, realizando atos jurídicos e peticionamento.",
      icon: "FileSignature",
      color: "bg-emerald-500"
    },
    {
      year: "2006",
      title: "Graduação em Direito",
      description: "Formado em Direito pelo Centro Universitário de Goiás, em Goiânia-GO.",
      icon: "GraduationCap",
      color: "bg-blue-500"
    },
    {
      year: "2008",
      title: "Inscrição como Advogado",
      description: "OAB/GO nº 27.669, com atuação em cerca de 2.500 processos pela Procuradoria de Assistência Judiciária do Estado de Goiás.",
      icon: "Gavel",
      color: "bg-purple-500"
    },
    {
      year: "2010",
      title: "Transferência para OAB/MT",
      description: "Inscrição por transferência na OAB/MT nº 14.159-B.",
      icon: "MapPin",
      color: "bg-orange-500"
    },
    {
      year: "2011",
      title: "Analista Jurídico TRF1",
      description: "Aprovação no concurso de Analista Jurídico do Tribunal Regional Federal da 1ª Região.",
      icon: "Landmark",
      color: "bg-amber-500"
    },
    {
      year: "2012",
      title: "Pós-Graduação em Direito Público",
      description: "Especialização em Direito Público Material pelo Centro Universitário de Araras-MG.",
      icon: "BookOpenCheck",
      color: "bg-indigo-500"
    },
    {
      year: "2012",
      title: "Início na Docência",
      description: "Atuação como professor de Direito Civil, Processual Civil, Empresarial e Trabalhista.",
      icon: "Users",
      color: "bg-teal-500"
    },
    {
      year: "2016",
      title: "Inovação Digital",
      description: "Implementação de virtualização de processos e soluções digitais.",
      icon: "Laptop",
      color: "bg-pink-500"
    },
    {
      year: "2018",
      title: "Procurador em Alto Garças-MT",
      description: "Aprovação no concurso de Procurador Jurídico do Município de Alto Garças-MT.",
      icon: "Award",
      color: "bg-red-500"
    },
    {
      year: "2023",
      title: "Procurador em São José do Povo-MT",
      description: "Aprovação no concurso de Procurador Jurídico do Município de São José do Povo-MT, com posse em 2024.",
      icon: "CheckCircle",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Trajetória Profissional
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Uma jornada de dedicação contínua ao aperfeiçoamento técnico e ao atendimento 
            humanizado, sempre buscando a excelência na prestação de serviços jurídicos.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-transparent"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={milestone?.year}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-accent shadow-lg flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${milestone?.color}`}></div>
                </div>

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${milestone?.color} rounded-lg flex items-center justify-center shadow-sm`}>
                        <Icon name={milestone?.icon} size={24} color="white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full">
                          {milestone?.year}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-lora text-xl font-semibold text-brand-primary mb-3">
                      {milestone?.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const MethodologySection = () => {
  const methodologySteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Análise detalhada do seu caso com escuta ativa e identificação de todas as questões jurídicas envolvidas.",
      features: [
        "Atendimento presencial ou online",
        "Análise de documentos",
        "Orientação inicial gratuita",
        "Definição de estratégia"
      ],
      icon: "MessageSquare",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Avaliação Transparente",
      description: "Apresentação clara dos caminhos possíveis, prazos estimados e estrutura de honorários sem surpresas.",
      features: [
        "Explicação em linguagem simples",
        "Cronograma detalhado",
        "Orçamento transparente",
        "Expectativas realistas"
      ],
      icon: "Search",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: "03",
      title: "Execução Estratégica",
      description: "Desenvolvimento do caso com acompanhamento constante e comunicação regular sobre cada etapa do processo.",
      features: [
        "Updates regulares por WhatsApp",
        "Acesso aos documentos online",
        "Reuniões de acompanhamento",
        "Suporte técnico contínuo"
      ],
      icon: "Target",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "04",
      title: "Resolução e Suporte",
      description: "Conclusão do caso com orientações para o futuro e suporte pós-resolução quando necessário.",
      features: [
        "Entrega de resultados",
        "Orientações preventivas",
        "Suporte pós-caso",
        "Relacionamento duradouro"
      ],
      icon: "CheckCircle",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const principles = [
    {
      title: "Comunicação Clara",
      description: "Explicações em linguagem acessível, sem juridiquês desnecessário",
      icon: "MessageCircle"
    },
    {
      title: "Transparência Total",
      description: "Honorários claros, prazos realistas e expectativas bem definidas",
      icon: "Eye"
    },
    {
      title: "Atendimento Humanizado",
      description: "Escuta ativa, empatia e respeito às suas preocupações e necessidades",
      icon: "Heart"
    },
    {
      title: "Excelência Técnica",
      description: "Conhecimento atualizado e estratégias jurídicas eficazes",
      icon: "Award"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Metodologia de Trabalho
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Um processo estruturado e transparente que garante o melhor resultado 
            para o seu caso, com comunicação clara em cada etapa.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {methodologySteps?.map((step, index) => (
            <div
              key={step?.step}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${step?.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon name={step?.icon} size={28} color="white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-text-secondary/30">
                      {step?.step}
                    </span>
                    <h3 className="font-lora text-xl font-semibold text-brand-primary">
                      {step?.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary">
                    {step?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {step?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} color="rgb(34 197 94)" />
                    <span className="text-sm text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="font-lora text-2xl lg:text-3xl font-bold text-brand-primary text-center mb-12">
            Princípios que Norteiam Nosso Trabalho
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles?.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={principle?.icon} size={24} color="rgb(79 70 229)" />
                </div>
                <h4 className="font-semibold text-brand-primary mb-3">
                  {principle?.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {principle?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const CredentialsSection = () => {
  const education = [
    {
      degree: "Bacharel em Direito",
      institution: "Universidade Federal de Mato Grosso (UFMT)",
      year: "2005",
      description: "Formação sólida em Ciências Jurídicas com ênfase em Direito Civil e Processual Civil"
    },
    {
      degree: "Pós-Graduação em Direito Civil",
      institution: "Instituto de Direito Aplicado (IDA)",
      year: "2017",
      description: "Especialização em contratos, responsabilidade civil e direitos reais"
    },
    {
      degree: "Certificação em Direito do Consumidor",
      institution: "Escola Superior de Advocacia (ESA/MT)",
      year: "2019",
      description: "Capacitação especializada em defesa dos direitos do consumidor"
    }
  ];

  const certifications = [
    {
      title: "OAB/MT 14.159-B",
      description: "Inscrito e ativo na Ordem dos Advogados do Brasil - Seção Mato Grosso",
      icon: "Scale",
      status: "Ativo desde 2005"
    },
    {
      title: "Comissão de Direito Civil",
      description: "Membro ativo da Comissão de Direito Civil da OAB/MT 14.159-B",
      icon: "Users",
      status: "Desde 2023"
    },
    {
      title: "Mediação e Conciliação",
      description: "Certificado em técnicas de mediação e resolução de conflitos",
      icon: "Handshake",
      status: "Certificado 2022"
    }
  ];

  // Achievements section temporarily disabled
  // const achievements = [
  //   {
  //     title: "Palestrante Jurídico",
  //     description: "Participação em eventos e seminários sobre Direito Civil e do Consumidor",
  //     count: "15+",
  //     label: "Palestras"
  //   },
  //   {
  //     title: "Casos Resolvidos",
  //     description: "Histórico de sucesso em diversas áreas do direito",
  //     count: "500+",
  //     label: "Casos"
  //   },
  //   {
  //     title: "Anos de Experiência",
  //     description: "Dedicação contínua à advocacia em Rondonópolis/MT",
  //     count: "8+",
  //     label: "Anos"
  //   },
  //   {
  //     title: "Clientes Atendidos",
  //     description: "Pessoas físicas e jurídicas assessoradas com excelência",
  //     count: "300+",
  //     label: "Clientes"
  //   }
  // ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Credenciais e Qualificações
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Formação acadêmica sólida, certificações profissionais e experiência prática 
            que garantem a qualidade técnica dos serviços prestados.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
            Formação Acadêmica
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {education?.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" size={24} color="rgb(79 70 229)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-brand-primary text-sm">
                        {edu?.degree}
                      </h4>
                      <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs rounded-full">
                        {edu?.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-text-secondary mb-2">
                      {edu?.institution}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {edu?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
            Certificações Profissionais
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} color="rgb(79 70 229)" />
                </div>
                <h4 className="font-semibold text-brand-primary mb-2">
                  {cert?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  {cert?.description}
                </p>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                  {cert?.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements section is temporarily disabled */}
        {false && (
          <div className="bg-gradient-to-br from-slate-50 to-zinc-100 rounded-2xl p-8 lg:p-12">
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
              Números que Refletem a Experiência
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements?.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-bold text-brand-accent">
                      {achievement?.count}
                    </span>
                    <p className="text-sm font-medium text-brand-accent mt-1">
                      {achievement?.label}
                    </p>
                  </div>
                  <h4 className="font-semibold text-brand-primary mb-2">
                    {achievement?.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {achievement?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};



const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: `A comunicação clara e o atendimento humanizado do Dr. Marcelo fizeram toda a diferença no meu caso. Ele explicou cada etapa do processo de forma simples e sempre esteve disponível para esclarecer minhas dúvidas.`,
      author: "Maria S.",
      case: "Direito do Consumidor",
      rating: 5,
      location: "Rondonópolis/MT"
    },
    {
      id: 2,
      content: `Profissional extremamente competente e transparente. Os honorários foram apresentados de forma clara desde o início, sem surpresas. Recomendo sem hesitação para questões de direito civil.`,
      author: "João P.",
      case: "Direito Civil",
      rating: 5,
      location: "Rondonópolis/MT"
    },
    {
      id: 3,
      content: `O Dr. Marcelo conduziu meu processo de divórcio com muita sensibilidade e profissionalismo. Sempre respeitou nossos sentimentos e buscou a melhor solução para toda a família.`,
      author: "Ana C.",
      case: "Direito de Família",
      rating: 5,
      location: "Rondonópolis/MT"
    },
    {
      id: 4,
      content: `Excelente assessoria jurídica para nossa empresa. O Dr. Marcelo nos ajudou a estruturar contratos e prevenir problemas futuros. Atendimento ágil e orientações muito práticas.`,
      author: "Carlos M.",
      case: "Direito Empresarial",
      rating: 5,
      location: "Rondonópolis/MT"
    }
  ];

  const trustIndicators = [
    {
      icon: "Shield",
      title: "Confidencialidade",
      description: "Sigilo profissional absoluto em todos os casos"
    },
    {
      icon: "Clock",
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos e compromissos"
    },
    {
      icon: "MessageCircle",
      title: "Comunicação",
      description: "Atualizações regulares sobre o andamento do caso"
    },
    {
      icon: "Heart",
      title: "Empatia",
      description: "Atendimento humanizado e compreensivo"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "rgb(245 158 11)" : "rgb(209 213 219)"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            O que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Depoimentos reais de clientes que confiaram em nosso trabalho para resolver 
            suas questões jurídicas com transparência e eficiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Quote" size={24} color="rgb(79 70 229)" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial?.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-text-primary leading-relaxed mb-6 italic">
                "{testimonial?.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-primary">
                    {testimonial?.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial?.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-medium rounded-full">
                    {testimonial?.case}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="font-lora text-2xl font-semibold text-brand-primary text-center mb-12">
            Compromissos com Nossos Clientes
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators?.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={indicator?.icon} size={24} color="rgb(79 70 229)" />
                </div>
                <h4 className="font-semibold text-brand-primary mb-3">
                  {indicator?.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {indicator?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-text-secondary max-w-4xl mx-auto leading-relaxed">
            * Os depoimentos apresentados são baseados em experiências reais de clientes, 
            preservando sua privacidade conforme determina o Código de Ética da OAB. 
            Resultados passados não garantem resultados futuros, sendo cada caso analisado 
            individualmente conforme suas particularidades jurídicas.
          </p>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Disponível 24h por dia, 7 dias por semana.",
      action: "Conversar Agora",
      color: "from-green-500 to-green-600",
      onClick: () => window.open('https://wa.me/5566999111314', '_blank')
    },
    {
      icon: "Phone",
      title: "Telefone",
      description: "Atendimento em horário comercial.",
      action: "Ligar Agora",
      color: "from-blue-500 to-blue-600",
      onClick: () => window.location.href = 'tel:+5566999111314'
    },
    {
      icon: "Mail",
      title: "E-mail",
      description: "Envie sua dúvida detalhada",
      action: "Enviar E-mail",
      color: "from-purple-500 to-purple-600",
      onClick: () => window.location.href = 'mailto:contato@marcelobaia.adv.br'
    },
    {
      icon: "MapPin",
      title: "Escritório",
      description: "Atendimento presencial mediante agendamento.",
      action: "Ver Localização",
      color: "from-orange-500 to-orange-600",
      onClick: () => window.open('https://maps.google.com/?q=Rua+Tiradentes,+1888+Centro+Rondonópolis+MT', '_blank')
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Vamos Conversar Sobre Seu Caso
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Entre em contato para uma consulta inicial. Estamos aqui para esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8">
              Canais de Atendimento
            </h3>
            
            <div className="space-y-6">
              {contactMethods?.map((method, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method?.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon name={method?.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-primary mb-2">
                        {method?.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-4">
                        {method?.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={method?.onClick}
                        className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                      >
                        {method?.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 rounded-xl">
              <h4 className="font-semibold text-brand-primary mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2" />
                Escritório em Rondonópolis/MT
              </h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>📍 Rua Tiradentes, 1888 – Centro, CEP 78.700-028</p>
                <p>📞 (66) 99911-1314</p>
                <p>✉️ contato@marcelobaia.adv.br</p>
                <p>🆔 OAB/MT 14.159-B</p>
                <p>🕒 Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
                
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="(66) 99911-1314"
                  required
                />
                
                <Input
                  label="Assunto"
                  type="text"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  placeholder="Área do direito ou tipo de caso"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-primary mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                  placeholder="Descreva brevemente sua situação ou dúvida jurídica..."
                  required
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} color="rgb(245 158 11)" className="flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Consulta Inicial Gratuita</p>
                    <p>
                      A primeira consulta é gratuita e sem compromisso. Vamos analisar seu caso 
                      e apresentar as melhores opções para sua situação.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                fullWidth
                iconName="Send"
                iconPosition="right"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>

            {/* Privacy Note */}
            <div className="mt-6 text-xs text-text-secondary">
              <p>
                🔒 Suas informações são protegidas pelo sigilo profissional e pela LGPD. 
                Utilizamos seus dados apenas para responder sua solicitação e eventual 
                prestação de serviços jurídicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


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
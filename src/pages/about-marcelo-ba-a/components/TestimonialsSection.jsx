import React from 'react';
import Icon from '../../../components/AppIcon';

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

export default TestimonialsSection;
import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: `Atendimento excepcional com explicações claras sobre todo o processo. O Dr. Marcelo sempre esteve disponível para esclarecer dúvidas e manteve comunicação constante durante todo o caso.`,
      author: "Cliente - Direito Civil",
      rating: 5,
      case: "Resolução de conflito contratual",
      outcome: "Acordo extrajudicial em prazo breve"
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
      outcome: "Processo finalizado em período aproximado"
    }
  ];

  const stats = [
    { number: "500+", label: "Casos resolvidos", icon: "CheckCircle" },
    { number: "95%", label: "Taxa de sucesso", icon: "TrendingUp" },
    { number: "8+", label: "Anos de experiência", icon: "Calendar" },
    { number: "Poucas horas", label: "Tempo médio de resposta", icon: "Clock" }
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
                Fale com a equipe para uma avaliação do seu caso e descubra como podemos ajudar você a alcançar os melhores resultados.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                    className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300"
                  >
                    <Icon name="MessageCircle" size={18} />
                    <span>Agendar consulta</span>
                  </button>
                  <button
                    onClick={() => window.location.href = 'tel:+5566999111314'}
                    className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  >
                    <Icon name="Phone" size={18} />
                    <span>(66) 99911-1314</span>
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/80">
                  Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
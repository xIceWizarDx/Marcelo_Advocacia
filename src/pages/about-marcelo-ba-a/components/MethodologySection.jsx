import React from 'react';
import Icon from '../../../components/AppIcon';

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
            Um processo estruturado e transparente que busca o melhor resultado
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

export default MethodologySection;
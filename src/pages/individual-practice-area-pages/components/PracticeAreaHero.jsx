import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PracticeAreaHero = ({ practiceArea, onWhatsAppClick, onCallClick }) => {
  const heroContent = {
    civil: {
      title: "Quando seus direitos são questionados",
      subtitle: "Proteção jurídica completa para questões civis",
      description: "Defendemos seus interesses em contratos, responsabilidade civil, direitos reais e questões patrimoniais com estratégia personalizada e comunicação clara.",
      icon: "Scale",
      gradient: "from-slate-900 via-slate-800 to-slate-700"
    },
    consumer: {
      title: "Protegendo você como consumidor",
      subtitle: "Seus direitos de consumidor em primeiro lugar",
      description: "Especialização em defesa do consumidor, resolução de conflitos com empresas, restituição de valores e reparação de danos morais e materiais.",
      icon: "Shield",
      gradient: "from-indigo-900 via-indigo-800 to-slate-800"
    },
    family: {
      title: "Cuidando da sua família com sensibilidade",
      subtitle: "Direito de família com atendimento humanizado",
      description: "Orientação jurídica em divórcio, guarda, pensão alimentícia e questões familiares com discrição, empatia e foco na proteção de todos os envolvidos.",
      icon: "Heart",
      gradient: "from-amber-900 via-amber-800 to-slate-800"
    },
    business: {
      title: "Protegendo seu negócio com prevenção",
      subtitle: "Consultoria jurídica empresarial estratégica",
      description: "Assessoria completa para empresas, contratos comerciais, compliance, recuperação judicial e prevenção de riscos jurídicos para o crescimento sustentável.",
      icon: "Building2",
      gradient: "from-slate-900 via-indigo-900 to-slate-800"
    }
  };

  const content = heroContent[practiceArea] || heroContent.civil;

  return (
    <section className={`relative py-20 lg:py-32 bg-gradient-to-br ${content.gradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name={content.icon} size={24} color="white" />
              </div>
              <span className="text-white/80 font-inter font-medium text-sm uppercase tracking-wider">
                Área de Atuação
              </span>
            </div>

            <h1 className="font-lora font-bold text-3xl lg:text-5xl leading-tight mb-6">
              {content.title}
            </h1>

            <h2 className="font-inter font-semibold text-xl lg:text-2xl text-white/90 mb-6">
              {content.subtitle}
            </h2>

            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-xl"
              >
                Consulta via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onCallClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Ligar Agora
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">OAB/MT Ativo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">Resposta em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">Rondonópolis/MT</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 mx-auto">
                  <Icon name={content.icon} size={48} color="white" />
                </div>
                <div className="text-center">
                  <h3 className="font-lora font-semibold text-xl text-white mb-4">
                    Atendimento Especializado
                  </h3>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Cada caso é único. Nossa abordagem personalizada garante que você receba a orientação jurídica mais adequada para sua situação específica.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon name="Star" size={24} color="white" className="opacity-60" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon name="Award" size={20} color="white" className="opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaHero;
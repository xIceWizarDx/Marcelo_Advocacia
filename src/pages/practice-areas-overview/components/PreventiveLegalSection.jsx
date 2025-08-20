import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

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
    const message = encodeURIComponent(
      "Olá, tenho interesse em consultoria jurídica preventiva. Gostaria de saber mais sobre os serviços disponíveis."
    );
    window.open(`https://wa.me/5565999999999?text=${message}`, '_blank');
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
                onClick={() => window.location.href = 'tel:+5565999999999'}
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
                className="border-white text-white hover:bg-white hover:text-brand-primary font-medium px-8 py-3"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventiveLegalSection;
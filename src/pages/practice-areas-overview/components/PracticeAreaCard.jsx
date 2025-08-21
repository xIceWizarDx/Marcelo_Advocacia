import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

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
          <p className="text-xs text-text-secondary mt-2">
            Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
          </p>

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
            <p className="text-xs text-text-secondary mt-2">
              Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
            </p>
          </div>
      </div>
    </div>
  );
};

export default PracticeAreaCard;
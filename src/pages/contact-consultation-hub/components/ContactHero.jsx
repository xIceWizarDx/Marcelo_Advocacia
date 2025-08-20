import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onWhatsAppClick, onPhoneClick }) => {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Icon name="MessageCircle" size={32} color="white" />
          </div>
          
          <h1 className="font-lora text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Vamos Conversar Sobre Seu
            <span className="block text-amber-400">Caso Jurídico</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
            Orientação jurídica clara e personalizada para suas necessidades. 
            Entre em contato e agende sua consulta hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="default"
              size="lg"
              onClick={onWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={20}
              className="bg-green-600 hover:bg-green-700 text-white shadow-xl px-8 py-4 text-lg font-semibold"
            >
              WhatsApp Direto
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onPhoneClick}
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              (66) 99911-1314
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Resposta em até 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} />
              <span>Consulta confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} />
              <span>Primeira orientação gratuita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
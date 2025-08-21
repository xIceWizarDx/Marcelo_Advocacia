import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onContactClick, onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-zinc-100 pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 rounded-full text-brand-accent text-sm font-medium mb-6">
              <span>Marcelo Baía — OAB/MT 14.159-B • Advocacia desde 2015</span>
            </div>
            
            <h1 className="font-lora text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Marcelo Baía
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary font-light mb-8 leading-relaxed">
              Advocacia clara e segura para decisões importantes da sua vida
            </p>
            
            <div className="prose prose-lg text-text-primary mb-10">
              <p>
                Com mais de 8 anos de experiência em Rondonópolis/MT, dedico-me a transformar 
                complexidades jurídicas em orientações claras e acessíveis. Minha missão é 
                oferecer assessoria técnica de excelência com linguagem simples, garantindo 
                que você compreenda cada etapa do processo legal.
              </p>
            </div>
            
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
                    <h3 className="font-semibold text-brand-primary">Marcelo Baía — OAB/MT 14.159-B</h3>
                    <p className="text-sm text-text-secondary">Ativo desde 2015</p>
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

export default HeroSection;
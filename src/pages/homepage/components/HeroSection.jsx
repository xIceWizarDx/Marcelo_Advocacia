import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

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
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <Icon name="Shield" size={16} className="text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">OAB/MT 14.159-B</span>
            </div>

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
                Orientação técnica com linguagem simples. Prevenção de riscos e solução de conflitos com atendimento humanizado em Rondonópolis/MT.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'MessageCircle', text: 'Comunicação direta' },
                { icon: 'Clock', text: 'Resposta em até 2h' },
                { icon: 'Shield', text: 'Sigilo garantido' },
                { icon: 'MapPin', text: 'Atendimento local' }
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
            <p className="text-xs text-slate-600 mt-2">
              Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
            </p>
          </div>

          {/* Right Column - Quick Consultation Form */}
          <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  <Icon name="Calendar" size={24} className="text-indigo-600" />
                </div>
                <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2">
                  Consulta Gratuita
                </h3>
                <p className="text-slate-600 text-sm">
                  Agende uma conversa inicial sem compromisso
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
                    Assunto da consulta
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
                  Solicitar Consulta
                </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Resposta garantida em até 2 horas úteis
                  </p>
                  <p className="text-xs text-slate-500 text-center mt-1">
                    Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
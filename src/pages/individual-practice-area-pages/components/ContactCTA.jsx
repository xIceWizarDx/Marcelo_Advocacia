import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactCTA = ({ practiceArea }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    urgency: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgente (preciso de resposta hoje)' },
    { value: 'soon', label: 'Em breve (até 2 dias úteis)' },
    { value: 'normal', label: 'Normal (até 1 semana)' },
    { value: 'planning', label: 'Planejamento (sem pressa)' }
  ];

  const practiceAreaNames = {
    civil: 'Direito Civil',
    consumer: 'Direito do Consumidor',
    family: 'Direito de Família',
    business: 'Direito Empresarial'
  };

  const whatsappTemplates = {
    civil: 'Olá, preciso de orientação em Direito Civil. Gostaria de agendar uma consulta.',
    consumer: 'Olá, tenho uma questão de Direito do Consumidor e preciso de ajuda jurídica.',
    family: 'Olá, preciso de orientação em Direito de Família. Gostaria de conversar sobre minha situação.',
    business: 'Olá, sou empresário e preciso de consultoria jurídica empresarial.'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      urgency: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        urgency: '',
        message: '',
        consent: false
      });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  if (showSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-green-200">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-600" />
            </div>
            <h3 className="font-lora font-bold text-2xl text-slate-900 mb-4">
              Mensagem Enviada com Sucesso!
            </h3>
            <p className="font-inter text-slate-600 mb-6">
              Recebemos sua solicitação e entraremos em contato em até 24 horas. 
              Para questões urgentes, utilize nossos canais diretos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-green-600 hover:bg-green-700"
              >
                WhatsApp Direto
              </Button>
              <Button
                variant="outline"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                (66) 99911-1314
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="font-lora font-bold text-3xl lg:text-4xl mb-6">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8">
              Entre em contato conosco para uma consulta personalizada em {practiceAreaNames?.[practiceArea] || 'Direito Civil'}. 
              Oferecemos atendimento humanizado e soluções jurídicas eficazes.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icon name="MessageCircle" size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">WhatsApp</h4>
                  <p className="font-inter text-sm text-white/70">Resposta imediata durante horário comercial</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icon name="Phone" size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">Telefone</h4>
                  <p className="font-inter text-sm text-white/70">(66) 99911-1314 - Atendimento mediante agendamento</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icon name="Mail" size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">E-mail</h4>
                  <p className="font-inter text-sm text-white/70">Resposta em até 24 horas</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold"
              >
                WhatsApp Direto
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="font-lora font-semibold text-2xl text-slate-900 mb-2">
                Solicite uma Consulta
              </h3>
              <p className="font-inter text-slate-600">
                Preencha o formulário e entraremos em contato em até 24 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome Completo"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />

                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="(66) 99911-1314"
                  required
                />
              </div>

              <Select
                label="Urgência do Caso"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={handleSelectChange}
                placeholder="Selecione a urgência"
                required
              />

              <div>
                <label className="block font-inter font-medium text-slate-900 mb-2">
                  Descreva sua Situação
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
                  placeholder="Conte-nos sobre sua situação jurídica..."
                  required
                />
              </div>

              <Checkbox
                label="Autorizo o tratamento dos meus dados para contato e análise do meu caso, conforme a Política de Privacidade"
                name="consent"
                checked={formData?.consent}
                onChange={handleInputChange}
                required
              />

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                fullWidth
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
              </Button>

              <div className="text-center">
                <p className="font-inter text-xs text-slate-500">
                  Ao enviar, você concorda com nossa política de privacidade. 
                  Seus dados são protegidos pela LGPD.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
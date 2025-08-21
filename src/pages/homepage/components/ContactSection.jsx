import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Atendimento via WhatsApp é em tempo integral.',
      value: '(66) 99911-1314',
      action: () => window.open('https://wa.me/5566999111314', '_blank'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'Phone',
      title: 'Telefone',
      description: 'Atendimento mediante agendamento.',
      value: '(66) 99911-1314',
      action: () => window.location.href = 'tel:+5566999111314',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Mail',
      title: 'E-mail',
      description: 'Resposta em até 4h',
      value: 'marcelobaiaadvogado@gmail.com',
      action: () => window.location.href = 'mailto:marcelobaiaadvogado@gmail.com',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: 'MapPin',
      title: 'Escritório',
      description: 'Rondonópolis/MT',
      value: 'Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028',
      action: () => window.open('https://maps.google.com/?q=Rua+Tiradentes,+1888+Centro+Rondonópolis+MT', '_blank'),
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Icon name="MessageCircle" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Entre em Contato</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Vamos conversar sobre{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              sua situação
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Escolha a forma de contato mais conveniente para você. Estou sempre disponível para esclarecer dúvidas e agendar consultas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="font-lora text-2xl font-semibold text-slate-900 mb-6">
                Formas de contato
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods?.map((method, index) => (
                  <button
                    key={index}
                    onClick={method?.action}
                    className="text-left p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 card-hover group"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${method?.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method?.icon} size={24} className={method?.color} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {method?.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {method?.description}
                    </p>
                    <p className="text-sm font-medium text-slate-800">
                      {method?.value}
                    </p>
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
              </p>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h4 className="font-lora text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Icon name="Clock" size={20} className="text-indigo-600 mr-2" />
                Horário de atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Marcelo Baía — OAB/MT 14.159-B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Endereço</span>
                  <span className="font-medium text-slate-900 text-right">Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Atendimento mediante agendamento. Atendimento via WhatsApp é em tempo integral.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="mb-6">
              <h3 className="font-lora text-2xl font-semibold text-slate-900 mb-2">
                Envie sua mensagem
              </h3>
              <p className="text-slate-600">
                Preencha o formulário e entrarei em contato em até 2 horas úteis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
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
                  label="Telefone"
                  type="tel"
                  name="phone"
                  placeholder="(66) 99911-1314"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="E-mail"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData?.email}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Assunto"
                type="text"
                name="subject"
                placeholder="Qual área do direito?"
                value={formData?.subject}
                onChange={handleInputChange}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua situação com detalhes..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
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
                fullWidth
                iconName="Send"
                iconPosition="right"
                iconSize={18}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Enviar mensagem
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                Ao enviar, você concorda com nossa política de privacidade e proteção de dados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
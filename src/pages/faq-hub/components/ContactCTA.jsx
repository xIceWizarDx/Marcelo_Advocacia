import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', question: '' });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-border shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={24} className="text-green-600" />
        </div>
        <h3 className="font-lora font-semibold text-xl text-text-primary mb-2">
          Pergunta Enviada!
        </h3>
        <p className="text-text-secondary">
          Recebemos sua pergunta e responderemos em breve por email.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-6 lg:p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon name="HelpCircle" size={20} />
          </div>
          <div>
            <h3 className="font-lora font-semibold text-xl">Não encontrou sua resposta?</h3>
            <p className="text-white/80 text-sm">Envie sua pergunta ou entre em contato diretamente</p>
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-text-primary mb-4">
              Envie sua pergunta
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nome completo"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Seu nome"
                required
              />
              
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
              />
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Sua pergunta
                </label>
                <textarea
                  name="question"
                  value={formData?.question}
                  onChange={handleInputChange}
                  placeholder="Descreva sua dúvida jurídica..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                />
              </div>
              
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                fullWidth
                className="bg-brand-accent hover:bg-brand-accent/90"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Pergunta'}
              </Button>
            </form>
          </div>
          
          {/* Direct Contact */}
          <div>
            <h4 className="font-inter font-semibold text-lg text-text-primary mb-4">
              Contato direto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={20} className="text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="font-inter font-medium text-text-primary mb-1">WhatsApp</h5>
                  <p className="text-text-secondary text-sm mb-3">
                    Resposta rápida e atendimento personalizado
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleWhatsAppClick}
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    Conversar agora
                  </Button>
                  <p className="mt-2 text-xs text-text-secondary">
                    Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="font-inter font-medium text-text-primary mb-1">Telefone</h5>
                  <p className="text-text-secondary text-sm mb-3">
                    Atendimento mediante agendamento. Atendimento via WhatsApp é em tempo integral.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = 'tel:+5566999111314'}
                    iconName="Phone"
                    iconPosition="left"
                    className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    (66) 99911-1314
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={20} className="text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="font-inter font-medium text-text-primary mb-1">Consulta Presencial</h5>
                  <p className="text-text-secondary text-sm mb-3">
                    Agende uma consulta em nosso escritório
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = '/contact-consultation-hub'}
                    iconName="MapPin"
                    iconPosition="left"
                    className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    Agendar consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Disponível 24h por dia, 7 dias por semana.",
      action: "Conversar Agora",
      color: "from-green-500 to-green-600",
      onClick: () => window.open('https://wa.me/5566999111314', '_blank')
    },
    {
      icon: "Phone",
      title: "Telefone",
      description: "Atendimento em horário comercial.",
      action: "Ligar Agora",
      color: "from-blue-500 to-blue-600",
      onClick: () => window.location.href = 'tel:+5566999111314'
    },
    {
      icon: "Mail",
      title: "E-mail",
      description: "Envie sua dúvida detalhada",
      action: "Enviar E-mail",
      color: "from-purple-500 to-purple-600",
      onClick: () => window.location.href = 'mailto:contato@marcelobaia.adv.br'
    },
    {
      icon: "MapPin",
      title: "Escritório",
      description: "Atendimento presencial mediante agendamento.",
      action: "Ver Localização",
      color: "from-orange-500 to-orange-600",
      onClick: () => window.open('https://maps.google.com/?q=Rua+Tiradentes,+1888+Centro+Rondonópolis+MT', '_blank')
    }
  ];

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
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Vamos Conversar Sobre Seu Caso
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Entre em contato para uma consulta inicial. Estamos aqui para esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8">
              Canais de Atendimento
            </h3>
            
            <div className="space-y-6">
              {contactMethods?.map((method, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method?.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon name={method?.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-primary mb-2">
                        {method?.title}
                      </h4>
                      <p className="text-sm text-text-secondary mb-4">
                        {method?.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={method?.onClick}
                        className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                      >
                        {method?.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 rounded-xl">
              <h4 className="font-semibold text-brand-primary mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2" />
                Escritório em Rondonópolis/MT
              </h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>📍 Rua Tiradentes, 1888 – Centro, CEP 78.700-028</p>
                <p>📞 (66) 99911-1314</p>
                <p>✉️ contato@marcelobaia.adv.br</p>
                <p>🆔 OAB/MT 14.159-B</p>
                <p>🕒 Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
                
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="(66) 99911-1314"
                  required
                />
                
                <Input
                  label="Assunto"
                  type="text"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  placeholder="Área do direito ou tipo de caso"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-primary mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                  placeholder="Descreva brevemente sua situação ou dúvida jurídica..."
                  required
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} color="rgb(245 158 11)" className="flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Consulta Inicial Gratuita</p>
                    <p>
                      A primeira consulta é gratuita e sem compromisso. Vamos analisar seu caso 
                      e apresentar as melhores opções para sua situação.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                fullWidth
                iconName="Send"
                iconPosition="right"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>

            {/* Privacy Note */}
            <div className="mt-6 text-xs text-text-secondary">
              <p>
                🔒 Suas informações são protegidas pelo sigilo profissional e pela LGPD. 
                Utilizamos seus dados apenas para responder sua solicitação e eventual 
                prestação de serviços jurídicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
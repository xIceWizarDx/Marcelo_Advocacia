import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import Image from '@/components/AppImage';
import Footer from '@/components/ui/Footer';


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
              <span>Resposta imediata</span>
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



const ContactMethods = ({ onWhatsAppClick, onPhoneClick, onEmailClick }) => {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Resposta rápida e direta para suas dúvidas jurídicas',
      icon: 'MessageCircle',
      color: 'bg-green-50 text-green-700 border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      action: onWhatsAppClick,
      buttonText: 'Conversar Agora',
      details: '(66) 99911-1314 • WhatsApp 24h por dia, 7 dias por semana.',
      recommended: true
    },
    {
      id: 'phone',
      title: 'Telefone',
      description: 'Ligue diretamente para agendar sua consulta',
      icon: 'Phone',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      action: onPhoneClick,
      buttonText: 'Ligar Agora',
      details: '(66) 99911-1314 • Atendimento em horário comercial'
    },
    {
      id: 'email',
      title: 'E-mail',
      description: 'Envie detalhes do seu caso por e-mail',
      icon: 'Mail',
      color: 'bg-slate-50 text-slate-700 border-slate-200',
      buttonColor: 'bg-slate-600 hover:bg-slate-700',
      action: onEmailClick,
      buttonText: 'Enviar E-mail',
      details: 'contato@marcelobaia.adv.br • Resposta imediata'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Como Prefere Entrar em Contato?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Escolha a forma mais conveniente para você. Estamos prontos para atendê-lo 
            da maneira que for mais confortável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${method?.color} ${
                method?.recommended ? 'ring-2 ring-green-500 ring-opacity-50' : ''
              }`}
            >
              {method?.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  method?.id === 'whatsapp' ? 'bg-green-100' :
                  method?.id === 'phone' ? 'bg-blue-100' : 'bg-slate-100'
                }`}>
                  <Icon 
                    name={method?.icon} 
                    size={32} 
                    color={
                      method?.id === 'whatsapp' ? '#059669' :
                      method?.id === 'phone' ? '#2563eb' : '#475569'
                    }
                  />
                </div>
                
                <h3 className="font-lora text-xl font-bold mb-3">
                  {method?.title}
                </h3>
                
                <p className="text-sm mb-4 opacity-80">
                  {method?.description}
                </p>
                
                <p className="text-xs mb-6 opacity-70 font-medium">
                  {method?.details}
                </p>
                
                <Button
                  variant="default"
                  onClick={method?.action}
                  iconName={method?.icon}
                  iconPosition="left"
                  iconSize={18}
                  fullWidth
                  className={`${method?.buttonColor} text-white shadow-md`}
                >
                  {method?.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">
            <Icon name="Info" size={16} />
            <span>Primeira consulta gratuita para avaliação do caso</span>
          </div>
        </div>
      </div>
    </section>
  );
};



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal',
    consultationType: 'initial',
    privacyConsent: false,
    marketingConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgente (resposta em 2 horas)', color: 'text-red-600' },
    { value: 'normal', label: 'Normal (resposta em 24 horas)', color: 'text-blue-600' },
    { value: 'low', label: 'Não urgente (resposta em 48 horas)', color: 'text-green-600' }
  ];

  const consultationTypes = [
    { value: 'initial', label: 'Consulta inicial', description: 'Primeira consulta para avaliação do caso' },
    { value: 'followup', label: 'Acompanhamento', description: 'Continuidade de caso já iniciado' },
    { value: 'document', label: 'Análise de documentos', description: 'Revisão de contratos ou documentos' },
    { value: 'preventive', label: 'Consultoria preventiva', description: 'Orientação para evitar problemas futuros' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          urgency: 'normal',
          consultationType: 'initial',
          privacyConsent: false,
          marketingConsent: false
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Formulário de Contato
          </h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário abaixo com detalhes do seu caso. 
            Quanto mais informações, melhor poderemos ajudá-lo.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Icon name="CheckCircle" size={32} color="#059669" />
              </div>
              <h3 className="font-lora text-2xl font-bold text-slate-900 mb-4">
                Mensagem Enviada com Sucesso!
              </h3>
              <p className="text-slate-600 mb-6">
                Recebemos sua mensagem e entraremos em contato em breve. 
                Verifique seu e-mail para confirmação.
              </p>
              <Button
                variant="outline"
                onClick={() => setSubmitStatus(null)}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Enviar Nova Mensagem
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
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

              <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder="Resumo do seu caso"
                  required
                />
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Nível de Urgência
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {urgencyOptions?.map((option) => (
                    <label
                      key={option?.value}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData?.urgency === option?.value
                          ? 'border-indigo-500 bg-indigo-50' :'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={option?.value}
                        checked={formData?.urgency === option?.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className={`font-medium ${option?.color}`}>
                          {option?.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Tipo de Consulta
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {consultationTypes?.map((type) => (
                    <label
                      key={type?.value}
                      className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData?.consultationType === type?.value
                          ? 'border-indigo-500 bg-indigo-50' :'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value={type?.value}
                        checked={formData?.consultationType === type?.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 mb-1">
                          {type?.label}
                        </div>
                        <div className="text-sm text-slate-600">
                          {type?.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Detalhes do Caso
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Descreva seu caso com o máximo de detalhes possível. Inclua datas, documentos disponíveis e qualquer informação relevante..."
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Mínimo 50 caracteres. Quanto mais detalhes, melhor poderemos ajudá-lo.
                </p>
              </div>

              {/* LGPD Compliance */}
              <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Icon name="Shield" size={18} />
                  Consentimento LGPD
                </h4>
                
                <Checkbox
                  label="Concordo com o tratamento dos meus dados pessoais conforme a Política de Privacidade"
                  checked={formData?.privacyConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, privacyConsent: e?.target?.checked }))}
                  required
                  description="Obrigatório para processar sua solicitação"
                />
                
                <Checkbox
                  label="Aceito receber comunicações sobre serviços jurídicos e conteúdo educativo"
                  checked={formData?.marketingConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, marketingConsent: e?.target?.checked }))}
                  description="Opcional - você pode cancelar a qualquer momento"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  disabled={!formData?.privacyConsent}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                  className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                >
                  {isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-3">
                  Ao enviar, você concorda com nossos termos de serviço e política de privacidade
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};



const OfficeLocation = () => {
  const officeInfo = {
    address: "Rua Tiradentes, 1888 – Centro",
    city: "Rondonópolis - MT", 
    zipCode: "78.700-028",
    coordinates: { lat: -16.4709, lng: -54.6358 }
  };

  const businessHours = [
    { day: 'Segunda-feira', hours: 'Atendimento em horário comercial', isToday: false },
    { day: 'Terça-feira', hours: 'Atendimento em horário comercial', isToday: false },
    { day: 'Quarta-feira', hours: 'Atendimento em horário comercial', isToday: true },
    { day: 'Quinta-feira', hours: 'Atendimento em horário comercial', isToday: false },
    { day: 'Sexta-feira', hours: 'Atendimento em horário comercial', isToday: false },
    { day: 'Sábado', hours: 'Atendimento em horário comercial', isToday: false },
    { day: 'Domingo', hours: 'Atendimento em horário comercial', isToday: false }
  ];

  const facilities = [
    { icon: 'Car', label: 'Estacionamento gratuito' },
    { icon: 'Wifi', label: 'Wi-Fi disponível' },
    { icon: 'Coffee', label: 'Café cortesia' },
    { icon: 'Accessibility', label: 'Acessível para PCD' },
    { icon: 'Shield', label: 'Ambiente seguro' },
    { icon: 'Clock', label: 'Pontualidade garantida' }
  ];

  const handleDirectionsClick = () => {
    const { lat, lng } = officeInfo?.coordinates;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Nosso Escritório
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Localizado no centro de Rondonópolis, oferecemos um ambiente acolhedor 
            e profissional para suas consultas jurídicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-80 lg:h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Escritório Marcelo Baía Advocacia"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=16&output=embed`}
                className="border-0"
              />
            </div>
            
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleDirectionsClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon name="Navigation" size={18} />
                <span>Como Chegar</span>
              </button>
            </div>
          </div>

          {/* Office Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-lora text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Icon name="MapPin" size={24} color="#4f46e5" />
                Endereço
              </h3>
              <div className="space-y-2 text-slate-700">
                <p className="font-medium">{officeInfo?.address}</p>
                <p>{officeInfo?.city}</p>
                <p className="text-sm text-slate-600">CEP: {officeInfo?.zipCode}</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-lora text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Icon name="Clock" size={24} color="#4f46e5" />
                Horário de Funcionamento
              </h3>
              <div className="space-y-2">
                {businessHours?.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-1 ${
                      schedule?.isToday ? 'font-semibold text-indigo-600' : 'text-slate-700'
                    }`}
                  >
                    <span>{schedule?.day}</span>
                    <span className={schedule?.hours === 'Fechado' ? 'text-red-500' : ''}>
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 flex items-center gap-2">
                  <Icon name="Info" size={16} />
                  <span>Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.</span>
                </p>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-lora text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Icon name="Building" size={24} color="#4f46e5" />
                Comodidades
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {facilities?.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <Icon name={facility?.icon} size={16} color="#059669" />
                    <span className="text-sm">{facility?.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-6 lg:p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="Phone" size={24} />
              </div>
              <h4 className="font-semibold mb-1">Telefone</h4>
              <p className="text-indigo-100">(66) 99911-1314</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="Mail" size={24} />
              </div>
              <h4 className="font-semibold mb-1">E-mail</h4>
              <p className="text-indigo-100">contato@marcelobaia.adv.br</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="MessageCircle" size={24} />
              </div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-indigo-100">WhatsApp 24h por dia, 7 dias por semana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const ConsultationPrep = () => {
  const [activeTab, setActiveTab] = useState('prepare');

  const preparationItems = [
    {
      icon: 'FileText',
      title: 'Documentos Relevantes',
      description: 'Traga todos os documentos relacionados ao seu caso',
      items: [
        'Contratos, acordos ou termos assinados',
        'Correspondências (e-mails, cartas, mensagens)',
        'Comprovantes de pagamento ou recibos',
        'Documentos pessoais (RG, CPF, comprovante de residência)',
        'Certidões ou registros oficiais',
        'Fotos ou evidências visuais do problema'
      ]
    },
    {
      icon: 'Clock',
      title: 'Cronologia dos Fatos',
      description: 'Organize uma linha do tempo dos acontecimentos',
      items: [
        'Data de início do problema ou situação',
        'Principais marcos e eventos importantes',
        'Tentativas anteriores de resolução',
        'Prazos legais ou contratuais relevantes',
        'Comunicações importantes com terceiros',
        'Mudanças significativas na situação'
      ]
    },
    {
      icon: 'Users',
      title: 'Pessoas Envolvidas',
      description: 'Liste todas as partes relacionadas ao caso',
      items: [
        'Nomes completos e dados de contato',
        'Relacionamento com cada pessoa/empresa',
        'Papel de cada um na situação',
        'Testemunhas potenciais',
        'Advogados anteriores (se houver)',
        'Outros profissionais consultados'
      ]
    },
    {
      icon: 'Target',
      title: 'Objetivos e Expectativas',
      description: 'Defina claramente o que espera alcançar',
      items: [
        'Resultado ideal para o seu caso',
        'Alternativas aceitáveis',
        'Urgência da resolução',
        'Orçamento disponível para o caso',
        'Disposição para acordo ou negociação',
        'Consequências de não resolver o problema'
      ]
    }
  ];

  const consultationTypes = [
    {
      type: 'Consulta Inicial',
      duration: '60 minutos',
      price: 'Gratuita',
      description: 'Avaliação completa do seu caso e orientações iniciais',
      includes: [
        'Análise preliminar da situação jurídica',
        'Identificação dos direitos e deveres',
        'Estratégias possíveis de resolução',
        'Estimativa de prazos e custos',
        'Orientações sobre próximos passos'
      ],
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      type: 'Consulta de Acompanhamento',
      duration: '45 minutos',
      price: 'R$ 200,00',
      description: 'Continuidade de caso já iniciado ou segunda opinião',
      includes: [
        'Revisão do andamento do processo',
        'Ajustes na estratégia jurídica',
        'Esclarecimento de dúvidas específicas',
        'Orientações sobre documentação',
        'Planejamento das próximas ações'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      type: 'Análise de Documentos',
      duration: '30 minutos',
      price: 'R$ 150,00',
      description: 'Revisão especializada de contratos e documentos',
      includes: [
        'Análise detalhada do documento',
        'Identificação de cláusulas problemáticas',
        'Sugestões de melhorias ou alterações',
        'Explicação dos termos jurídicos',
        'Orientações sobre assinatura'
      ],
      color: 'bg-amber-50 border-amber-200 text-amber-800'
    }
  ];

  const emergencyProtocol = [
    {
      situation: 'Prisão ou Detenção',
      action: 'Ligue imediatamente',
      contact: '(66) 99911-1314',
      timeframe: 'Atendimento imediato'
    },
    {
      situation: 'Intimação Judicial',
      action: 'WhatsApp com foto do documento',
      contact: 'Enviar documento',
      timeframe: 'Resposta em 2 horas'
    },
    {
      situation: 'Acidente ou Lesão',
      action: 'Contato após atendimento médico',
      contact: 'Ligar ou WhatsApp',
      timeframe: 'Orientação em 4 horas'
    },
    {
      situation: 'Despejo ou Cobrança',
      action: 'Enviar notificação por WhatsApp',
      contact: 'Foto do documento',
      timeframe: 'Análise em 6 horas'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Prepare-se para sua Consulta
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Uma boa preparação torna nossa consulta mais eficiente e produtiva. 
            Veja como se preparar e o que esperar do nosso atendimento.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-sm max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('prepare')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'prepare' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Como se Preparar
          </button>
          <button
            onClick={() => setActiveTab('types')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'types' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tipos de Consulta
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'emergency' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Casos Urgentes
          </button>
        </div>

        {/* Preparation Guide */}
        {activeTab === 'prepare' && (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {preparationItems?.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon name={item?.icon} size={24} color="#4f46e5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-lora text-xl font-bold text-slate-900 mb-2">
                      {item?.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {item?.description}
                    </p>
                    <ul className="space-y-2">
                      {item?.items?.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700">
                          <Icon name="Check" size={16} color="#059669" className="flex-shrink-0 mt-0.5" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Consultation Types */}
        {activeTab === 'types' && (
          <div className="space-y-6">
            {consultationTypes?.map((consultation, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 ${consultation?.color}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-lora text-xl font-bold mb-1">
                      {consultation?.type}
                    </h3>
                    <p className="text-sm opacity-80">
                      {consultation?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <div className="text-center">
                      <div className="font-bold text-lg">{consultation?.duration}</div>
                      <div className="text-xs opacity-70">Duração</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">{consultation?.price}</div>
                      <div className="text-xs opacity-70">Investimento</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {consultation?.includes?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} color="currentColor" className="flex-shrink-0 mt-0.5 opacity-70" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Emergency Protocol */}
        {activeTab === 'emergency' && (
          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
              <Icon name="AlertTriangle" size={32} color="#dc2626" className="mx-auto mb-4" />
              <h3 className="font-lora text-xl font-bold text-red-800 mb-2">
                Protocolo de Emergência
              </h3>
              <p className="text-red-700">
                Para situações urgentes que requerem atenção jurídica imediata, 
                siga as orientações abaixo conforme o tipo de emergência.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {emergencyProtocol?.map((protocol, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={18} color="#dc2626" />
                    {protocol?.situation}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ação:</span>
                      <span className="font-medium">{protocol?.action}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Contato:</span>
                      <span className="font-medium">{protocol?.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Prazo:</span>
                      <span className="font-medium text-green-600">{protocol?.timeframe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Icon name="Info" size={18} />
                Importante Lembrar
              </h4>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Mantenha a calma e não tome decisões precipitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Preserve todos os documentos e evidências</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Não assine nada sem orientação jurídica</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Anote detalhes importantes enquanto estão frescos na memória</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};



const TrustSignals = () => {
  const credentials = [
    {
      icon: 'Award',
      title: 'OAB/MT 14.159-B',
      description: 'Registro ativo na Ordem dos Advogados do Brasil'
    },
    {
      icon: 'GraduationCap',
      title: 'Especialização',
      description: 'Pós-graduação em Direito Civil e Empresarial'
    },
    {
      icon: 'Users',
      title: '500+ Clientes',
      description: 'Atendidos com sucesso nos últimos 5 anos'
    },
    {
      icon: 'Clock',
      title: '10 Anos',
      description: 'De experiência em advocacia'
    }
  ];

  const commitments = [
    {
      icon: 'Shield',
      title: 'Sigilo Absoluto',
      description: 'Todas as informações são tratadas com total confidencialidade, conforme o Código de Ética da OAB.'
    },
    {
      icon: 'Clock',
      title: 'Resposta Rápida',
      description: 'Comprometemo-nos a responder todas as consultas em até 24 horas úteis.'
    },
    {
      icon: 'CheckCircle',
      title: 'Transparência Total',
      description: 'Honorários claros, sem surpresas. Você sempre saberá os custos envolvidos.'
    },
    {
      icon: 'Heart',
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com respeito, empatia e atenção personalizada.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: `Excelente profissional! Resolveu minha questão trabalhista de forma rápida e eficiente. 
                Sempre muito atencioso e explicou todo o processo de forma clara.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      role: 'Comerciante',
      content: `Precisei de ajuda com um contrato complexo e o Dr. Marcelo foi fundamental. 
                Orientação precisa e preço justo. Recomendo sem hesitar.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: `Atendimento excepcional em meu processo de divórcio. Muito profissional, 
                mas também humano e compreensivo durante um momento difícil.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#f59e0b" : "#e5e7eb"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Credentials */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Credenciais e Qualificações
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Profissional qualificado e experiente, comprometido com a excelência 
            no atendimento jurídico.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials?.map((credential, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Icon name={credential?.icon} size={28} color="#4f46e5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {credential?.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {credential?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nossos Compromissos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Valores que norteiam nossa prática jurídica e garantem um atendimento 
              de qualidade para todos os clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {commitments?.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name={commitment?.icon} size={24} color="#059669" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {commitment?.title}
                  </h3>
                  <p className="text-slate-600">
                    {commitment?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Depoimentos reais de clientes que confiaram em nossos serviços jurídicos 
              e obtiveram resultados satisfatórios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={`Foto de ${testimonial?.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial?.rating)}
                </div>
                
                <p className="text-slate-700 text-sm leading-relaxed">
                  "{testimonial?.content}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-800 rounded-full">
              <Icon name="Shield" size={18} />
              <span className="font-medium">
                Todos os depoimentos são de clientes reais e foram autorizados para publicação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const ContatoConsulta = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@marcelobaia.adv.br';
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <ContactHero 
          onWhatsAppClick={handleWhatsAppClick}
          onPhoneClick={handlePhoneClick}
        />
        
        <ContactMethods 
          onWhatsAppClick={handleWhatsAppClick}
          onPhoneClick={handlePhoneClick}
          onEmailClick={handleEmailClick}
        />
        
        <ContactForm />
        
        <OfficeLocation />
        
        <ConsultationPrep />

        <TrustSignals />
      </main>

      <Footer />

      {/* Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 lg:hidden">
        <div className="flex gap-3 max-w-sm mx-auto">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </button>

          <button
            onClick={handlePhoneClick}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (66) 99911-1314
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContatoConsulta;
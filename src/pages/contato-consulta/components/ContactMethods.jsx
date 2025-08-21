import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

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

export default ContactMethods;
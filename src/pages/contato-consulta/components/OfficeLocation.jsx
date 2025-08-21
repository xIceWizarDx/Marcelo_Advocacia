import React from 'react';
import Icon from '../../../components/AppIcon';

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

export default OfficeLocation;
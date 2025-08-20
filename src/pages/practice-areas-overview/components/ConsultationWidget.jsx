import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationWidget = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock available time slots
  const availableDates = [
    { date: '2025-01-22', day: 'Qua', dayNumber: '22' },
    { date: '2025-01-23', day: 'Qui', dayNumber: '23' },
    { date: '2025-01-24', day: 'Sex', dayNumber: '24' },
    { date: '2025-01-27', day: 'Seg', dayNumber: '27' },
    { date: '2025-01-28', day: 'Ter', dayNumber: '28' }
  ];

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:30', available: true },
    { time: '14:00', available: false },
    { time: '15:30', available: true },
    { time: '17:00', available: true }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert('Por favor, selecione uma data e horário.');
      return;
    }

    const selectedDateObj = availableDates?.find(d => d?.date === selectedDate);
    const message = encodeURIComponent(
      `Olá, gostaria de agendar uma consulta para ${selectedDateObj?.day} (${selectedDateObj?.dayNumber}) às ${selectedTimeSlot}.`
    );
    window.open(`https://wa.me/5566999111314?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Icon name="Calendar" size={28} color="white" />
              </div>
              <h2 className="font-lora font-semibold text-3xl lg:text-4xl mb-4">
                Agende sua Consulta
              </h2>
              <p className="text-lg text-white/90 font-inter max-w-2xl mx-auto">
                Escolha o melhor horário para uma conversa detalhada sobre sua questão jurídica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h3 className="font-inter font-medium text-lg mb-4 flex items-center">
                  <Icon name="CalendarDays" size={20} className="mr-2" />
                  Escolha a Data
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {availableDates?.map((dateObj) => (
                    <button
                      key={dateObj?.date}
                      onClick={() => setSelectedDate(dateObj?.date)}
                      className={`p-3 rounded-lg text-center transition-all duration-200 ${
                        selectedDate === dateObj?.date
                          ? 'bg-white text-brand-primary shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      <div className="text-xs font-inter font-medium mb-1">
                        {dateObj?.day}
                      </div>
                      <div className="text-lg font-lora font-semibold">
                        {dateObj?.dayNumber}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="font-inter font-medium text-lg mb-4 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Escolha o Horário
                </h3>
                <div className="space-y-2">
                  {timeSlots?.map((slot) => (
                    <button
                      key={slot?.time}
                      onClick={() => slot?.available && setSelectedTimeSlot(slot?.time)}
                      disabled={!slot?.available}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                        !slot?.available
                          ? 'bg-white/10 text-white/50 cursor-not-allowed'
                          : selectedTimeSlot === slot?.time
                          ? 'bg-white text-brand-primary shadow-lg'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-inter font-medium">{slot?.time}</span>
                        {!slot?.available && (
                          <span className="text-xs text-white/50">Ocupado</span>
                        )}
                        {slot?.available && selectedTimeSlot === slot?.time && (
                          <Icon name="Check" size={16} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  onClick={handleBooking}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-white text-brand-primary hover:bg-white/90 font-medium px-8 py-3"
                >
                  Confirmar via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+5566999111314'}
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={18}
                  className="border-white text-white hover:bg-white hover:text-brand-primary font-medium px-8 py-3"
                >
                  Ligar para Agendar
                </Button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-white/80 font-inter">
                  <Icon name="Shield" size={14} className="inline mr-1" />
                  Consulta inicial com valor acessível • Sigilo profissional garantido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationWidget;
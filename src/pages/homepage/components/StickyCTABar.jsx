import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300">
      {/* Main CTA Bar */}
      <div className={`bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Info */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-slate-900 rounded-lg">
                <Icon name="Scale" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-lora font-semibold text-slate-900 text-sm">
                  Precisa de ajuda jurídica?
                </h4>
                <p className="text-xs text-slate-600">
                  Entre em contato
                </p>
              </div>
            </div>

            {/* Center - Mobile Info */}
            <div className="sm:hidden flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-600 to-slate-900 rounded-lg">
                <Icon name="Scale" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-lora font-semibold text-slate-900 text-sm">
                  Entre em contato
                </h4>
              </div>
            </div>

            {/* Right - CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                className="hidden sm:inline-flex text-slate-700 border-slate-300 hover:bg-slate-50"
              >
                (66) 99911-1314
              </Button>
              
              <Button
                variant="default"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
              >
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Conversar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimize/Maximize Button */}
      <button
        onClick={toggleMinimize}
        className="absolute -top-10 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-t-lg shadow-lg transition-colors duration-200"
        aria-label={isMinimized ? 'Mostrar barra de contato' : 'Ocultar barra de contato'}
      >
        <Icon 
          name={isMinimized ? "ChevronUp" : "ChevronDown"} 
          size={16} 
        />
      </button>
    </div>
  );
};

export default StickyCTABar;
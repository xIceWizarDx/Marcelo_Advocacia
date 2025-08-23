import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Button from './Button';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navigationItems = [
      { name: 'Início', path: '/', icon: 'Home' },
      { name: 'Áreas de Atuação', path: '/areas-de-atuacao', icon: 'Scale' },
      { name: 'Sobre Nós', path: '/sobre-marcelo-baia', icon: 'User' },
      { name: 'FAQ', path: '/perguntas-frequentes', icon: 'HelpCircle' },
      { name: 'Contato', path: '/contato-consulta', icon: 'MessageCircle' }
    ];

  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || 'https://wa.me/5566999111314';
  const phoneLink = import.meta.env.VITE_PHONE_LINK || 'tel:+5566999111314';
  const phoneDisplay = import.meta.env.VITE_PHONE_DISPLAY || '(66) 99911-1314';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <Icons.Scale 
                size={24} 
                color="white" 
                className="group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-lora font-semibold text-lg lg:text-xl text-brand-primary leading-tight">
                Marcelo Baía
              </h1>
              <p className="text-xs lg:text-sm text-text-secondary font-inter font-light -mt-1">
                Advocacia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.slice(0, 4)?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 underline-animation ${
                  location?.pathname === item?.path
                    ? 'text-brand-accent bg-accent/10' :'text-text-primary hover:text-brand-accent hover:bg-accent/5'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <SocialLinks iconClassName="text-slate-700 hover:text-brand-accent" />
            <Button
              asChild
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
              className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
            >
              <a href={phoneLink} aria-label={`Ligar para ${phoneDisplay}`}>{phoneDisplay}</a>
            </Button>
            <Button
              asChild
              variant="default"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-brand"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar via WhatsApp"
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-brand-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {(() => { const IconComponent = Icons[isMenuOpen ? "X" : "Menu"]; return <IconComponent 
              size={24} 
            />; })()}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-white/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium text-sm transition-all duration-200 ${
                    location?.pathname === item?.path
                      ? 'text-brand-accent bg-accent/10' :'text-text-primary hover:text-brand-accent hover:bg-accent/5'
                  }`}
                >
                  {(() => { const IconComponent = Icons[item?.icon]; return <IconComponent size={18} />; })()}
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>

            <SocialLinks className="justify-center mt-6" iconClassName="text-slate-700 hover:text-brand-accent" />

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-border">
              <Button
                asChild
                variant="outline"
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
                fullWidth
                className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <a href={phoneLink} aria-label={`Ligar para ${phoneDisplay}`}>{phoneDisplay}</a>
              </Button>
              <Button
                asChild
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={18}
                fullWidth
                className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-brand"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar via WhatsApp"
                >
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

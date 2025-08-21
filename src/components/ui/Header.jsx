import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { CONTACT } from '../../config/contact';

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
    { name: 'Áreas de Atuação', path: '/practice-areas-overview', icon: 'Scale' },
    { name: 'Sobre Marcelo', path: '/about-marcelo-ba-a', icon: 'User' },
    { name: 'FAQ', path: '/faq-hub', icon: 'HelpCircle' },
    { name: 'Contato', path: '/contact-consultation-hub', icon: 'MessageCircle' }
  ];

  const whatsappLink = CONTACT.whatsapp;
  const phoneLink = CONTACT.phone.href;

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
              <Icon 
                name="Scale" 
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
          <div className="hidden lg:flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
              >
                <a href={phoneLink} aria-label={`Ligar para ${CONTACT.phone.display}`}>{CONTACT.phone.display}</a>
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
            <p className="text-[10px] text-text-secondary">
              Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-brand-accent hover:bg-accent/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
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
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
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
                  <a href={phoneLink} aria-label={`Ligar para ${CONTACT.phone.display}`}>{CONTACT.phone.display}</a>
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
              <p className="text-xs text-text-secondary mt-3 text-center">
                Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
              </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
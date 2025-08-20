import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQAccordion = ({ faqs, searchTerm }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(id)) {
      newOpenItems?.delete(id);
    } else {
      newOpenItems?.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text?.split(regex);
    
    return parts?.map((part, index) => 
      regex?.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-text-primary px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const handleWhatsAppClick = (question) => {
    const message = `Olá! Tenho uma dúvida sobre: ${question}`;
    window.open(`https://wa.me/5565999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (faqs?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <Icon name="Search" size={24} className="text-text-secondary" />
        </div>
        <h3 className="font-lora font-semibold text-lg text-text-primary mb-2">
          Nenhuma pergunta encontrada
        </h3>
        <p className="text-text-secondary mb-6">
          Não encontramos perguntas que correspondam à sua busca.
        </p>
        <Button
          variant="outline"
          onClick={() => handleWhatsAppClick("busca personalizada")}
          iconName="MessageCircle"
          iconPosition="left"
        >
          Fazer Pergunta Personalizada
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {faqs?.map((faq) => (
        <div
          key={faq?.id}
          className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(faq?.id)}
            className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-muted/30 transition-colors duration-200 rounded-xl"
            aria-expanded={openItems?.has(faq?.id)}
          >
            <div className="flex-1 pr-4">
              <h3 className="font-lora font-semibold text-lg text-text-primary mb-1">
                {highlightText(faq?.question, searchTerm)}
              </h3>
              {faq?.isPopular && (
                <span className="inline-flex items-center space-x-1 text-xs font-medium text-brand-accent bg-accent/10 px-2 py-1 rounded-full">
                  <Icon name="TrendingUp" size={12} />
                  <span>Popular</span>
                </span>
              )}
            </div>
            <div className="flex-shrink-0">
              <Icon
                name={openItems?.has(faq?.id) ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-text-secondary transition-transform duration-200"
              />
            </div>
          </button>
          
          {openItems?.has(faq?.id) && (
            <div className="px-6 pb-6 border-t border-border/50">
              <div className="pt-4">
                <div className="prose prose-slate max-w-none">
                  <p className="text-text-primary leading-relaxed mb-4">
                    {highlightText(faq?.answer, searchTerm)}
                  </p>
                </div>
                
                {faq?.relatedLinks && faq?.relatedLinks?.length > 0 && (
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-inter font-medium text-sm text-text-primary mb-2">
                      Conteúdo Relacionado:
                    </h4>
                    <div className="space-y-1">
                      {faq?.relatedLinks?.map((link, index) => (
                        <a
                          key={index}
                          href={link?.url}
                          className="block text-sm text-brand-accent hover:text-brand-accent/80 underline-animation"
                        >
                          {link?.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-border/30">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWhatsAppClick(faq?.question)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    Conversar sobre isso
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.location.href = 'tel:+5565999999999'}
                    iconName="Phone"
                    iconPosition="left"
                    className="text-text-secondary hover:text-brand-accent"
                  >
                    Ligar agora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
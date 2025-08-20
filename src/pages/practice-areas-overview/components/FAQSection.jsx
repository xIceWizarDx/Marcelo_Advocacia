import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Como funciona a primeira consulta?",
      answer: `A primeira consulta é uma conversa detalhada onde analisamos sua situação específica.\n\nDurante este encontro:\n• Ouvimos sua questão com atenção e sigilo\n• Explicamos as opções legais disponíveis\n• Definimos a melhor estratégia para seu caso\n• Esclarecemos prazos e procedimentos\n\nA consulta pode ser presencial ou por videoconferência, conforme sua preferência.`
    },
    {
      id: 2,
      question: "Quais documentos devo levar na consulta?",
      answer: `Os documentos variam conforme o tipo de questão, mas geralmente incluem:\n\n**Documentos Pessoais:**\n• RG e CPF\n• Comprovante de residência\n\n**Documentos Específicos:**\n• Contratos relacionados ao caso\n• Correspondências e e-mails\n• Comprovantes de pagamento\n• Fotos ou evidências relevantes\n\nNão se preocupe se não tiver todos os documentos - podemos orientá-lo sobre quais são necessários.`
    },
    {
      id: 3,
      question: "Quanto tempo demora para resolver um processo?",
      answer: `O prazo varia significativamente conforme o tipo de caso e complexidade:\n\n**Casos Administrativos:** 30 a 90 dias\n**Questões Contratuais:** 6 meses a 2 anos\n**Processos Familiares:** 6 meses a 1 ano\n**Ações Consumeristas:** 3 meses a 1 ano\n\nSempre buscamos a resolução mais rápida possível, priorizando acordos quando vantajosos para você.`
    },
    {
      id: 4,
      question: "É possível resolver sem ir ao tribunal?",
      answer: `Sim, priorizamos soluções extrajudiciais sempre que possível:\n\n**Negociação Direta:** Conversas com a outra parte\n**Mediação:** Processo assistido por mediador\n**Arbitragem:** Decisão por árbitro especializado\n**Acordos:** Soluções consensuais\n\nEssas alternativas são mais rápidas, econômicas e preservam relacionamentos. Só recorremos ao tribunal quando necessário.`
    },
    {
      id: 5,
      question: "Como são calculados os honorários?",
      answer: `Os honorários são definidos de forma transparente e justa:\n\n**Consulta Inicial:** Valor fixo acessível\n**Casos Simples:** Honorários fixos pré-definidos\n**Casos Complexos:** Percentual sobre o resultado\n**Acompanhamento:** Valores mensais para casos longos\n\nSempre explicamos todos os custos antes de iniciar qualquer trabalho. Não há surpresas.`
    },
    {
      id: 6,
      question: "Atende casos em outras cidades?",
      answer: `Sim, atendemos clientes em todo o estado de Mato Grosso:\n\n**Rondonópolis e Região:** Atendimento presencial\n**Outras Cidades de MT:** Videoconferência e deslocamento quando necessário\n**Casos Digitais:** Processos eletrônicos podem ser acompanhados remotamente\n\nA tecnologia nos permite oferecer o mesmo nível de atendimento independente da localização.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-full mb-6">
            <Icon name="HelpCircle" size={28} color="white" />
          </div>
          <h2 className="font-lora font-semibold text-3xl lg:text-4xl text-brand-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Esclarecemos as dúvidas mais comuns sobre nossos serviços jurídicos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
              >
                <h3 className="font-inter font-medium text-lg text-brand-primary pr-4">
                  {faq?.question}
                </h3>
                <Icon
                  name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className={`text-brand-accent transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq?.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === faq?.id
                    ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-5 border-t border-border/50">
                  <div className="pt-4">
                    {faq?.answer?.split('\n')?.map((line, index) => (
                      <React.Fragment key={index}>
                        {line && (
                          <p className={`text-text-secondary font-inter leading-relaxed ${
                            line?.startsWith('**') && line?.endsWith('**')
                              ? 'font-medium text-brand-secondary mt-3 mb-1' : line?.startsWith('•')
                              ? 'ml-4 mb-1' :'mb-2'
                          }`}>
                            {line?.replace(/\*\*/g, '')}
                          </p>
                        )}
                        {!line && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary font-inter mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent("Olá, tenho uma dúvida que não está no FAQ. Poderia me ajudar?");
                window.open(`https://wa.me/5565999999999?text=${message}`, '_blank');
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-inter font-medium rounded-lg transition-colors duration-200"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Perguntar no WhatsApp
            </button>
            <button
              onClick={() => window.location.href = 'tel:+5565999999999'}
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-inter font-medium rounded-lg transition-colors duration-200"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Ligar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
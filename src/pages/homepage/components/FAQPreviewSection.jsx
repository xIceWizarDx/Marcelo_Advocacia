import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FAQPreviewSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Quanto custa uma consulta jurídica?",
      answer: `A primeira consulta é gratuita e sem compromisso. Durante esta conversa inicial, avaliamos seu caso e apresentamos as opções disponíveis.\n\nApós a análise, apresentamos um orçamento transparente baseado na complexidade do caso e tempo estimado. Trabalhamos com valores fixos sempre que possível, evitando surpresas.`
    },
    {
      question: "Como funciona o atendimento?",
      answer: `O atendimento é personalizado e humanizado. Primeiro, fazemos uma consulta inicial para entender sua situação.\n\nDepois, elaboramos uma estratégia jurídica clara e mantemos você informado sobre cada etapa do processo. Utilizamos linguagem simples e estamos sempre disponíveis para esclarecer dúvidas.`
    },
    {
      question: "Qual o prazo para resolução dos casos?",
      answer: `Os prazos variam conforme a complexidade e natureza de cada caso. Na consulta inicial, apresentamos uma estimativa realista baseada na nossa experiência.\n\nSempre priorizamos soluções extrajudiciais quando possível, pois são mais rápidas e econômicas. Mantemos você informado sobre o andamento regularmente.`
    },
    {
      question: "Atende apenas em Rondonópolis?",
      answer: `Nosso escritório está localizado em Rondonópolis/MT, mas atendemos clientes de toda a região. Para casos específicos, podemos nos deslocar quando necessário.\n\nTambém realizamos consultas online para orientações iniciais e acompanhamento de processos, facilitando o acesso à assessoria jurídica.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Icon name="HelpCircle" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Respostas para suas{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              principais dúvidas
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Esclarecimentos sobre custos, prazos e procedimentos para que você tome decisões informadas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors duration-200"
              >
                <h3 className="font-lora text-lg font-semibold text-slate-900 pr-4">
                  {faq?.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={20} className="text-slate-500" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-slate-100">
                    {faq?.answer?.split('\n\n')?.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600 leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-6">
              <Icon name="MessageCircle" size={32} className="text-indigo-600 mx-auto mb-4" />
              <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2">
                Não encontrou sua dúvida?
              </h3>
              <p className="text-slate-600">
                Entre em contato para esclarecimentos personalizados sobre seu caso específico.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/faq-hub"
                className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="Search" size={18} />
                <span>Ver todas as perguntas</span>
              </Link>
              
              <button
                onClick={() => window.open('https://wa.me/5566999111314', '_blank')}
                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Fazer pergunta</span>
              </button>
           </div>
         </div>
       </div>
     </div>
   </section>
  );
};

export default FAQPreviewSection;

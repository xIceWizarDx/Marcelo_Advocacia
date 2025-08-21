import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContextualFAQ = ({ practiceArea }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    civil: {
      title: "Perguntas Frequentes - Direito Civil",
      faqs: [
        {
          question: "Quando posso pedir indenização por danos morais?",
          answer: `Você pode solicitar indenização por danos morais quando sofrer ofensa à sua honra, dignidade, imagem ou outros direitos da personalidade.\n\nExemplos comuns incluem:\n• Negativação indevida do nome\n• Ofensas públicas ou calúnia\n• Constrangimento em estabelecimentos\n• Erro médico com sequelas\n• Descumprimento contratual que cause sofrimento\n\nO valor da indenização varia conforme a gravidade do dano e a capacidade econômica do ofensor.`
        },
        {
          question: "Como funciona o processo de usucapião?",
          answer: `A usucapião permite adquirir a propriedade de um bem através da posse prolongada e ininterrupta.\n\nRequisitos principais:\n• Posse mansa e pacífica\n• Exercício como se dono fosse\n• Tempo mínimo (varia de 5 a 15 anos)\n• Boa-fé e justo título (em alguns casos)\n\nO processo judicial comprova esses requisitos e resulta na escritura definitiva do imóvel.`
        },
        {
          question: "Posso cancelar um contrato já assinado?",
          answer: `Sim, em várias situações você pode cancelar um contrato:\n\n• Direito de arrependimento (7 dias para compras online/telefone)\n• Vício ou defeito no produto/serviço\n• Cláusulas abusivas ou ilegais\n• Erro, dolo ou coação na contratação\n• Descumprimento pela outra parte\n\nCada caso tem suas particularidades e prazos específicos. A análise jurídica é fundamental.`
        },
        {
          question: "Quanto tempo demora um processo civil?",
          answer: `O tempo varia conforme a complexidade e tipo de ação:\n\n• Ações simples: 1 a 2 anos\n• Ações complexas: 2 a 4 anos\n• Com recursos: pode estender por mais tempo\n\nFatores que influenciam:\n• Necessidade de perícias\n• Quantidade de testemunhas\n• Recursos das partes\n• Complexidade da matéria\n\nBuscamos sempre a resolução mais rápida possível.`
        }
      ]
    },
    consumer: {
      title: "Perguntas Frequentes - Direito do Consumidor",
      faqs: [
        {
          question: "Meu nome foi negativado indevidamente. O que fazer?",
          answer: `A negativação indevida gera direito à indenização por danos morais.\n\nPrimeiros passos:\n• Solicite comprovante da dívida ao órgão de proteção\n• Conteste formalmente a negativação\n• Reúna documentos que comprovem o pagamento\n• Entre com ação judicial se necessário\n\nO valor da indenização varia de R$ 5.000 a R$ 15.000, dependendo do caso.`
        },
        {
          question: "Produto com defeito: troca, conserto ou dinheiro de volta?",
          answer: `O Código de Defesa do Consumidor garante três opções:\n\n1. Substituição por produto novo\n2. Restituição do valor pago (com correção)\n3. Abatimento proporcional do preço\n\nPrazos para reclamar:\n• Produtos não duráveis: 30 dias\n• Produtos duráveis: 90 dias\n• Vício oculto: até 5 anos\n\nSe o fornecedor não resolver em 30 dias, você pode escolher qualquer das opções.`
        },
        {
          question: "Banco pode cobrar juros abusivos?",
          answer: `Não. Existem limites legais para juros bancários:\n\n• Taxa deve ser clara no contrato\n• Não pode ser excessivamente onerosa\n• Capitalização mensal só é permitida em casos específicos\n• Comissão de permanência não pode ser cumulada com outros encargos\n\nSe identificar abuso, você pode:\n• Contestar administrativamente\n• Buscar revisão judicial\n• Solicitar restituição de valores pagos a mais`
        },
        {
          question: "Voo cancelado: quais são meus direitos?",
          answer: `Em caso de cancelamento ou atraso de voo, você tem direito a:\n\nAtraso de 1h: informações sobre o voo\nAtraso de 2h: alimentação adequada\nAtraso de 4h: hospedagem (se necessário)\n\nCancelamento:\n• Reacomodação em outro voo\n• Reembolso integral\n• Execução por outra empresa\n\nIndenização adicional:\n• Danos morais: R$ 1.000 a R$ 10.000\n• Danos materiais: prejuízos comprovados\n• Bagagem extraviada: até R$ 1.500 por kg`
        }
      ]
    },
    family: {
      title: "Perguntas Frequentes - Direito de Família",
      faqs: [
        {
          question: "Como funciona o divórcio consensual?",
          answer: `O divórcio consensual é mais rápido e econômico quando há acordo entre os cônjuges.\n\nRequisitos:\n• Acordo sobre partilha de bens\n• Definição da guarda dos filhos\n• Fixação de pensão alimentícia\n• Não haver filhos menores incapazes (para cartório)\n\nPode ser feito:\n• No cartório (sem filhos menores)\n• Judicialmente (com filhos menores)\n\nTempo médio: 30 a 90 dias\nCusto: significativamente menor que o litigioso`
        },
        {
          question: "Qual o valor da pensão alimentícia?",
          answer: `A pensão alimentícia considera:\n\n• Necessidades do alimentando\n• Possibilidades do alimentante\n• Proporcionalidade e razoabilidade\n\nPercentuais comuns:\n• 20% a 30% da renda líquida (1 filho)\n• 15% a 25% por filho (múltiplos filhos)\n• Salário mínimo (valor mínimo)\n\nIncluem:\n• Alimentação, vestuário, moradia\n• Educação e saúde\n• Lazer proporcional\n\nPode ser revista a qualquer tempo se houver mudança na situação financeira.`
        },
        {
          question: "Guarda compartilhada é obrigatória?",
          answer: `A guarda compartilhada é a regra legal, salvo se um dos pais não tiver condições.\n\nCaracterísticas:\n• Ambos os pais participam das decisões\n• Criança convive com ambos\n• Responsabilidades são divididas\n• Não significa divisão igual do tempo\n\nGuarda unilateral só quando:\n• Um dos pais não tem condições\n• Há risco para a criança\n• Impossibilidade de diálogo entre os pais\n\nO melhor interesse da criança sempre prevalece.`
        },
        {
          question: "Posso alterar o regime de bens após o casamento?",
          answer: `Sim, é possível alterar o regime de bens através de processo judicial.\n\nRequisitos:\n• Pedido de ambos os cônjuges\n• Autorização judicial\n• Não prejudicar terceiros\n• Motivação relevante\n\nProcedimento:\n• Petição conjunta dos cônjuges\n• Manifestação do Ministério Público\n• Decisão judicial\n• Registro no cartório\n\nTempo médio: 6 meses a 1 ano\nCustos: honorários advocatícios e custas judiciais`
        }
      ]
    },
    business: {
      title: "Perguntas Frequentes - Direito Empresarial",
      faqs: [
        {
          question: "Qual o melhor tipo de empresa para meu negócio?",
          answer: `A escolha depende do porte, atividade e objetivos do negócio:\n\n**MEI (Microempreendedor Individual):**\n• Faturamento até R$ 81.000/ano\n• Atividades específicas permitidas\n• Tributação simplificada\n\n**ME/EPP (Micro/Pequena Empresa):**\n• Faturamento até R$ 4,8 milhões/ano\n• Simples Nacional\n• Menos burocracia\n\n**Sociedade Limitada:**\n• Responsabilidade limitada ao capital\n• Flexibilidade na gestão\n• Adequada para a maioria dos negócios\n\nAnalisamos seu caso específico para a melhor escolha.`
        },
        {
          question: "Como funciona a recuperação judicial?",
          answer: `A recuperação judicial permite reestruturar dívidas e manter a empresa funcionando.\n\nRequisitos:\n• Empresa em atividade há mais de 2 anos\n• Não ter passado por recuperação nos últimos 5 anos\n• Não ser falida\n\nBenefícios:\n• Suspensão de execuções\n• Negociação com credores\n• Parcelamento de dívidas\n• Manutenção da atividade\n\nPrazo: até 180 dias para apresentar plano\nTempo médio: 1 a 2 anos para conclusão`
        },
        {
          question: "O que é compliance empresarial?",
          answer: `Compliance é o conjunto de práticas para garantir que a empresa cumpra leis e regulamentos.\n\nBenefícios:\n• Redução de riscos legais\n• Melhoria da reputação\n• Prevenção de multas\n• Atração de investidores\n• Competitividade no mercado\n\nÁreas principais:\n• Trabalhista e previdenciária\n• Tributária e fiscal\n• Ambiental\n• Proteção de dados (LGPD)\n• Anticorrupção\n\nImplementamos programas adequados ao porte da empresa.`
        },
        {
          question: "Preciso de contrato para todos os fornecedores?",
          answer: `Sim, contratos escritos são essenciais para proteger seu negócio.\n\nVantagens:\n• Clareza nas obrigações\n• Prevenção de conflitos\n• Segurança jurídica\n• Facilita cobrança\n• Define responsabilidades\n\nContratos importantes:\n• Fornecimento de produtos/serviços\n• Prestação de serviços\n• Parcerias comerciais\n• Locação de imóveis\n• Trabalho terceirizado\n\nElaboramos contratos personalizados para cada situação.`
        }
      ]
    }
  };

  const data = faqData?.[practiceArea] || faqData?.civil;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
            {data?.title}
          </h2>
          <p className="font-inter text-lg text-slate-600">
            Esclarecemos as dúvidas mais comuns sobre esta área do direito
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {data?.faqs?.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <h3 className="font-inter font-semibold text-lg text-slate-900 pr-4">
                  {faq?.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={24} className="text-slate-400" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-slate-100">
                    <div className="font-inter text-slate-700 leading-relaxed whitespace-pre-line">
                      {faq?.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <Icon name="MessageSquare" size={48} className="text-indigo-600 mx-auto mb-4" />
            <h3 className="font-lora font-semibold text-xl text-slate-900 mb-4">
              Não encontrou sua dúvida?
            </h3>
            <p className="font-inter text-slate-600 mb-6">
              Entre em contato conosco. Teremos prazer em esclarecer sua questão específica.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5566999111314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Perguntar via WhatsApp
                </a>
                <a
                  href="tel:+5566999111314"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duração-200"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  (66) 99911-1314
                </a>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Ao clicar, você será redirecionado ao WhatsApp. Seus dados serão tratados conforme nossa Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContextualFAQ;
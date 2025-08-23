import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/ui/Header';
import * as Icons from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Footer from '@/components/ui/Footer';


const PracticeAreaHero = ({ practiceArea, onWhatsAppClick, onCallClick }) => {
  const heroContent = {
    civil: {
      title: "Quando seus direitos são questionados",
      subtitle: "Proteção jurídica completa para questões civis",
      description: "Defendemos seus interesses em contratos, responsabilidade civil, direitos reais e questões patrimoniais com estratégia personalizada e comunicação clara.",
      icon: "Scale",
      gradient: "from-slate-900 via-slate-800 to-slate-700"
    },
    consumer: {
      title: "Protegendo você como consumidor",
      subtitle: "Seus direitos de consumidor em primeiro lugar",
      description: "Especialização em defesa do consumidor, resolução de conflitos com empresas, restituição de valores e reparação de danos morais e materiais.",
      icon: "Shield",
      gradient: "from-indigo-900 via-indigo-800 to-slate-800"
    },
    family: {
      title: "Cuidando da sua família com sensibilidade",
      subtitle: "Direito de família com atendimento humanizado",
      description: "Orientação jurídica em divórcio, guarda, pensão alimentícia e questões familiares com discrição, empatia e foco na proteção de todos os envolvidos.",
      icon: "Heart",
      gradient: "from-amber-900 via-amber-800 to-slate-800"
    },
    business: {
      title: "Protegendo seu negócio com prevenção",
      subtitle: "Consultoria jurídica empresarial estratégica",
      description: "Assessoria completa para empresas, contratos comerciais, compliance, recuperação judicial e prevenção de riscos jurídicos para o crescimento sustentável.",
      icon: "Building2",
      gradient: "from-slate-900 via-indigo-900 to-slate-800"
    }
  };

  const content = heroContent[practiceArea] || heroContent.civil;

  return (
    <section className={`relative py-20 lg:py-32 bg-gradient-to-br ${content.gradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                {(() => { const IconComponent = Icons[content.icon]; return <IconComponent size={24} color="white" />; })()}
              </div>
              <span className="text-white/80 font-inter font-medium text-sm uppercase tracking-wider">
                Área de Atuação
              </span>
            </div>

            <h1 className="font-lora font-bold text-3xl lg:text-5xl leading-tight mb-6">
              {content.title}
            </h1>

            <h2 className="font-inter font-semibold text-xl lg:text-2xl text-white/90 mb-6">
              {content.subtitle}
            </h2>

            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-xl"
              >
                Consulta via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onCallClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Ligar Agora
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">OAB/MT 14.159-B</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.Clock size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">Resposta em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.MapPin size={20} color="white" className="opacity-80" />
                <span className="text-white/80 font-inter text-sm">Rondonópolis/MT</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 mx-auto">
                  {(() => { const IconComponent = Icons[content.icon]; return <IconComponent size={48} color="white" />; })()}
                </div>
                <div className="text-center">
                  <h3 className="font-lora font-semibold text-xl text-white mb-4">
                    Atendimento Especializado
                  </h3>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Cada caso é único. Nossa abordagem personalizada garante que você receba a orientação jurídica mais adequada para sua situação específica.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icons.Star size={24} color="white" className="opacity-60" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icons.Award size={20} color="white" className="opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const ServiceBreakdown = ({ practiceArea }) => {
  const serviceData = {
    civil: {
      title: "Serviços em Direito Civil",
      subtitle: "Proteção completa dos seus direitos patrimoniais e pessoais",
      services: [
        {
          icon: "FileText",
          title: "Contratos e Negócios Jurídicos",
          description: "Elaboração, revisão e assessoria em contratos de compra e venda, locação, prestação de serviços e negócios em geral.",
          features: ["Análise de cláusulas", "Negociação de termos", "Acompanhamento de execução"]
        },
        {
          icon: "Home",
          title: "Direitos Reais e Propriedade",
          description: "Questões envolvendo propriedade, posse, usucapião, servidões e direitos sobre bens imóveis e móveis.",
          features: ["Regularização fundiária", "Ações possessórias", "Registro de imóveis"]
        },
        {
          icon: "AlertTriangle",
          title: "Responsabilidade Civil",
          description: "Reparação de danos morais e materiais, acidentes, negligência médica e responsabilidade por atos de terceiros.",
          features: ["Indenizações", "Perícias técnicas", "Mediação de conflitos"]
        },
        {
          icon: "Users",
          title: "Direito das Sucessões",
          description: "Inventários, testamentos, partilha de bens e planejamento sucessório para proteção do patrimônio familiar.",
          features: ["Inventário judicial", "Planejamento patrimonial", "Testamentos"]
        }
      ]
    },
    consumer: {
      title: "Defesa do Consumidor",
      subtitle: "Seus direitos como consumidor protegidos com eficiência",
      services: [
        {
          icon: "ShieldCheck",
          title: "Vícios e Defeitos de Produtos",
          description: "Defesa em casos de produtos com defeitos, vícios ocultos, garantia e assistência técnica inadequada.",
          features: ["Troca de produtos", "Restituição de valores", "Indenizações"]
        },
        {
          icon: "CreditCard",
          title: "Serviços Bancários e Financeiros",
          description: "Questões com bancos, cartões de crédito, financiamentos, empréstimos e cobranças abusivas.",
          features: ["Revisão de contratos", "Negativação indevida", "Juros abusivos"]
        },
        {
          icon: "Wifi",
          title: "Telecomunicações e Internet",
          description: "Problemas com operadoras de telefone, internet, TV por assinatura e serviços de telecomunicações.",
          features: ["Interrupção de serviços", "Cobrança indevida", "Qualidade do serviço"]
        },
        {
          icon: "Plane",
          title: "Direito do Turismo",
          description: "Problemas em viagens, voos cancelados, overbooking, pacotes turísticos e hospedagem inadequada.",
          features: ["Voos cancelados", "Bagagem extraviada", "Pacotes turísticos"]
        }
      ]
    },
    family: {
      title: "Direito de Família",
      subtitle: "Cuidando das questões familiares com sensibilidade e discrição",
      services: [
        {
          icon: "Heart",
          title: "Divórcio e Separação",
          description: "Orientação completa em processos de divórcio consensual e litigioso, com foco na proteção de todos os envolvidos.",
          features: ["Divórcio consensual", "Partilha de bens", "Mediação familiar"]
        },
        {
          icon: "Baby",
          title: "Guarda e Convivência",
          description: "Definição de guarda dos filhos, regulamentação de visitas e proteção do melhor interesse da criança.",
          features: ["Guarda compartilhada", "Regulamentação de visitas", "Alienação parental"]
        },
        {
          icon: "DollarSign",
          title: "Pensão Alimentícia",
          description: "Fixação, revisão e execução de pensão alimentícia para filhos e cônjuges, sempre priorizando o bem-estar familiar.",
          features: ["Fixação de pensão", "Revisão de valores", "Execução de alimentos"]
        },
        {
          icon: "UserCheck",
          title: "Reconhecimento e Adoção",
          description: "Processos de reconhecimento de paternidade, adoção e questões relacionadas à filiação e parentesco.",
          features: ["Reconhecimento de paternidade", "Adoção", "Investigação de paternidade"]
        }
      ]
    },
    business: {
      title: "Direito Empresarial",
      subtitle: "Protegendo seu negócio com estratégia jurídica preventiva",
      services: [
        {
          icon: "Building2",
          title: "Constituição e Estruturação",
          description: "Abertura de empresas, escolha do tipo societário, contratos sociais e planejamento da estrutura jurídica ideal.",
          features: ["Abertura de empresas", "Contratos sociais", "Planejamento societário"]
        },
        {
          icon: "FileCheck",
          title: "Contratos Comerciais",
          description: "Elaboração e revisão de contratos comerciais, parcerias, fornecimento e prestação de serviços empresariais.",
          features: ["Contratos de fornecimento", "Parcerias comerciais", "Termos de uso"]
        },
        {
          icon: "TrendingUp",
          title: "Recuperação Judicial",
          description: "Assessoria em recuperação judicial e extrajudicial, reestruturação de dívidas e negociação com credores.",
          features: ["Recuperação judicial", "Negociação de dívidas", "Reestruturação empresarial"]
        },
        {
          icon: "Shield",
          title: "Compliance e Prevenção",
          description: "Implementação de programas de compliance, auditoria jurídica e prevenção de riscos regulatórios.",
          features: ["Auditoria jurídica", "Compliance", "Gestão de riscos"]
        }
      ]
    }
  };

  const data = serviceData?.[practiceArea] || serviceData?.civil;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
            {data?.title}
          </h2>
          <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
            {data?.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data?.services?.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                {(() => { const IconComponent = Icons[service?.icon]; return <IconComponent 
                  size={28} 
                  className="text-indigo-600 group-hover:text-white transition-colors duration-300" 
                />; })()}
              </div>

              {/* Content */}
              <h3 className="font-lora font-semibold text-xl text-slate-900 mb-4">
                {service?.title}
              </h3>
              
              <p className="font-inter text-slate-600 leading-relaxed mb-6">
                {service?.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-5 h-5 bg-indigo-100 rounded-full flex-shrink-0">
                      <Icons.Check size={12} className="text-indigo-600" />
                    </div>
                    <span className="font-inter text-sm text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="flex items-center justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icons.ArrowRight size={20} className="text-indigo-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
            <h3 className="font-lora font-semibold text-2xl text-white mb-4">
              Precisa de orientação específica?
            </h3>
            <p className="font-inter text-slate-300 mb-6 max-w-2xl mx-auto">
              Cada situação é única. Agende uma consulta para discutirmos sua questão específica e definirmos a melhor estratégia jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5566999111314"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors duração-200"
              >
                <Icons.MessageCircle size={20} className="mr-2" />
                Consulta via WhatsApp
              </a>
              <a
                href="tel:+5566999111314"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duração-200"
              >
                <Icons.Phone size={20} className="mr-2" />
                (66) 99911-1314
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



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
                  <Icons.ChevronDown size={24} className="text-slate-400" />
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
            <Icons.MessageSquare size={48} className="text-indigo-600 mx-auto mb-4" />
            <h3 className="font-lora font-semibold text-xl text-slate-900 mb-4">
              Precisa de outras orientações?
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
                <Icons.MessageCircle size={20} className="mr-2" />
                Perguntar via WhatsApp
              </a>
              <a
                href="tel:+5566999111314"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duração-200"
              >
                <Icons.Phone size={20} className="mr-2" />
                (66) 99911-1314
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const CaseStudyApproach = ({ practiceArea }) => {
  const caseStudyData = {
    civil: {
      title: "Nossa Metodologia em Ação",
      subtitle: "Casos reais demonstram nossa abordagem estratégica",
      cases: [
        {
          icon: "FileText",
          category: "Responsabilidade Civil",
          title: "Indenização por Danos Morais",
          scenario: "Cliente teve o nome negativado indevidamente por empresa de telecomunicações após quitar débito.",
          approach: [
            "Análise detalhada da documentação de pagamento",
            "Notificação extrajudicial para resolução amigável",
            "Ação judicial com pedido de tutela antecipada",
            "Produção de provas da negativação indevida"
          ],
          outcome: "Resolução em 8 meses com indenização de R$ 12.000 e exclusão imediata do nome dos órgãos de proteção.",
          methodology: "Estratégia preventiva com foco na resolução mais rápida possível"
        },
        {
          icon: "Home",
          category: "Direitos Reais",
          title: "Regularização de Propriedade",
          scenario: "Família ocupava terreno há 20 anos sem escritura, enfrentando ameaça de despejo.",
          approach: [
            "Levantamento histórico da ocupação",
            "Coleta de testemunhas e documentos",
            "Análise da cadeia dominial do imóvel",
            "Ação de usucapião com pedido liminar"
          ],
          outcome: "Reconhecimento da propriedade em 18 meses, garantindo segurança jurídica à família.",
          methodology: "Abordagem técnica com sensibilidade social"
        }
      ]
    },
    consumer: {
      title: "Defesa Efetiva do Consumidor",
      subtitle: "Resultados concretos na proteção dos seus direitos",
      cases: [
        {
          icon: "CreditCard",
          category: "Serviços Bancários",
          title: "Revisão de Contrato Bancário",
          scenario: "Empresário descobriu cobrança de juros abusivos em financiamento de veículo comercial.",
          approach: [
            "Auditoria completa do contrato de financiamento",
            "Cálculo dos valores cobrados indevidamente",
            "Tentativa de acordo extrajudicial",
            "Ação revisional com pedido de consignação"
          ],
          outcome: "Redução de 40% no valor das parcelas e restituição de R$ 35.000 pagos a mais.",
          methodology: "Análise técnica especializada com negociação estratégica"
        },
        {
          icon: "Plane",
          category: "Direito do Turismo",
          title: "Voo Cancelado em Viagem Familiar",
          scenario: "Família perdeu conexão internacional por atraso de 6 horas em voo doméstico.",
          approach: [
            "Documentação completa dos prejuízos",
            "Protocolo administrativo na companhia aérea",
            "Ação judicial por danos morais e materiais",
            "Produção de provas dos gastos extras"
          ],
          outcome: "Indenização de R$ 25.000 por danos morais e R$ 8.000 por danos materiais.",
          methodology: "Atuação rápida com foco na reparação integral"
        }
      ]
    },
    family: {
      title: "Cuidado Familiar com Resultados",
      subtitle: "Soluções sensíveis para questões delicadas",
      cases: [
        {
          icon: "Heart",
          category: "Divórcio Consensual",
          title: "Separação Amigável com Filhos",
          scenario: "Casal decidiu se separar amigavelmente, mas precisava regularizar guarda e pensão dos dois filhos.",
          approach: [
            "Mediação familiar para acordos equilibrados",
            "Elaboração de acordo de guarda compartilhada",
            "Cálculo justo da pensão alimentícia",
            "Homologação judicial em processo consensual"
          ],
          outcome: "Divórcio concluído em 45 dias com acordo satisfatório para ambas as partes.",
          methodology: "Mediação humanizada priorizando o bem-estar das crianças"
        },
        {
          icon: "Baby",
          category: "Guarda e Convivência",
          title: "Modificação de Guarda",
          scenario: "Pai buscava modificar guarda unilateral para compartilhada após mudança de vida profissional.",
          approach: [
            "Avaliação psicossocial da nova situação",
            "Demonstração da estabilidade familiar",
            "Negociação com a mãe das crianças",
            "Pedido judicial fundamentado no melhor interesse"
          ],
          outcome: "Guarda compartilhada estabelecida com convivência equilibrada e redução da pensão.",
          methodology: "Foco no diálogo e no bem-estar infantil"
        }
      ]
    },
    business: {
      title: "Estratégia Empresarial Preventiva",
      subtitle: "Protegendo negócios com visão de futuro",
      cases: [
        {
          icon: "Building2",
          category: "Recuperação Judicial",
          title: "Reestruturação de Empresa Familiar",
          scenario: "Empresa de construção civil com 50 funcionários enfrentava crise financeira severa.",
          approach: [
            "Análise completa da situação financeira",
            "Elaboração de plano de recuperação viável",
            "Negociação com credores e fornecedores",
            "Acompanhamento da execução do plano"
          ],
          outcome: "Empresa recuperada em 24 meses, mantendo empregos e retomando crescimento.",
          methodology: "Visão estratégica com responsabilidade social"
        },
        {
          icon: "FileCheck",
          category: "Contratos Comerciais",
          title: "Estruturação de Parceria Comercial",
          scenario: "Duas empresas queriam formar joint venture para projeto de grande porte.",
          approach: [
            "Estruturação jurídica da parceria",
            "Elaboração de contratos detalhados",
            "Definição de governança corporativa",
            "Implementação de compliance específico"
          ],
          outcome: "Parceria bem-sucedida com projeto executado sem conflitos jurídicos.",
          methodology: "Planejamento preventivo com foco na sustentabilidade"
        }
      ]
    }
  };

  const data = caseStudyData?.[practiceArea] || caseStudyData?.civil;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
            {data?.title}
          </h2>
          <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
            {data?.subtitle}
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-12 lg:space-y-16">
          {data?.cases?.map((caseStudy, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg">
                    {(() => { const IconComponent = Icons[caseStudy?.icon]; return <IconComponent size={20} className="text-indigo-600" />; })()}
                  </div>
                  <span className="font-inter font-medium text-sm text-indigo-600 uppercase tracking-wider">
                    {caseStudy?.category}
                  </span>
                </div>

                <h3 className="font-lora font-semibold text-2xl text-slate-900 mb-4">
                  {caseStudy?.title}
                </h3>

                <div className="bg-slate-50 rounded-lg p-6 mb-6">
                  <h4 className="font-inter font-semibold text-slate-900 mb-2">Situação:</h4>
                  <p className="font-inter text-slate-700 leading-relaxed">
                    {caseStudy?.scenario}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-slate-900 mb-3">Nossa Abordagem:</h4>
                  <div className="space-y-2">
                    {caseStudy?.approach?.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full flex-shrink-0 mt-0.5">
                          <span className="text-indigo-600 font-semibold text-xs">
                            {stepIndex + 1}
                          </span>
                        </div>
                        <span className="font-inter text-slate-700 text-sm">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-inter font-semibold text-green-900 mb-2 flex items-center">
                    <Icons.CheckCircle size={18} className="text-green-600 mr-2" />
                    Resultado:
                  </h4>
                  <p className="font-inter text-green-800 leading-relaxed mb-3">
                    {caseStudy?.outcome}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icons.Target size={16} className="text-green-600" />
                    <span className="font-inter text-sm text-green-700 font-medium">
                      {caseStudy?.methodology}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6 mx-auto">
                        {(() => { const IconComponent = Icons[caseStudy?.icon]; return <IconComponent size={32} className="text-indigo-600" />; })()}
                      </div>
                      <h4 className="font-lora font-semibold text-xl text-slate-900 mb-4">
                        Metodologia Aplicada
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Icons.Search size={16} className="text-slate-600" />
                          <span className="font-inter text-sm text-slate-700">Análise Detalhada</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Icons.Users size={16} className="text-slate-600" />
                          <span className="font-inter text-sm text-slate-700">Abordagem Humanizada</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Icons.Target size={16} className="text-slate-600" />
                          <span className="font-inter text-sm text-slate-700">Resultado Efetivo</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-200 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-200 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-slate-100 rounded-xl border border-slate-200">
          <div className="flex items-start space-x-3">
            <Icons.Info size={20} className="text-slate-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-inter font-semibold text-slate-900 mb-2">
                Importante sobre os Casos Apresentados
              </h4>
              <p className="font-inter text-sm text-slate-700 leading-relaxed">
                Os casos apresentados são baseados em situações reais, mas foram anonimizados e generalizados para fins educativos, 
                em conformidade com o sigilo profissional e as normas da OAB. Cada caso é único e os resultados podem variar 
                conforme as circunstâncias específicas. Não há garantia de resultados similares em outros processos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const PracticeAreaSelector = ({ currentArea }) => {
  const location = useLocation();

  const practiceAreas = [
    {
      id: 'civil',
      name: 'Direito Civil',
      icon: 'Scale',
      description: 'Contratos, responsabilidade civil e direitos reais',
      color: 'slate'
    },
    {
      id: 'consumer',
      name: 'Direito do Consumidor',
      icon: 'Shield',
      description: 'Defesa dos direitos do consumidor',
      color: 'indigo'
    },
    {
      id: 'family',
      name: 'Direito de Família',
      icon: 'Heart',
      description: 'Divórcio, guarda e questões familiares',
      color: 'amber'
    },
    {
      id: 'business',
      name: 'Direito Empresarial',
      icon: 'Building2',
      description: 'Consultoria jurídica para empresas',
      color: 'slate'
    }
  ];

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      slate: {
        bg: isActive ? 'bg-slate-600' : 'bg-slate-100 hover:bg-slate-200',
        text: isActive ? 'text-white' : 'text-slate-700 hover:text-slate-900',
        icon: isActive ? 'text-white' : 'text-slate-600',
        border: isActive ? 'border-slate-600' : 'border-slate-200 hover:border-slate-300'
      },
      indigo: {
        bg: isActive ? 'bg-indigo-600' : 'bg-indigo-50 hover:bg-indigo-100',
        text: isActive ? 'text-white' : 'text-indigo-700 hover:text-indigo-900',
        icon: isActive ? 'text-white' : 'text-indigo-600',
        border: isActive ? 'border-indigo-600' : 'border-indigo-200 hover:border-indigo-300'
      },
      amber: {
        bg: isActive ? 'bg-amber-600' : 'bg-amber-50 hover:bg-amber-100',
        text: isActive ? 'text-white' : 'text-amber-700 hover:text-amber-900',
        icon: isActive ? 'text-white' : 'text-amber-600',
        border: isActive ? 'border-amber-600' : 'border-amber-200 hover:border-amber-300'
      }
    };
    return colorMap?.[color] || colorMap?.slate;
  };

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h3 className="font-lora font-semibold text-xl text-slate-900 mb-2">
            Outras Áreas de Atuação
          </h3>
          <p className="font-inter text-slate-600">
            Conheça todos os nossos serviços jurídicos especializados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {practiceAreas?.map((area) => {
            const isActive = area?.id === currentArea;
            const colors = getColorClasses(area?.color, isActive);
            
            return (
              <div key={area?.id} className="relative">
                {isActive ? (
                  <div className={`p-6 rounded-xl border-2 ${colors?.border} ${colors?.bg} transition-all duration-200`}>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg mb-4 mx-auto">
                        {(() => { const IconComponent = Icons[area?.icon]; return <IconComponent size={24} className={colors?.icon} />; })()}
                      </div>
                      <h4 className={`font-inter font-semibold text-sm ${colors?.text} mb-2`}>
                        {area?.name}
                      </h4>
                      <p className={`font-inter text-xs ${colors?.text} opacity-90`}>
                        {area?.description}
                      </p>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          <Icons.Eye size={14} className="mr-1" />
                          Visualizando
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`${location?.pathname}?area=${area?.id}`}
                    className={`block p-6 rounded-xl border-2 ${colors?.border} ${colors?.bg} transition-all duration-200 hover:shadow-md group`}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                        {(() => { const IconComponent = Icons[area?.icon]; return <IconComponent size={24} className={colors?.icon} />; })()}
                      </div>
                      <h4 className={`font-inter font-semibold text-sm ${colors?.text} mb-2`}>
                        {area?.name}
                      </h4>
                      <p className={`font-inter text-xs ${colors?.text} opacity-80`}>
                        {area?.description}
                      </p>
                      <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className={`inline-flex items-center text-xs font-medium ${colors?.text}`}>
                          Ver detalhes
                          <Icons.ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Back to Overview */}
        <div className="text-center mt-8">
            <Link
              to="/areas-de-atuacao"
            className="inline-flex items-center px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
          >
            <Icons.ArrowLeft size={18} className="mr-2" />
            Ver Todas as Áreas de Atuação
          </Link>
        </div>
      </div>
    </section>
  );
};



const ContactCTA = ({ practiceArea }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgente (preciso de resposta hoje)' },
    { value: 'soon', label: 'Em breve (até 2 dias úteis)' },
    { value: 'normal', label: 'Normal (até 1 semana)' },
    { value: 'planning', label: 'Planejamento (sem pressa)' }
  ];

  const practiceAreaNames = {
    civil: 'Direito Civil',
    consumer: 'Direito do Consumidor',
    family: 'Direito de Família',
    business: 'Direito Empresarial'
  };

  const whatsappTemplates = {
    civil: 'Olá, preciso de orientação em Direito Civil. Gostaria de agendar um atendimento.',
    consumer: 'Olá, tenho uma questão de Direito do Consumidor e preciso de ajuda jurídica.',
    family: 'Olá, preciso de orientação em Direito de Família. Gostaria de conversar sobre minha situação.',
    business: 'Olá, sou empresário e preciso de consultoria jurídica empresarial.'
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      urgency: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        urgency: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  if (showSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-green-200">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
              <Icons.CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className="font-lora font-bold text-2xl text-slate-900 mb-4">
              Mensagem Enviada com Sucesso!
            </h3>
            <p className="font-inter text-slate-600 mb-6">
              Recebemos sua solicitação e entraremos em contato em até 24 horas. 
              Para questões urgentes, utilize nossos canais diretos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-green-600 hover:bg-green-700"
              >
                WhatsApp Direto
              </Button>
              <Button
                variant="outline"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                (66) 99911-1314
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="font-lora font-bold text-3xl lg:text-4xl mb-6">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="font-inter text-lg text-white/80 leading-relaxed mb-8">
              Entre em contato conosco para um atendimento personalizado em {practiceAreaNames?.[practiceArea] || 'Direito Civil'}.
              Oferecemos atendimento humanizado e soluções jurídicas eficazes.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icons.MessageCircle size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">WhatsApp</h4>
                  <p className="font-inter text-sm text-white/70">Resposta imediata durante horário comercial</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icons.Phone size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">Telefone</h4>
                  <p className="font-inter text-sm text-white/70">(66) 99911-1314 - Atendimento em horário comercial</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Icons.Mail size={24} color="white" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-white mb-1">E-mail</h4>
                  <p className="font-inter text-sm text-white/70">Resposta imediata</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-slate-900 hover:bg-white/90 font-semibold"
              >
                WhatsApp Direto
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handlePhoneClick}
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="font-lora font-semibold text-2xl text-slate-900 mb-2">
                Solicite uma Consulta
              </h3>
              <p className="font-inter text-slate-600">
                Preencha o formulário e entraremos em contato em até 24 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome Completo"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />

                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="(66) 99911-1314"
                  required
                />
              </div>

              <Select
                label="Urgência do Caso"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={handleSelectChange}
                placeholder="Selecione a urgência"
                required
              />

              <div>
                <label className="block font-inter font-medium text-slate-900 mb-2">
                  Descreva sua Situação
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
                  placeholder="Conte-nos sobre sua situação jurídica..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                fullWidth
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
              </Button>

              <div className="text-center">
                <p className="font-inter text-xs text-slate-500">
                  Ao enviar, você concorda com nossa política de privacidade. 
                  Seus dados são protegidos pela LGPD.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


const PaginaAreaDeAtuacao = () => {
  const [searchParams] = useSearchParams();
  const [currentArea, setCurrentArea] = useState('civil');

  useEffect(() => {
    const area = searchParams?.get('area');
    if (area && ['civil', 'consumer', 'family', 'business']?.includes(area)) {
      setCurrentArea(area);
    }
  }, [searchParams]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5566999111314', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+5566999111314';
  };

  const getPageTitle = () => {
    const titles = {
      civil: 'Direito Civil - Marcelo Baía Advocacia',
      consumer: 'Direito do Consumidor - Marcelo Baía Advocacia',
      family: 'Direito de Família - Marcelo Baía Advocacia',
      business: 'Direito Empresarial - Marcelo Baía Advocacia'
    };
    return titles?.[currentArea] || titles?.civil;
  };

  const getPageDescription = () => {
    const descriptions = {
      civil: 'Especialista em Direito Civil em Rondonópolis/MT. Contratos, responsabilidade civil, direitos reais e questões patrimoniais com atendimento personalizado.',
      consumer: 'Defesa do Consumidor em Rondonópolis/MT. Proteção contra práticas abusivas, vícios de produtos, serviços bancários e direitos do consumidor.',
      family: 'Direito de Família em Rondonópolis/MT. Divórcio, guarda, pensão alimentícia e questões familiares com atendimento humanizado e discreto.',
      business: 'Direito Empresarial em Rondonópolis/MT. Consultoria jurídica para empresas, contratos comerciais, recuperação judicial e compliance.'
    };
    return descriptions?.[currentArea] || descriptions?.civil;
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="keywords" content={`${currentArea === 'civil' ? 'direito civil, contratos, responsabilidade civil' : currentArea === 'consumer' ? 'direito consumidor, defesa consumidor, vícios produtos' : currentArea === 'family' ? 'direito família, divórcio, guarda, pensão' : 'direito empresarial, consultoria jurídica, contratos comerciais'}, advogado rondonópolis, marcelo baía`} />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:image" content="/assets/images/logo-512x512.png" />
        <meta name="twitter:image" content="/assets/images/logo-512x512.png" />
        <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://marcelobaia.adv.br/pagina-area-de-atuacao?area=${currentArea}`} />
          <link rel="canonical" href={`https://marcelobaia.adv.br/pagina-area-de-atuacao?area=${currentArea}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Marcelo Baía Advocacia",
            telephone: "+55 66 99911-1314",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Tiradentes, 1888",
              addressLocality: "Rondonópolis",
              addressRegion: "MT",
              postalCode: "78700-028",
              addressCountry: "BR",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              description:
                "Atendimento presencial mediante agendamento. Atendimento por telefone entre as 7:00h e 17:00h de segunda-feira à sexta-feira e via WhatsApp 24h por dia 7 dias por semana.",
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          <PracticeAreaHero 
            practiceArea={currentArea}
            onWhatsAppClick={handleWhatsAppClick}
            onCallClick={handleCallClick}
          />
          
          <ServiceBreakdown practiceArea={currentArea} />
          
          <CaseStudyApproach practiceArea={currentArea} />
          
          <ContextualFAQ practiceArea={currentArea} />

          <ContactCTA practiceArea={currentArea} />

          <PracticeAreaSelector currentArea={currentArea} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PaginaAreaDeAtuacao;
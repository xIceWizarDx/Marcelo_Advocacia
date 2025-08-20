import React from 'react';
import Icon from '../../../components/AppIcon';

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
                <Icon 
                  name={service?.icon} 
                  size={28} 
                  className="text-indigo-600 group-hover:text-white transition-colors duration-300" 
                />
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
                      <Icon name="Check" size={12} className="text-indigo-600" />
                    </div>
                    <span className="font-inter text-sm text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="flex items-center justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ArrowRight" size={20} className="text-indigo-600" />
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
                href="https://wa.me/5565999999999?text=Olá, preciso de orientação jurídica específica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Consulta via WhatsApp
              </a>
              <a 
                href="tel:+5565999999999"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;
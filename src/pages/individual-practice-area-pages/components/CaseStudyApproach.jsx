import React from 'react';
import Icon from '../../../components/AppIcon';

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
          outcome: "Resolução em prazo adequado com indenização de valor relevante e exclusão imediata do nome dos órgãos de proteção.",
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
          outcome: "Reconhecimento da propriedade em prazo adequado, garantindo segurança jurídica à família.",
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
          outcome: "Redução significativa no valor das parcelas e restituição de valores relevantes pagos a mais.",
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
          outcome: "Indenização de valores relevantes por danos morais e materiais.",
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
          outcome: "Divórcio concluído em prazo adequado com acordo satisfatório para ambas as partes.",
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
                    <Icon name={caseStudy?.icon} size={20} className="text-indigo-600" />
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
                    <Icon name="CheckCircle" size={18} className="text-green-600 mr-2" />
                    Resultado:
                  </h4>
                  <p className="font-inter text-green-800 leading-relaxed mb-3">
                    {caseStudy?.outcome}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} className="text-green-600" />
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
                        <Icon name={caseStudy?.icon} size={32} className="text-indigo-600" />
                      </div>
                      <h4 className="font-lora font-semibold text-xl text-slate-900 mb-4">
                        Metodologia Aplicada
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Icon name="Search" size={16} className="text-slate-600" />
                          <span className="font-inter text-sm text-slate-700">Análise Detalhada</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Icon name="Users" size={16} className="text-slate-600" />
                          <span className="font-inter text-sm text-slate-700">Abordagem Humanizada</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Icon name="Target" size={16} className="text-slate-600" />
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
            <Icon name="Info" size={20} className="text-slate-600 flex-shrink-0 mt-0.5" />
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

export default CaseStudyApproach;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationPrep = () => {
  const [activeTab, setActiveTab] = useState('prepare');

  const preparationItems = [
    {
      icon: 'FileText',
      title: 'Documentos Relevantes',
      description: 'Traga todos os documentos relacionados ao seu caso',
      items: [
        'Contratos, acordos ou termos assinados',
        'Correspondências (e-mails, cartas, mensagens)',
        'Comprovantes de pagamento ou recibos',
        'Documentos pessoais (RG, CPF, comprovante de residência)',
        'Certidões ou registros oficiais',
        'Fotos ou evidências visuais do problema'
      ]
    },
    {
      icon: 'Clock',
      title: 'Cronologia dos Fatos',
      description: 'Organize uma linha do tempo dos acontecimentos',
      items: [
        'Data de início do problema ou situação',
        'Principais marcos e eventos importantes',
        'Tentativas anteriores de resolução',
        'Prazos legais ou contratuais relevantes',
        'Comunicações importantes com terceiros',
        'Mudanças significativas na situação'
      ]
    },
    {
      icon: 'Users',
      title: 'Pessoas Envolvidas',
      description: 'Liste todas as partes relacionadas ao caso',
      items: [
        'Nomes completos e dados de contato',
        'Relacionamento com cada pessoa/empresa',
        'Papel de cada um na situação',
        'Testemunhas potenciais',
        'Advogados anteriores (se houver)',
        'Outros profissionais consultados'
      ]
    },
    {
      icon: 'Target',
      title: 'Objetivos e Expectativas',
      description: 'Defina claramente o que espera alcançar',
      items: [
        'Resultado ideal para o seu caso',
        'Alternativas aceitáveis',
        'Urgência da resolução',
        'Orçamento disponível para o caso',
        'Disposição para acordo ou negociação',
        'Consequências de não resolver o problema'
      ]
    }
  ];

  const consultationTypes = [
    {
      type: 'Consulta Inicial',
      duration: '60 minutos',
      price: 'Gratuita',
      description: 'Avaliação completa do seu caso e orientações iniciais',
      includes: [
        'Análise preliminar da situação jurídica',
        'Identificação dos direitos e deveres',
        'Estratégias possíveis de resolução',
        'Estimativa de prazos e custos',
        'Orientações sobre próximos passos'
      ],
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      type: 'Consulta de Acompanhamento',
      duration: '45 minutos',
      price: 'R$ 200,00',
      description: 'Continuidade de caso já iniciado ou segunda opinião',
      includes: [
        'Revisão do andamento do processo',
        'Ajustes na estratégia jurídica',
        'Esclarecimento de dúvidas específicas',
        'Orientações sobre documentação',
        'Planejamento das próximas ações'
      ],
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      type: 'Análise de Documentos',
      duration: '30 minutos',
      price: 'R$ 150,00',
      description: 'Revisão especializada de contratos e documentos',
      includes: [
        'Análise detalhada do documento',
        'Identificação de cláusulas problemáticas',
        'Sugestões de melhorias ou alterações',
        'Explicação dos termos jurídicos',
        'Orientações sobre assinatura'
      ],
      color: 'bg-amber-50 border-amber-200 text-amber-800'
    }
  ];

  const emergencyProtocol = [
    {
      situation: 'Prisão ou Detenção',
      action: 'Ligue imediatamente',
      contact: '(66) 99911-1314',
      timeframe: 'Atendimento imediato'
    },
    {
      situation: 'Intimação Judicial',
      action: 'WhatsApp com foto do documento',
      contact: 'Enviar documento',
      timeframe: 'Resposta em 2 horas'
    },
    {
      situation: 'Acidente ou Lesão',
      action: 'Contato após atendimento médico',
      contact: 'Ligar ou WhatsApp',
      timeframe: 'Orientação em 4 horas'
    },
    {
      situation: 'Despejo ou Cobrança',
      action: 'Enviar notificação por WhatsApp',
      contact: 'Foto do documento',
      timeframe: 'Análise em 6 horas'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Prepare-se para sua Consulta
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Uma boa preparação torna nossa consulta mais eficiente e produtiva. 
            Veja como se preparar e o que esperar do nosso atendimento.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-sm max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('prepare')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'prepare' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Como se Preparar
          </button>
          <button
            onClick={() => setActiveTab('types')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'types' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tipos de Consulta
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'emergency' ?'bg-indigo-600 text-white shadow-md' :'text-slate-600 hover:text-slate-900'
            }`}
          >
            Casos Urgentes
          </button>
        </div>

        {/* Preparation Guide */}
        {activeTab === 'prepare' && (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {preparationItems?.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon name={item?.icon} size={24} color="#4f46e5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-lora text-xl font-bold text-slate-900 mb-2">
                      {item?.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {item?.description}
                    </p>
                    <ul className="space-y-2">
                      {item?.items?.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700">
                          <Icon name="Check" size={16} color="#059669" className="flex-shrink-0 mt-0.5" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Consultation Types */}
        {activeTab === 'types' && (
          <div className="space-y-6">
            {consultationTypes?.map((consultation, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 ${consultation?.color}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-lora text-xl font-bold mb-1">
                      {consultation?.type}
                    </h3>
                    <p className="text-sm opacity-80">
                      {consultation?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <div className="text-center">
                      <div className="font-bold text-lg">{consultation?.duration}</div>
                      <div className="text-xs opacity-70">Duração</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">{consultation?.price}</div>
                      <div className="text-xs opacity-70">Investimento</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {consultation?.includes?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} color="currentColor" className="flex-shrink-0 mt-0.5 opacity-70" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Emergency Protocol */}
        {activeTab === 'emergency' && (
          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
              <Icon name="AlertTriangle" size={32} color="#dc2626" className="mx-auto mb-4" />
              <h3 className="font-lora text-xl font-bold text-red-800 mb-2">
                Protocolo de Emergência
              </h3>
              <p className="text-red-700">
                Para situações urgentes que requerem atenção jurídica imediata, 
                siga as orientações abaixo conforme o tipo de emergência.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {emergencyProtocol?.map((protocol, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={18} color="#dc2626" />
                    {protocol?.situation}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Ação:</span>
                      <span className="font-medium">{protocol?.action}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Contato:</span>
                      <span className="font-medium">{protocol?.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Prazo:</span>
                      <span className="font-medium text-green-600">{protocol?.timeframe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Icon name="Info" size={18} />
                Importante Lembrar
              </h4>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Mantenha a calma e não tome decisões precipitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Preserve todos os documentos e evidências</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Não assine nada sem orientação jurídica</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Anote detalhes importantes enquanto estão frescos na memória</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultationPrep;
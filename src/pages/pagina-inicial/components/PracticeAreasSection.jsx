import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      id: 'civil',
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direitos reais e obrigações',
      icon: 'FileText',
      scenarios: [
        'Contratos de compra e venda',
        'Responsabilidade por danos',
        'Direitos de propriedade',
        'Questões condominiais'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'consumer',
      title: 'Direito do Consumidor',
      description: 'Proteção aos direitos do consumidor e relações de consumo',
      icon: 'ShoppingCart',
      scenarios: [
        'Produtos com defeito',
        'Serviços mal prestados',
        'Cobrança indevida',
        'Negativação irregular'
      ],
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'family',
      title: 'Direito de Família',
      description: 'Divórcio, pensão alimentícia, guarda e sucessões',
      icon: 'Heart',
      scenarios: [
        'Divórcio consensual',
        'Pensão alimentícia',
        'Guarda de filhos',
        'Inventário e partilha'
      ],
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 'business',
      title: 'Direito Empresarial',
      description: 'Consultoria preventiva e solução de conflitos empresariais',
      icon: 'Building2',
      scenarios: [
        'Constituição de empresas',
        'Contratos comerciais',
        'Recuperação judicial',
        'Compliance empresarial'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Icon name="Scale" size={16} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Áreas de Atuação</span>
          </div>
          
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Expertise jurídica completa para{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent">
              suas necessidades
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Atendimento especializado em diferentes áreas do direito, sempre com foco na prevenção de riscos e solução eficaz de conflitos.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas?.map((area, index) => (
            <div
              key={area?.id}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden card-hover"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${area?.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={area?.icon} size={24} className={area?.iconColor} />
                </div>

                {/* Title & Description */}
                <h3 className="font-lora text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {area?.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {area?.description}
                </p>

                {/* Scenarios List */}
                <div className="space-y-2 mb-6">
                  {area?.scenarios?.map((scenario, scenarioIndex) => (
                    <div key={scenarioIndex} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600">{scenario}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                  <Link
                    to="/areas-de-atuacao"
                  className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:underline transition-colors duration-300"
                >
                  <span>Saiba mais</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
            <Link
              to="/areas-de-atuacao"
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Ver todas as áreas de atuação</span>
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
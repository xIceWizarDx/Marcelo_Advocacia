import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

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
                        <Icon name={area?.icon} size={24} className={colors?.icon} />
                      </div>
                      <h4 className={`font-inter font-semibold text-sm ${colors?.text} mb-2`}>
                        {area?.name}
                      </h4>
                      <p className={`font-inter text-xs ${colors?.text} opacity-90`}>
                        {area?.description}
                      </p>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          <Icon name="Eye" size={14} className="mr-1" />
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
                        <Icon name={area?.icon} size={24} className={colors?.icon} />
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
                          <Icon name="ArrowRight" size={14} className="ml-1" />
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
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Ver Todas as Áreas de Atuação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaSelector;
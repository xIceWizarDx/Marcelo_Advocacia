import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalJourney = () => {
  const milestones = [
    {
      year: "2015",
      title: "Início da Carreira",
      description: "Formação em Direito pela Universidade Federal de Mato Grosso (UFMT) e inscrição na OAB/MT 14.159-B",
      icon: "GraduationCap",
      color: "bg-emerald-500"
    },
    {
      year: "2017",
      title: "Especialização em Direito Civil",
      description: "Pós-graduação em Direito Civil e Processual Civil, aprofundando conhecimentos em contratos e responsabilidade civil",
      icon: "BookOpen",
      color: "bg-blue-500"
    },
    {
      year: "2019",
      title: "Expansão para Direito do Consumidor",
      description: "Certificação em Direito do Consumidor e início da atuação especializada em defesa dos direitos consumeristas",
      icon: "Shield",
      color: "bg-purple-500"
    },
    {
      year: "2021",
      title: "Direito de Família e Empresarial",
      description: "Ampliação da atuação para Direito de Família e Empresarial, oferecendo assessoria completa para pessoas físicas e jurídicas",
      icon: "Users",
      color: "bg-orange-500"
    },
    {
      year: "2023",
      title: "Reconhecimento Profissional",
      description: "Palestrante em eventos jurídicos regionais e membro ativo da Comissão de Direito Civil da OAB/MT 14.159-B",
      icon: "Award",
      color: "bg-amber-500"
    },
    {
      year: "2024",
      title: "Inovação Digital",
      description: "Implementação de atendimento digital integrado e criação de conteúdo educativo para democratizar o acesso à informação jurídica",
      icon: "Smartphone",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Trajetória Profissional
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Uma jornada de dedicação contínua ao aperfeiçoamento técnico e ao atendimento 
            humanizado, sempre buscando a excelência na prestação de serviços jurídicos.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-transparent"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={milestone?.year}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-accent shadow-lg flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${milestone?.color}`}></div>
                </div>

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${milestone?.color} rounded-lg flex items-center justify-center shadow-sm`}>
                        <Icon name={milestone?.icon} size={24} color="white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full">
                          {milestone?.year}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-lora text-xl font-semibold text-brand-primary mb-3">
                      {milestone?.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
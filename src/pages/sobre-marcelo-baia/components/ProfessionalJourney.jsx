import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalJourney = () => {
  const milestones = [
    {
      year: "2005",
      title: "Início na OAB como Estagiário",
      description: "Inscrição como estagiário na OAB/GO nº 17.604/E, realizando atos jurídicos e peticionamento.",
      icon: "FileSignature",
      color: "bg-emerald-500"
    },
    {
      year: "2006",
      title: "Graduação em Direito",
      description: "Formado em Direito pelo Centro Universitário de Goiás, em Goiânia-GO.",
      icon: "GraduationCap",
      color: "bg-blue-500"
    },
    {
      year: "2008",
      title: "Inscrição como Advogado",
      description: "OAB/GO nº 27.669, com atuação em cerca de 2.500 processos pela Procuradoria de Assistência Judiciária do Estado de Goiás.",
      icon: "Gavel",
      color: "bg-purple-500"
    },
    {
      year: "2010",
      title: "Transferência para OAB/MT",
      description: "Inscrição por transferência na OAB/MT nº 14.159-B.",
      icon: "MapPin",
      color: "bg-orange-500"
    },
    {
      year: "2011",
      title: "Analista Jurídico TRF1",
      description: "Aprovação no concurso de Analista Jurídico do Tribunal Regional Federal da 1ª Região.",
      icon: "Landmark",
      color: "bg-amber-500"
    },
    {
      year: "2012",
      title: "Pós-Graduação em Direito Público",
      description: "Especialização em Direito Público Material pelo Centro Universitário de Araras-MG.",
      icon: "BookOpenCheck",
      color: "bg-indigo-500"
    },
    {
      year: "2012",
      title: "Início na Docência",
      description: "Atuação como professor de Direito Civil, Processual Civil, Empresarial e Trabalhista.",
      icon: "Users",
      color: "bg-teal-500"
    },
    {
      year: "2016",
      title: "Inovação Digital",
      description: "Implementação de virtualização de processos e soluções digitais.",
      icon: "Laptop",
      color: "bg-pink-500"
    },
    {
      year: "2018",
      title: "Procurador em Alto Garças-MT",
      description: "Aprovação no concurso de Procurador Jurídico do Município de Alto Garças-MT.",
      icon: "Award",
      color: "bg-red-500"
    },
    {
      year: "2023",
      title: "Procurador em São José do Povo-MT",
      description: "Aprovação no concurso de Procurador Jurídico do Município de São José do Povo-MT, com posse em 2024.",
      icon: "CheckCircle",
      color: "bg-green-500"
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
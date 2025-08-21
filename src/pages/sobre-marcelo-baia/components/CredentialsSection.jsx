import React from 'react';
import Icon from '../../../components/AppIcon';

const CredentialsSection = () => {
  const education = [
    {
      degree: "Bacharel em Direito",
      institution: "Universidade Federal de Mato Grosso (UFMT)",
      year: "2015",
      description: "Formação sólida em Ciências Jurídicas com ênfase em Direito Civil e Processual Civil"
    },
    {
      degree: "Pós-Graduação em Direito Civil",
      institution: "Instituto de Direito Aplicado (IDA)",
      year: "2017",
      description: "Especialização em contratos, responsabilidade civil e direitos reais"
    },
    {
      degree: "Certificação em Direito do Consumidor",
      institution: "Escola Superior de Advocacia (ESA/MT)",
      year: "2019",
      description: "Capacitação especializada em defesa dos direitos do consumidor"
    }
  ];

  const certifications = [
    {
      title: "OAB/MT 14.159-B",
      description: "Inscrito e ativo na Ordem dos Advogados do Brasil - Seção Mato Grosso",
      icon: "Scale",
      status: "Ativo desde 2015"
    },
    {
      title: "Comissão de Direito Civil",
      description: "Membro ativo da Comissão de Direito Civil da OAB/MT 14.159-B",
      icon: "Users",
      status: "Desde 2023"
    },
    {
      title: "Mediação e Conciliação",
      description: "Certificado em técnicas de mediação e resolução de conflitos",
      icon: "Handshake",
      status: "Certificado 2022"
    }
  ];

  // Achievements section temporarily disabled
  // const achievements = [
  //   {
  //     title: "Palestrante Jurídico",
  //     description: "Participação em eventos e seminários sobre Direito Civil e do Consumidor",
  //     count: "15+",
  //     label: "Palestras"
  //   },
  //   {
  //     title: "Casos Resolvidos",
  //     description: "Histórico de sucesso em diversas áreas do direito",
  //     count: "500+",
  //     label: "Casos"
  //   },
  //   {
  //     title: "Anos de Experiência",
  //     description: "Dedicação contínua à advocacia em Rondonópolis/MT",
  //     count: "8+",
  //     label: "Anos"
  //   },
  //   {
  //     title: "Clientes Atendidos",
  //     description: "Pessoas físicas e jurídicas assessoradas com excelência",
  //     count: "300+",
  //     label: "Clientes"
  //   }
  // ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-brand-primary mb-6">
            Credenciais e Qualificações
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Formação acadêmica sólida, certificações profissionais e experiência prática 
            que garantem a qualidade técnica dos serviços prestados.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
            Formação Acadêmica
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {education?.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="GraduationCap" size={24} color="rgb(79 70 229)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-brand-primary text-sm">
                        {edu?.degree}
                      </h4>
                      <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs rounded-full">
                        {edu?.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-text-secondary mb-2">
                      {edu?.institution}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {edu?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
            Certificações Profissionais
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} color="rgb(79 70 229)" />
                </div>
                <h4 className="font-semibold text-brand-primary mb-2">
                  {cert?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  {cert?.description}
                </p>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                  {cert?.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements section is temporarily disabled */}
        {false && (
          <div className="bg-gradient-to-br from-slate-50 to-zinc-100 rounded-2xl p-8 lg:p-12">
            <h3 className="font-lora text-2xl font-semibold text-brand-primary mb-8 text-center">
              Números que Refletem a Experiência
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements?.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-bold text-brand-accent">
                      {achievement?.count}
                    </span>
                    <p className="text-sm font-medium text-brand-accent mt-1">
                      {achievement?.label}
                    </p>
                  </div>
                  <h4 className="font-semibold text-brand-primary mb-2">
                    {achievement?.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {achievement?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CredentialsSection;
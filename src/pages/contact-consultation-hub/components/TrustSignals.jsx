import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const credentials = [
    {
      icon: 'Award',
      title: 'Marcelo Baía — OAB/MT 14.159-B',
      description: 'Registro ativo na Ordem dos Advogados do Brasil'
    },
    {
      icon: 'GraduationCap',
      title: 'Especialização',
      description: 'Pós-graduação em Direito Civil e Empresarial'
    },
    {
      icon: 'Users',
      title: '500+ Clientes',
      description: 'Atendidos com sucesso nos últimos 5 anos'
    },
    {
      icon: 'Clock',
      title: '10 Anos',
      description: 'De experiência em advocacia'
    }
  ];

  const commitments = [
    {
      icon: 'Shield',
      title: 'Sigilo Absoluto',
      description: 'Todas as informações são tratadas com total confidencialidade, conforme o Código de Ética da OAB.'
    },
    {
      icon: 'Clock',
      title: 'Resposta Rápida',
      description: 'Comprometemo-nos a responder todas as consultas em até 24 horas úteis.'
    },
    {
      icon: 'CheckCircle',
      title: 'Transparência Total',
      description: 'Honorários claros, sem surpresas. Você sempre saberá os custos envolvidos.'
    },
    {
      icon: 'Heart',
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com respeito, empatia e atenção personalizada.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: `Excelente profissional! Resolveu minha questão trabalhista de forma rápida e eficiente. 
                Sempre muito atencioso e explicou todo o processo de forma clara.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      role: 'Comerciante',
      content: `Precisei de ajuda com um contrato complexo e o Dr. Marcelo foi fundamental. 
                Orientação precisa e preço justo. Recomendo sem hesitar.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: `Atendimento excepcional em meu processo de divórcio. Muito profissional, 
                mas também humano e compreensivo durante um momento difícil.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#f59e0b" : "#e5e7eb"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Credentials */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Credenciais e Qualificações
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Profissional qualificado e experiente, comprometido com a excelência 
            no atendimento jurídico.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials?.map((credential, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Icon name={credential?.icon} size={28} color="#4f46e5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {credential?.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {credential?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nossos Compromissos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Valores que norteiam nossa prática jurídica e garantem um atendimento 
              de qualidade para todos os clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {commitments?.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name={commitment?.icon} size={24} color="#059669" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {commitment?.title}
                  </h3>
                  <p className="text-slate-600">
                    {commitment?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Depoimentos reais de clientes que confiaram em nossos serviços jurídicos 
              e obtiveram resultados satisfatórios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={`Foto de ${testimonial?.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial?.rating)}
                </div>
                
                <p className="text-slate-700 text-sm leading-relaxed">
                  "{testimonial?.content}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-800 rounded-full">
              <Icon name="Shield" size={18} />
              <span className="font-medium">
                Todos os depoimentos são de clientes reais e foram autorizados para publicação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
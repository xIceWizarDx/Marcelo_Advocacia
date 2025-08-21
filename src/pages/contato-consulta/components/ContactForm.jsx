import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal',
    consultationType: 'initial',
    privacyConsent: false,
    marketingConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgente (resposta em 2 horas)', color: 'text-red-600' },
    { value: 'normal', label: 'Normal (resposta em 24 horas)', color: 'text-blue-600' },
    { value: 'low', label: 'Não urgente (resposta em 48 horas)', color: 'text-green-600' }
  ];

  const consultationTypes = [
    { value: 'initial', label: 'Consulta inicial', description: 'Primeira consulta para avaliação do caso' },
    { value: 'followup', label: 'Acompanhamento', description: 'Continuidade de caso já iniciado' },
    { value: 'document', label: 'Análise de documentos', description: 'Revisão de contratos ou documentos' },
    { value: 'preventive', label: 'Consultoria preventiva', description: 'Orientação para evitar problemas futuros' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          urgency: 'normal',
          consultationType: 'initial',
          privacyConsent: false,
          marketingConsent: false
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Formulário de Contato
          </h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário abaixo com detalhes do seu caso. 
            Quanto mais informações, melhor poderemos ajudá-lo.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Icon name="CheckCircle" size={32} color="#059669" />
              </div>
              <h3 className="font-lora text-2xl font-bold text-slate-900 mb-4">
                Mensagem Enviada com Sucesso!
              </h3>
              <p className="text-slate-600 mb-6">
                Recebemos sua mensagem e entraremos em contato em breve. 
                Verifique seu e-mail para confirmação.
              </p>
              <Button
                variant="outline"
                onClick={() => setSubmitStatus(null)}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Enviar Nova Mensagem
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nome Completo"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                />
                
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Telefone/WhatsApp"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="(66) 99911-1314"
                  required
                />
                
                <Input
                  label="Assunto"
                  type="text"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  placeholder="Resumo do seu caso"
                  required
                />
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Nível de Urgência
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {urgencyOptions?.map((option) => (
                    <label
                      key={option?.value}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData?.urgency === option?.value
                          ? 'border-indigo-500 bg-indigo-50' :'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={option?.value}
                        checked={formData?.urgency === option?.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className={`font-medium ${option?.color}`}>
                          {option?.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Tipo de Consulta
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {consultationTypes?.map((type) => (
                    <label
                      key={type?.value}
                      className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData?.consultationType === type?.value
                          ? 'border-indigo-500 bg-indigo-50' :'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value={type?.value}
                        checked={formData?.consultationType === type?.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 mb-1">
                          {type?.label}
                        </div>
                        <div className="text-sm text-slate-600">
                          {type?.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Detalhes do Caso
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Descreva seu caso com o máximo de detalhes possível. Inclua datas, documentos disponíveis e qualquer informação relevante..."
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Mínimo 50 caracteres. Quanto mais detalhes, melhor poderemos ajudá-lo.
                </p>
              </div>

              {/* LGPD Compliance */}
              <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Icon name="Shield" size={18} />
                  Consentimento LGPD
                </h4>
                
                <Checkbox
                  label="Concordo com o tratamento dos meus dados pessoais conforme a Política de Privacidade"
                  checked={formData?.privacyConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, privacyConsent: e?.target?.checked }))}
                  required
                  description="Obrigatório para processar sua solicitação"
                />
                
                <Checkbox
                  label="Aceito receber comunicações sobre serviços jurídicos e conteúdo educativo"
                  checked={formData?.marketingConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, marketingConsent: e?.target?.checked }))}
                  description="Opcional - você pode cancelar a qualquer momento"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  disabled={!formData?.privacyConsent}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                  className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                >
                  {isSubmitting ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-3">
                  Ao enviar, você concorda com nossos termos de serviço e política de privacidade
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Marcelo Baía Advocacia</title>
        <meta
          name="description"
          content="Informações sobre como tratamos seus dados pessoais."
        />
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-lora font-semibold mb-8 text-brand-primary text-center">
            Política de Privacidade
          </h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Finalidades do tratamento</h2>
            <p className="text-slate-600 text-sm">
              Utilizamos seus dados pessoais apenas para responder consultas, prestar serviços
              jurídicos e cumprir obrigações legais.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Bases legais utilizadas</h2>
            <p className="text-slate-600 text-sm">
              O tratamento ocorre com fundamento no consentimento do titular, na execução de
              contratos e no cumprimento de obrigações legais.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Direitos do titular e como exercê-los
            </h2>
            <p className="text-slate-600 text-sm">
              Você pode solicitar confirmação, acesso, correção ou exclusão de seus dados pelo nosso
              canal de atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Canal de contato</h2>
            <p className="text-slate-600 text-sm">
              Para exercer seus direitos ou tirar dúvidas, entre em contato pelo e-mail{' '}
              <a
                href="mailto:marcelobaiaadvogado@gmail.com"
                className="text-brand-primary underline"
              >
                marcelobaiaadvogado@gmail.com
              </a>
              .
            </p>
          </section>
        </main>

        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Contato</h3>
                <div className="space-y-3">
                  <p className="font-inter text-slate-300">
                    📍 Rua Tiradentes, 1888 – Centro, Rondonópolis-MT – CEP 78.700-028
                  </p>
                  <p className="font-inter text-slate-300">
                    📞 <a href="tel:+5566999111314" className="text-slate-300">(66) 99911-1314</a>
                  </p>
                  <p className="font-inter text-slate-300">
                    💬 <a href="https://wa.me/5566999111314" target="_blank" rel="noopener noreferrer" className="text-slate-300">(66) 99911-1314</a>
                  </p>
                  <p className="font-inter text-slate-300">
                    ✉️ <a href="mailto:marcelobaiaadvogado@gmail.com" className="text-slate-300">marcelobaiaadvogado@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Practice Areas */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Áreas de Atuação</h3>
                <div className="space-y-2">
                  <p className="font-inter text-slate-300">Direito Civil</p>
                  <p className="font-inter text-slate-300">Direito do Consumidor</p>
                  <p className="font-inter text-slate-300">Direito de Família</p>
                  <p className="font-inter text-slate-300">Direito Empresarial</p>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-lora font-semibold text-xl mb-4">Informações Legais</h3>
                <div className="space-y-2">
                  <p className="font-inter text-slate-300 text-sm">OAB/MT 14.159-B</p>
                  <p className="font-inter text-slate-300 text-sm">Atendimento mediante agendamento</p>
                  <p className="font-inter text-slate-300 text-sm">Atendimento via WhatsApp é em tempo integral</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="font-inter text-slate-400 text-sm">
                © {new Date().getFullYear()} Marcelo Baía Advocacia. Todos os direitos reservados.
              </p>
              <p className="font-inter text-slate-400 text-sm mt-2">
                <a href="/privacy-policy" className="hover:text-white">Política de Privacidade</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;


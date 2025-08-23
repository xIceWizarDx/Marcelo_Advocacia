import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import * as Icons from 'lucide-react';
import Footer from '@/components/ui/Footer';

const PaginaNaoEncontrada = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            </div>
          </div>

          <h2 className="text-2xl font-medium text-onBackground mb-2">Página Não Encontrada</h2>
          <p className="text-onBackground/70 mb-8">
            A página que você procura não existe. Vamos voltar!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              icon={<Icons.ArrowLeft />}
              iconPosition="left"
              onClick={() => window.history?.back()}
            >
                Voltar
            </Button>

            <Button
              variant="outline"
              icon={<Icons.Home />}
              iconPosition="left"
              onClick={handleGoHome}
            >
                Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaNaoEncontrada;

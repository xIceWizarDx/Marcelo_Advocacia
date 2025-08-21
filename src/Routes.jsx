import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import PaginaAreaDeAtuacao from './pages/pagina-area-de-atuacao';
import SobreMarceloBaia from './pages/sobre-marcelo-baia';
import PerguntasFrequentes from './pages/perguntas-frequentes';
import AreasDeAtuacao from './pages/areas-de-atuacao';
import ContatoConsulta from './pages/contato-consulta';
import PaginaInicial from './pages/pagina-inicial';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/pagina-area-de-atuacao" element={<PaginaAreaDeAtuacao />} />
        <Route path="/sobre-marcelo-baia" element={<SobreMarceloBaia />} />
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
        <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
        <Route path="/contato-consulta" element={<ContatoConsulta />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

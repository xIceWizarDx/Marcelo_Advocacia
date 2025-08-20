import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import IndividualPracticeAreaPages from './pages/individual-practice-area-pages';
import AboutMarceloBaia from './pages/about-marcelo-ba-a';
import FAQHub from './pages/faq-hub';
import PracticeAreasOverview from './pages/practice-areas-overview';
import ContactConsultationHub from './pages/contact-consultation-hub';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutMarceloBaia />} />
        <Route path="/individual-practice-area-pages" element={<IndividualPracticeAreaPages />} />
        <Route path="/about-marcelo-ba-a" element={<AboutMarceloBaia />} />
        <Route path="/faq-hub" element={<FAQHub />} />
        <Route path="/practice-areas-overview" element={<PracticeAreasOverview />} />
        <Route path="/contact-consultation-hub" element={<ContactConsultationHub />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

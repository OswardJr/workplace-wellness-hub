import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import PausasActivas from "./pages/PausasActivas";
import NotFound from "./pages/NotFound";
import BienestarEmocional from "./pages/services/BienestarEmocional";
import CertificacionPausasActivas from "./pages/services/CertificacionPausasActivas";
import EventosCorporativos from "./pages/services/EventosCorporativos";
import GimnasiaLaboral from "./pages/services/GimnasiaLaboral";
import ImplementacionBienestar from "./pages/services/ImplementacionBienestar";
import MasajesAntiestres from "./pages/services/MasajesAntiestres";
import ProgramasVirtuales from "./pages/services/ProgramasVirtuales";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/bienestar-emocional" element={<BienestarEmocional />} />
            <Route path="/servicios/certificacion-pausas-activas" element={<CertificacionPausasActivas />} />
            <Route path="/servicios/eventos-corporativos" element={<EventosCorporativos />} />
            <Route path="/servicios/gimnasia-laboral" element={<GimnasiaLaboral />} />
            <Route path="/servicios/implementacion-bienestar" element={<ImplementacionBienestar />} />
            <Route path="/servicios/masajes-antiestres" element={<MasajesAntiestres />} />
            <Route path="/servicios/pausas-activas" element={<PausasActivas />} />
            <Route path="/servicios/programas-virtuales" element={<ProgramasVirtuales />} />
            <Route path="/sectores" element={<Sectors />} />
            <Route path="/pausas-activas" element={<PausasActivas />} />
            {/* Fallback page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ScrollToTopButton />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

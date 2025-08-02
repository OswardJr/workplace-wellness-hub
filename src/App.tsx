import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import NotFound from "./pages/NotFound";
import BienestarEmocional from "./pages/services/BienestarEmocional";
import CertificacionPausasActivas from "./pages/services/CertificacionPausasActivas";
import EventosCorporativos from "./pages/services/EventosCorporativos";
import GimnasiaLaboral from "./pages/services/GimnasiaLaboral";
import ImplementacionBienestar from "./pages/services/ImplementacionBienestar";
import MasajesAntiestres from "./pages/services/MasajesAntiestres";
import PausasActivas from "./pages/services/PausasActivas";
import ProgramasVirtuales from "./pages/services/ProgramasVirtuales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegionLayout from "./components/layout/RegionLayout";
import { useAdaptiveMotion } from "./hooks/use-adaptive-motion";

// Dubai pages
import DubaiHome from "./pages/dubai/DubaiHome";
import DubaiAbout from "./pages/dubai/DubaiAbout";
import DubaiServices from "./pages/dubai/DubaiServices";
import DubaiTeam from "./pages/dubai/DubaiTeam";
import DubaiContact from "./pages/dubai/DubaiContact";
import DubaiInsights from "./pages/dubai/DubaiInsights";
import DubaiCareers from "./pages/dubai/DubaiCareers";

// India pages
import IndiaHome from "./pages/india/IndiaHome";
import IndiaAbout from "./pages/india/IndiaAbout";
import IndiaServices from "./pages/india/IndiaServices";
import IndiaTeam from "./pages/india/IndiaTeam";
import IndiaContact from "./pages/india/IndiaContact";
import IndiaInsights from "./pages/india/IndiaInsights";
import IndiaCareers from "./pages/india/IndiaCareers";

const queryClient = new QueryClient();

const App = () => {
  const forceReducedMotion = useAdaptiveMotion();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion={forceReducedMotion ? "always" : "user"}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Dubai */}
              <Route element={<RegionLayout region="dubai" />}>
                <Route path="/dubai" element={<DubaiHome />} />
                <Route path="/dubai/about" element={<DubaiAbout />} />
                <Route path="/dubai/services" element={<DubaiServices />} />
                <Route path="/dubai/team" element={<DubaiTeam />} />
                <Route path="/dubai/contact" element={<DubaiContact />} />
                <Route path="/dubai/insights" element={<DubaiInsights />} />
                <Route path="/dubai/careers" element={<DubaiCareers />} />
              </Route>

              {/* India */}
              <Route element={<RegionLayout region="india" />}>
                <Route path="/india" element={<IndiaHome />} />
                <Route path="/india/about" element={<IndiaAbout />} />
                <Route path="/india/services" element={<IndiaServices />} />
                <Route path="/india/team" element={<IndiaTeam />} />
                <Route path="/india/contact" element={<IndiaContact />} />
                <Route path="/india/insights" element={<IndiaInsights />} />
                <Route path="/india/careers" element={<IndiaCareers />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

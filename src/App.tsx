import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { useAdaptiveMotion } from "./hooks/use-adaptive-motion";

// Lazy loaded components for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegionLayout = lazy(() => import("./components/layout/RegionLayout"));

// India pages
const IndiaHome = lazy(() => import("./pages/india/IndiaHome"));
const IndiaAbout = lazy(() => import("./pages/india/IndiaAbout"));
const IndiaServices = lazy(() => import("./pages/india/IndiaServices"));
const IndiaTeam = lazy(() => import("./pages/india/IndiaTeam"));
const IndiaContact = lazy(() => import("./pages/india/IndiaContact"));
const IndiaInsights = lazy(() => import("./pages/india/IndiaInsights"));
const IndiaCareers = lazy(() => import("./pages/india/IndiaCareers"));

const queryClient = new QueryClient();

// A simple fallback for Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin"></div>
  </div>
);

const App = () => {
  const forceReducedMotion = useAdaptiveMotion();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion={forceReducedMotion ? "always" : "user"}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />

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
            </Suspense>
          </BrowserRouter>
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

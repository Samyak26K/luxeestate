import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollRestoration from "./components/navigation/ScrollRestoration";
import RouteTransition from "./components/layout/RouteTransition";
import Index from "./pages/marketing/Index";
import Properties from "./pages/property/Properties";
import PropertyDetails from "./pages/property/PropertyDetails";
import About from "./pages/marketing/About";
import Services from "./pages/marketing/Services";
import Contact from "./pages/marketing/Contact";
import PrivacyPolicy from "./pages/marketing/PrivacyPolicy";
import TermsOfService from "./pages/marketing/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Key on pathname so exit/enter timing stays consistent across route transitions. */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteTransition><Index /></RouteTransition>} />
        <Route path="/properties" element={<RouteTransition><Properties /></RouteTransition>} />
        <Route path="/properties/:id" element={<RouteTransition><PropertyDetails /></RouteTransition>} />
        <Route path="/about" element={<RouteTransition><About /></RouteTransition>} />
        <Route path="/services" element={<RouteTransition><Services /></RouteTransition>} />
        <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
        <Route path="/privacy-policy" element={<RouteTransition><PrivacyPolicy /></RouteTransition>} />
        <Route path="/terms-of-service" element={<RouteTransition><TermsOfService /></RouteTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<RouteTransition><NotFound /></RouteTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

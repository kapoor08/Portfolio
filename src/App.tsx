import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import * as ReactHelmetAsync from "react-helmet-async";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <ReactHelmetAsync.HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {typeof window !== "undefined" && <Sonner />}
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ReactHelmetAsync.HelmetProvider>
);

export default App;

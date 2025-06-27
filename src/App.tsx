import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={createBrowserRouter([
          {
            path: "/",
            element: <Index />,
          },
          {
            path: "/contato",
            element: <Contact />,
          },
          {
            path: "/ajuda",
            element: <FAQ />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ])} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

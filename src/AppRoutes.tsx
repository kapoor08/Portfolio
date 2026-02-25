import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Studio from "./pages/Studio";
import Toolkit from "./pages/Toolkit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/work" element={<Work />} />
    <Route path="/studio" element={<Studio />} />
    <Route path="/toolkit" element={<Toolkit />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

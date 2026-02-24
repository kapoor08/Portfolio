import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ScrollProgress />
    <Navbar />
    <main className="flex-1 pt-16 relative">
      <div className="vertical-guide" />
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

import {
  AboutSection,
  ContactSection,
  FeaturedProjectSection,
  FooterSection,
  HeroSection,
  LatestArticlesSection,
  MobileNavigation,
  Navigation,
  ScrollToTop,
  SkillsSection,
} from "./components";
import { useMobileMenu } from "./hooks/use-mobile-menu";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import { cn } from "./lib/utils";
import { useTheme } from "./provider/theme-provider";
import { menuOptions } from "@/data";

function App() {
  const { actualTheme } = useTheme();
  const { showScrollTop } = useScrollToTop({
    menuOptions,
  });
  const { mobileMenuOpen } = useMobileMenu();
  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        actualTheme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800"
      )}
    >
      <Navigation />
      {mobileMenuOpen && <MobileNavigation />}

      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <FeaturedProjectSection />
      <LatestArticlesSection />

      <ContactSection />
      <FooterSection />

      {showScrollTop && <ScrollToTop />}
    </div>
  );
}

export default App;

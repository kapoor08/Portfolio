import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { Monitor, Moon, Sun } from "lucide-react";
import { menuOptions } from "@/data";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { AppButton } from "@/shared/elements";

const Navigation = () => {
  const { actualTheme, theme, toggleTheme } = useTheme();
  const { activeSection } = useScrollToTop({ menuOptions });
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-colors duration-300",
        actualTheme === "dark"
          ? "bg-slate-800/80 backdrop-blur-md border-slate-700"
          : "bg-white/80 backdrop-blur-md border-slate-200"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            Lakshay Kapoor
          </div>

          <div className="hidden md:flex space-x-8">
            {menuOptions.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={cn(
                  "transition-colors duration-300 capitalize",
                  activeSection === section
                    ? actualTheme === "dark"
                      ? "text-white font-medium"
                      : "text-slate-900 font-medium"
                    : actualTheme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {section}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <AppButton
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(
                "rounded-full transition-colors duration-300 cursor-pointer",
                actualTheme === "dark"
                  ? "text-white bg-slate-700 hover:bg-slate-700"
                  : "text-slate-600 bg-slate-100 hover:bg-slate-200"
              )}
              title={`Switch to ${
                theme === "dark"
                  ? "system"
                  : theme === "light"
                  ? "dark"
                  : "light"
              } theme`}
              icon={
                theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : theme === "light" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Monitor className="h-5 w-5" />
                )
              }
            />

            <AppButton
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import { menuOptions } from "@/data";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";

const MobileNavigation = () => {
  const { actualTheme } = useTheme();
  const { setMobileMenuOpen } = useMobileMenu();

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 pt-16 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-900" : "bg-white"
      )}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {menuOptions.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={cn(
              "text-xl transition-colors duration-300 capitalize",
              actualTheme === "dark"
                ? "text-white hover:text-slate-300"
                : "text-slate-800 hover:text-slate-600"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {section}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;

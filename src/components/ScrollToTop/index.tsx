import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { ChevronUp } from "lucide-react";
import { menuOptions } from "@/data";
import { AppButton } from "@/shared/elements";

const ScrollToTop = () => {
  const { actualTheme } = useTheme();
  const { scrollToTop } = useScrollToTop({ menuOptions });

  return (
    <AppButton
      variant="ghost"
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50",
        actualTheme === "dark"
          ? "bg-slate-700 hover:bg-slate-600 text-white"
          : "bg-white hover:bg-slate-100 text-slate-800"
      )}
      onClick={scrollToTop}
      icon={<ChevronUp className="h-6 w-6" />}
    />
  );
};

export default ScrollToTop;

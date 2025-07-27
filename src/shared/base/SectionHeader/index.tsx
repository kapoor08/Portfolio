import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  titleClassName = "text-4xl font-bold mb-4",
  subtitleClassName = "text-lg transition-colors duration-300 mb-8 max-w-2xl mx-auto",
}: SectionHeaderProps) => {
  const { actualTheme } = useTheme();
  return (
    <div className="text-center mb-16">
      <h2
        className={cn(
          titleClassName,
          actualTheme === "dark" ? "text-white" : "text-slate-800"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          subtitleClassName,
          actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

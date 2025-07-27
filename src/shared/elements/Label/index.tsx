import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import RequiredFieldSymbol from "../RequiredFieldSymbol";

const Label = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  const { actualTheme } = useTheme();

  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium",
        actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
      )}
    >
      {label} <RequiredFieldSymbol />
    </label>
  );
};

export default Label;

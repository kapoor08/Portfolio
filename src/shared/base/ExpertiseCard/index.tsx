import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import React from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: {
    light: string;
    dark: string;
  };
}

const ExpertiseCard = ({
  title,
  description,
  icon,
  color,
}: ExpertiseCardProps) => {
  const { actualTheme } = useTheme();
  const iconColorClasses = actualTheme === "dark" ? color.dark : color.light;

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-lg transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-700" : "bg-slate-50"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
          iconColorClasses
        )}
      >
        {React.createElement(icon, { className: "h-6 w-6" })}
      </div>
      <div>
        <h4
          className={cn(
            "font-semibold transition-colors duration-300",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            "transition-colors duration-300",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default ExpertiseCard;

"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AppButtonProps = {
  variant?: "default" | "outline" | "link" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  theme?: "dark" | "light";
  iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton = ({
  variant = "default",
  size = "md",
  isLoading = false,
  disabled = false,
  icon,
  children,
  type = "button",
  className = "",
  theme = "light",
  iconPosition = "left",
  ...props
}: AppButtonProps) => {
  const baseStyles = cn(
    "transition-all duration-300 flex items-center justify-center gap-2",
    size === "sm" && "px-3 py-1 text-sm",
    size === "md" && "px-4 py-2 text-base",
    size === "lg" && "px-6 py-3 text-lg",
    variant === "outline"
      ? "border border-gray-300"
      : theme === "dark"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-slate-800 hover:bg-slate-700 text-white",
    disabled && "opacity-50 cursor-not-allowed",
    variant === "outline" &&
      theme === "dark" &&
      "border-slate-600 text-white hover:bg-slate-800",
    className
  );

  return (
    <Button
      type={type}
      variant={variant === "outline" ? "outline" : "default"}
      className={baseStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
          <span>Sending emails...</span>
        </div>
      ) : (
        <>
          {iconPosition === "left" && icon}
          {children}
          {iconPosition === "right" && icon}
        </>
      )}
    </Button>
  );
};

export default AppButton;

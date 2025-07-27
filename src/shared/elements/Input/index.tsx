import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import Label from "../Label";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";

interface InputProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
  getInputClasses: (hasError: boolean) => string;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  value?: string;
  showCharCount?: boolean;
  maxLength?: number;
}

const Input = ({
  register,
  error,
  getInputClasses,
  id,
  type,
  placeholder,
  label,
  value = "",
  showCharCount = false,
  maxLength,
}: InputProps) => {
  const { actualTheme } = useTheme();

  return (
    <div className="space-y-2">
      <Label label={label} htmlFor={id} />
      <input
        id={id}
        type={type}
        {...register}
        className={getInputClasses(!!error)}
        placeholder={placeholder}
      />
      <div className="flex justify-between items-center">
        {error && (
          <p className="text-red-500 text-sm">{error.message?.toString()}</p>
        )}
        {showCharCount && (
          <span
            className={cn(
              "text-xs",
              actualTheme === "dark" ? "text-slate-400" : "text-slate-500"
            )}
          >
            {value.length}
            {maxLength ? `/${maxLength}` : ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

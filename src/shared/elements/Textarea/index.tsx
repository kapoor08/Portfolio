import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import Label from "../Label";

interface TextareaProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
  getInputClasses: (hasError: boolean) => string;
  id: string;
  placeholder: string;
  label: string;
  value?: string;
  showCharCount?: boolean;
  maxLength?: number;
  rows?: number;
}

const Textarea = ({
  register,
  error,
  getInputClasses,
  id,
  placeholder,
  label,
  value = "",
  showCharCount = false,
  maxLength,
  rows = 5,
}: TextareaProps) => {
  const { actualTheme } = useTheme();

  return (
    <div className="space-y-2">
      <Label label={label} htmlFor={id} />
      <textarea
        id={id}
        rows={rows}
        {...register}
        className={getInputClasses(!!error)}
        placeholder={placeholder}
      />
      <div className="flex justify-between items-center">
        {error ? (
          <p className="text-red-500 text-sm">{error.message?.toString()}</p>
        ) : (
          <div></div>
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

export default Textarea;

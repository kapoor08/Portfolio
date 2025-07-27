import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { AppButton } from "@/shared/elements";
import { Github, Linkedin } from "lucide-react";

const IntroSection = () => {
  const { actualTheme } = useTheme();
  return (
    <div>
      <h3
        className={cn(
          "text-2xl font-semibold mb-4 transition-colors duration-300",
          actualTheme === "dark" ? "text-white" : "text-slate-800"
        )}
      >
        My Story
      </h3>
      <p
        className={cn(
          "mb-6 transition-colors duration-300",
          actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
        )}
      >
        Started my journey in web development during college and have been
        passionate about creating innovative solutions ever since. I specialize
        in modern web technologies and love turning complex problems into
        simple, beautiful designs.
      </p>
      <p
        className={cn(
          "mb-6 transition-colors duration-300",
          actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
        )}
      >
        When I'm not coding, you can find me exploring new technologies,
        contributing to open source projects, or enjoying a good cup of coffee
        while reading about the latest industry trends.
      </p>
      <div className="flex gap-4">
        <AppButton
          variant="outline"
          size="sm"
          className={cn(
            "transition-colors duration-300",
            actualTheme === "dark"
              ? "border-slate-600 text-white hover:bg-slate-700"
              : ""
          )}
          icon={<Github className="h-4 w-4" />}
        >
          GitHub
        </AppButton>
        <AppButton
          variant="outline"
          size="sm"
          className={cn(
            "transition-colors duration-300",
            actualTheme === "dark"
              ? "border-slate-600 text-white hover:bg-slate-700"
              : ""
          )}
          icon={<Linkedin className="h-4 w-4" />}
        >
          LinkedIn
        </AppButton>
      </div>
    </div>
  );
};

export default IntroSection;

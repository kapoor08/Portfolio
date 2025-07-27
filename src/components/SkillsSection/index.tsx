import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { skills } from "@/data";
import { SectionHeader } from "@/shared/base";
import { TabsSection } from "@/shared/elements";

const SkillsSection = () => {
  const { actualTheme } = useTheme();
  return (
    <section
      id="skills"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills & Technologies"
          titleClassName={cn(
            "text-4xl font-bold mb-4 transition-colors duration-300",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
          subtitle="Technologies I work with on a daily basis"
          subtitleClassName={cn(
            "text-lg transition-colors duration-300",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        />

        <TabsSection
          tabs={[
            { value: "all", label: "All" },
            { value: "frontend", label: "Frontend" },
            { value: "backend", label: "Backend" },
            { value: "other", label: "Other" },
          ]}
          data={skills}
          type="bars"
        />
      </div>
    </section>
  );
};

export default SkillsSection;

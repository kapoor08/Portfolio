import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { projects } from "@/data";
import { TabsSection } from "@/shared/elements";
import { SectionHeader } from "@/shared/base";

const FeaturedProjectSection = () => {
  const { actualTheme } = useTheme();
  return (
    <section
      id="projects"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-800" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          titleClassName={cn(
            "text-4xl font-bold mb-4 transition-colors duration-300",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
          subtitle="Some of my recent work that I'm proud of"
          subtitleClassName={cn(
            "text-lg transition-colors duration-300",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        />

        <TabsSection
          tabs={[
            { value: "all", label: "All Projects" },
            { value: "frontend", label: "Frontend" },
            { value: "fullstack", label: "Full Stack" },
            { value: "backend", label: "Backend" },
          ]}
          data={projects}
          type="cards"
        />
      </div>
    </section>
  );
};

export default FeaturedProjectSection;

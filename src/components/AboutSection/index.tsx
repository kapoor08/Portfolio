import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { skillsCards } from "@/data";
import { SectionHeader, ExpertiseCard, IntroSection } from "@/shared/base";

const AboutSection = () => {
  const { actualTheme } = useTheme();
  return (
    <section
      id="about"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-800" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          titleClassName={cn(
            "text-4xl font-bold mb-4 transition-colors duration-300",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
          subtitle="I'm a passionate developer with 2+ years of experience creating digital solutions that make a difference."
          subtitleClassName={cn(
            "text-lg max-w-2xl mx-auto transition-colors duration-300",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <IntroSection />

          <div className="space-y-6">
            {skillsCards.map((card, idx) => (
              <ExpertiseCard
                key={idx}
                title={card.title}
                icon={card.icon}
                description={card.description}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

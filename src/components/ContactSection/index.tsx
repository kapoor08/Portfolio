import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import ContactInfoSection from "@/shared/base/ContactInfoSection";
import { ContactForm } from "@/forms";
import { SectionHeader } from "@/shared/base";

const ContactSection = () => {
  const { actualTheme } = useTheme();

  return (
    <section
      id="contact"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-800" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Let's Work Together"
          titleClassName={cn(
            "text-4xl font-bold mb-4",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
          subtitle="Have a project in mind? I'd love to hear about it. Let's chat and see how we can bring your ideas to life."
          subtitleClassName={cn(
            "text-lg transition-colors duration-300 mb-8 max-w-2xl mx-auto",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={cn(
              "p-8 rounded-lg transition-colors duration-300",
              actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50 shadow-lg"
            )}
          >
            <h3
              className={cn(
                "text-2xl font-semibold mb-6",
                actualTheme === "dark" ? "text-white" : "text-slate-700"
              )}
            >
              Get in Touch
            </h3>
            <ContactForm />
          </div>

          <ContactInfoSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

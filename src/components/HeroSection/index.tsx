import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { ArrowDown, Download, Mail } from "lucide-react";
import { AppButton } from "@/shared/elements";
import { socialLinks } from "@/data";

const HeroSection = () => {
  const { actualTheme } = useTheme();
  return (
    <section
      id="home"
      className={cn(
        "pt-28 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-900" : ""
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-16">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden group">
              <span className="relative z-10">LK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          <h1
            className={cn(
              "text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            <span className="inline-block animate-fadeIn">Lakshay Kapoor</span>
          </h1>
          <p
            className={cn(
              "text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            <span className="inline-block animate-fadeIn animation-delay-200">
              Full Stack Developer & UI/UX Designer passionate about creating
              beautiful, functional web experiences
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
            <AppButton
              size="lg"
              className={cn(
                "transition-all duration-300 text-white hover:cursor-pointer text-sm",
                actualTheme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-slate-800 hover:bg-slate-700"
              )}
              icon={<Download className="mr-2 h-4 w-4" />}
            >
              Download Resume
            </AppButton>
            <AppButton
              variant="outline"
              size="lg"
              className={cn(
                "transition-all duration-300 hover:cursor-pointer text-sm",
                actualTheme === "dark"
                  ? "border-slate-600 text-white hover:bg-slate-800"
                  : ""
              )}
              icon={<Mail className="mr-2 h-4 w-4" />}
            >
              Get In Touch
            </AppButton>
          </div>

          <div className="mt-12 flex justify-center space-x-4 animate-fadeIn animation-delay-600">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md",
                  actualTheme === "dark"
                    ? "bg-slate-800 text-white hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                )}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a
              href="#about"
              className={cn(
                "flex flex-col items-center transition-colors duration-300",
                actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
              )}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { cn } from "@/lib/utils";
import { Code, Github, Linkedin, Palette, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/provider/theme-provider";

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
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            About Me
          </h2>
          <p
            className={cn(
              "text-lg max-w-2xl mx-auto transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            I'm a passionate developer with 2+ years of experience creating
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              passionate about creating innovative solutions ever since. I
              specialize in modern web technologies and love turning complex
              problems into simple, beautiful designs.
            </p>
            <p
              className={cn(
                "mb-6 transition-colors duration-300",
                actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
              )}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while reading about the latest industry trends.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "transition-colors duration-300",
                  actualTheme === "dark"
                    ? "border-slate-600 text-white hover:bg-slate-700"
                    : ""
                )}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "transition-colors duration-300",
                  actualTheme === "dark"
                    ? "border-slate-600 text-white hover:bg-slate-700"
                    : ""
                )}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg transition-colors duration-300",
                actualTheme === "dark" ? "bg-slate-700" : "bg-slate-50"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                  actualTheme === "dark"
                    ? "bg-slate-600 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                )}
              >
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h4
                  className={cn(
                    "font-semibold transition-colors duration-300",
                    actualTheme === "dark" ? "text-white" : "text-slate-800"
                  )}
                >
                  Frontend Development
                </h4>
                <p
                  className={cn(
                    "transition-colors duration-300",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>

            <div
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg transition-colors duration-300",
                actualTheme === "dark" ? "bg-slate-700" : "bg-slate-50"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                  actualTheme === "dark"
                    ? "bg-slate-600 text-green-400"
                    : "bg-green-100 text-green-600"
                )}
              >
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h4
                  className={cn(
                    "font-semibold transition-colors duration-300",
                    actualTheme === "dark" ? "text-white" : "text-slate-800"
                  )}
                >
                  Backend Development
                </h4>
                <p
                  className={cn(
                    "transition-colors duration-300",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  Node.js, PostgreSQL, MongoDB, REST APIs
                </p>
              </div>
            </div>

            <div
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg transition-colors duration-300",
                actualTheme === "dark" ? "bg-slate-700" : "bg-slate-50"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                  actualTheme === "dark"
                    ? "bg-slate-600 text-purple-400"
                    : "bg-purple-100 text-purple-600"
                )}
              >
                <Palette className="h-6 w-6" />
              </div>
              <div>
                <h4
                  className={cn(
                    "font-semibold transition-colors duration-300",
                    actualTheme === "dark" ? "text-white" : "text-slate-800"
                  )}
                >
                  UI/UX Design
                </h4>
                <p
                  className={cn(
                    "transition-colors duration-300",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  Figma, Adobe XD, Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

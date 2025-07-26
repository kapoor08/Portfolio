import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { skills } from "@/data";

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
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            Skills & Technologies
          </h2>
          <p
            className={cn(
              "text-lg transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            Technologies I work with on a daily basis
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList
              className={cn(
                "transition-colors duration-300",
                actualTheme === "dark" ? "bg-slate-800" : "bg-slate-200"
              )}
            >
              <TabsTrigger
                value="all"
                className={cn(
                  "rounded-md px-4 py-2",
                  actualTheme === "dark"
                    ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                    : "data-[state=active]:bg-white data-[state=active]:text-black "
                )}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className={cn(
                  "rounded-md px-4 py-2",
                  actualTheme === "dark"
                    ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                    : "data-[state=active]:bg-white data-[state=active]:text-black "
                )}
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className={cn(
                  "rounded-md px-4 py-2",
                  actualTheme === "dark"
                    ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                    : "data-[state=active]:bg-white data-[state=active]:text-black "
                )}
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className={cn(
                  "rounded-md px-4 py-2",
                  actualTheme === "dark"
                    ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                    : "data-[state=active]:bg-white data-[state=active]:text-black "
                )}
              >
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      className={cn(
                        "font-medium transition-colors duration-300",
                        actualTheme === "dark" ? "text-white" : "text-slate-800"
                      )}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={cn(
                        "transition-colors duration-300",
                        actualTheme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                      )}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={cn(
                      "w-full rounded-full h-2 transition-colors duration-300",
                      actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
                    )}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={cn(
                          "font-medium transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-white"
                            : "text-slate-800"
                        )}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-slate-400"
                            : "text-slate-600"
                        )}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={cn(
                        "w-full rounded-full h-2 transition-colors duration-300",
                        actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
                      )}
                    >
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills
                .filter(
                  (skill) =>
                    skill.category === "backend" ||
                    skill.category === "database"
                )
                .map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={cn(
                          "font-medium transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-white"
                            : "text-slate-800"
                        )}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-slate-400"
                            : "text-slate-600"
                        )}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={cn(
                        "w-full rounded-full h-2 transition-colors duration-300",
                        actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
                      )}
                    >
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills
                .filter(
                  (skill) =>
                    skill.category === "language" || skill.category === "devops"
                )
                .map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={cn(
                          "font-medium transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-white"
                            : "text-slate-800"
                        )}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          actualTheme === "dark"
                            ? "text-slate-400"
                            : "text-slate-600"
                        )}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={cn(
                        "w-full rounded-full h-2 transition-colors duration-300",
                        actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
                      )}
                    >
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;

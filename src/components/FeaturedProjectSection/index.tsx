import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTheme } from "@/provider/theme-provider";
import { projects } from "@/data";

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
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            Featured Projects
          </h2>
          <p
            className={cn(
              "text-lg transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            Some of my recent work that I'm proud of
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList
              className={cn(
                "transition-colors duration-300",
                actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
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
                All Projects
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
                value="fullstack"
                className={cn(
                  "rounded-md px-4 py-2",
                  actualTheme === "dark"
                    ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                    : "data-[state=active]:bg-white data-[state=active]:text-black "
                )}
              >
                Full Stack
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
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={cn(
                    "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden",
                    actualTheme === "dark"
                      ? "bg-slate-700 border-slate-600"
                      : "bg-white"
                  )}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image ?? "https://picsum.photos/800/600"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle
                      className={cn(
                        "text-xl transition-colors duration-300",
                        actualTheme === "dark" ? "text-white" : "text-slate-800"
                      )}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        "transition-colors duration-300",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-600"
                      )}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant={
                            actualTheme === "dark" ? "outline" : "secondary"
                          }
                          className={cn(
                            "text-xs",
                            actualTheme === "dark"
                              ? "border-slate-500 text-slate-300"
                              : ""
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className={cn(
                          "flex-1 cursor-pointer",
                          actualTheme === "dark"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : ""
                        )}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["frontend", "fullstack", "backend"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className={cn(
                        "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden",
                        actualTheme === "dark"
                          ? "bg-slate-700 border-slate-600"
                          : "bg-white"
                      )}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "https://picsum.photos/800/600"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <CardHeader>
                        <CardTitle
                          className={cn(
                            "text-xl transition-colors duration-300",
                            actualTheme === "dark"
                              ? "text-white"
                              : "text-slate-800"
                          )}
                        >
                          {project.title}
                        </CardTitle>
                        <CardDescription
                          className={cn(
                            "transition-colors duration-300",
                            actualTheme === "dark"
                              ? "text-slate-300"
                              : "text-slate-600"
                          )}
                        >
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant={
                                actualTheme === "dark" ? "outline" : "secondary"
                              }
                              className={cn(
                                "text-xs",
                                actualTheme === "dark"
                                  ? "border-slate-500 text-slate-300"
                                  : ""
                              )}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant={
                              actualTheme === "dark" ? "secondary" : "outline"
                            }
                            size="sm"
                            className="flex-1"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className={cn(
                              "flex-1",
                              actualTheme === "dark"
                                ? "bg-blue-600 hover:bg-blue-700"
                                : ""
                            )}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;

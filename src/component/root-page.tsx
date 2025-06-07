"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone,
  Moon,
  Sun,
  ChevronUp,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";

function PortfolioContent() {
  const { theme, toggleTheme, actualTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "testimonials",
        "blog",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = () => {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "https://picsum.photos/800/600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      category: "fullstack",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image: "https://picsum.photos/800/600",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      category: "fullstack",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts",
      image: "https://picsum.photos/800/600",
      technologies: ["React", "Tailwind CSS", "OpenWeather API"],
      github: "#",
      live: "#",
      category: "frontend",
      featured: true,
    },
    {
      title: "Personal Blog Platform",
      description: "A markdown-based blog platform with custom CMS",
      image: "https://picsum.photos/800/600",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      github: "#",
      live: "#",
      category: "frontend",
      featured: false,
    },
    {
      title: "API Gateway Service",
      description:
        "A microservice gateway for managing API requests and authentication",
      image: "https://picsum.photos/800/600",
      technologies: ["Node.js", "Express", "JWT", "Redis"],
      github: "#",
      live: "#",
      category: "backend",
      featured: false,
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts and graphs for business analytics",
      image: "https://picsum.photos/800/600",
      technologies: ["React", "D3.js", "GraphQL"],
      github: "#",
      live: "#",
      category: "frontend",
      featured: false,
    },
  ];

  const skills = [
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 88, category: "frontend" },
    { name: "Angular 19", level: 60, category: "frontend" },
    { name: "React Native", level: 50, category: "frontend" },
    { name: "Tailwind CSS", level: 92, category: "frontend" },
    { name: "Styled Components", level: 92, category: "frontend" },
    { name: "Node.js", level: 82, category: "backend" },
    { name: "MongoDB", level: 62, category: "backend" },
    { name: "Prisma", level: 75, category: "backend" },
    { name: "Supabase", level: 80, category: "backend" },
    { name: "PostgreSQL", level: 78, category: "database" },
    { name: "Github Workflows", level: 80, category: "devops" },
    { name: "TypeScript", level: 85, category: "language" },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for creating maintainable and scalable React applications with modern tools and techniques.",
      date: "June 15, 2024",
      image: "https://picsum.photos/800/600",
      url: "#",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development in the next decade.",
      date: "May 28, 2024",
      image: "https://picsum.photos/800/600",
      url: "#",
    },
    {
      title: "Optimizing Performance in Next.js",
      excerpt:
        "Practical tips and techniques to improve the performance of your Next.js applications for better user experience.",
      date: "April 10, 2024",
      image: "https://picsum.photos/800/600",
      url: "#",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        actualTheme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800"
      )}
    >
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 border-b transition-colors duration-300",
          actualTheme === "dark"
            ? "bg-slate-800/80 backdrop-blur-md border-slate-700"
            : "bg-white/80 backdrop-blur-md border-slate-200"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className={cn(
                "text-2xl font-bold transition-colors duration-300",
                actualTheme === "dark" ? "text-white" : "text-slate-800"
              )}
            >
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "blog", "contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={cn(
                      "transition-colors duration-300 capitalize",
                      activeSection === section
                        ? actualTheme === "dark"
                          ? "text-white font-medium"
                          : "text-slate-900 font-medium"
                        : actualTheme === "dark"
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {section}
                  </a>
                )
              )}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={cn(
                  "rounded-full transition-colors",
                  actualTheme === "dark"
                    ? "text-white hover:text-white hover:bg-slate-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                )}
                title={`Switch to ${
                  theme === "dark"
                    ? "system"
                    : theme === "light"
                    ? "dark"
                    : "light"
                } theme`}
              >
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : theme === "light" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Monitor className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 z-40 pt-16 transition-colors duration-300",
            actualTheme === "dark" ? "bg-slate-900" : "bg-white"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {["home", "about", "skills", "projects", "blog", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={cn(
                    "text-xl transition-colors duration-300 capitalize",
                    actualTheme === "dark"
                      ? "text-white hover:text-slate-300"
                      : "text-slate-800 hover:text-slate-600"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section}
                </a>
              )
            )}
          </div>
        </div>
      )}

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
              <span className="inline-block animate-fadeIn">
                Lakshay Kapoor
              </span>
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
              <Button
                size="lg"
                className={cn(
                  "transition-all duration-300 text-white hover:cursor-pointer",
                  actualTheme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-800 hover:bg-slate-700"
                )}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "transition-all duration-300 hover:cursor-pointer",
                  actualTheme === "dark"
                    ? "border-slate-600 text-white hover:bg-slate-800"
                    : ""
                )}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            <div className="mt-12 flex justify-center space-x-4 animate-fadeIn animation-delay-600">
              <a
                href="#"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md",
                  actualTheme === "dark"
                    ? "bg-slate-800 text-white hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                )}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md",
                  actualTheme === "dark"
                    ? "bg-slate-800 text-white hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                )}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md",
                  actualTheme === "dark"
                    ? "bg-slate-800 text-white hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                )}
              >
                <Mail className="h-5 w-5" />
              </a>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

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
                Started my journey in web development during college and have
                been passionate about creating innovative solutions ever since.
                I specialize in modern web technologies and love turning complex
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
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
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
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
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
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
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
                          actualTheme === "dark"
                            ? "bg-slate-700"
                            : "bg-slate-200"
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
                          actualTheme === "dark"
                            ? "bg-slate-700"
                            : "bg-slate-200"
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
                      skill.category === "language" ||
                      skill.category === "devops"
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
                          actualTheme === "dark"
                            ? "bg-slate-700"
                            : "bg-slate-200"
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
                            src={
                              project.image || "https://picsum.photos/800/600"
                            }
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
                                  actualTheme === "dark"
                                    ? "outline"
                                    : "secondary"
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

      <section
        id="blog"
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
              Latest Articles
            </h2>
            <p
              className={cn(
                "text-lg transition-colors duration-300",
                actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
              )}
            >
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                    src={post.image || "https://picsum.photos/800/600"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <div
                    className={cn(
                      "text-sm mb-2 transition-colors duration-300",
                      actualTheme === "dark"
                        ? "text-slate-400"
                        : "text-slate-500"
                    )}
                  >
                    {post.date}
                  </div>
                  <CardTitle
                    className={cn(
                      "text-xl transition-colors duration-300",
                      actualTheme === "dark" ? "text-white" : "text-slate-800"
                    )}
                  >
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={cn(
                      "mb-4 transition-colors duration-300",
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
                    )}
                  >
                    {post.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className={cn(
                      "p-0 h-auto transition-colors duration-300 cursor-pointer",
                      actualTheme === "dark"
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    )}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
          actualTheme === "dark" ? "bg-slate-800" : "bg-white"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-4xl font-bold mb-4",
                actualTheme === "dark" ? "text-white" : "text-slate-800"
              )}
            >
              Let's Work Together
            </h2>
            {/* <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"> */}
            <p
              className={cn(
                "text-lg transition-colors duration-300 mb-8 max-w-2xl mx-auto",
                actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
              )}
            >
              Have a project in mind? I'd love to hear about it. Let's chat and
              see how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={cn(
                "p-8 rounded-lg transition-colors duration-300",
                actualTheme === "dark"
                  ? "bg-slate-900"
                  : "bg-slate-50 shadow-lg"
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
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={cn(
                        "text-sm font-medium",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-700"
                      )}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={cn(
                        "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                        actualTheme === "dark"
                          ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                          : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={cn(
                        "text-sm font-medium",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-700"
                      )}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={cn(
                        "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                        actualTheme === "dark"
                          ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                          : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className={cn(
                      "text-sm font-medium",
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-700"
                    )}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                      actualTheme === "dark"
                        ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={cn(
                      "text-sm font-medium",
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-700"
                    )}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                      actualTheme === "dark"
                        ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                    )}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className={cn(
                    "w-full bg-blue-600 hover:bg-blue-700",
                    actualTheme === "dark" ? "text-slate-900" : "text-slate-50"
                  )}
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3
                  className={cn(
                    "text-2xl font-semibold mb-6",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                        actualTheme === "dark"
                          ? "bg-slate-900"
                          : "bg-slate-100 shadow-md"
                      )}
                    >
                      <Mail
                        className={cn(
                          "h-5 w-5",
                          actualTheme === "dark"
                            ? "text-blue-400"
                            : "text-slate-600"
                        )}
                      />
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "text-lg font-medium",
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-600"
                        )}
                      >
                        Email
                      </h4>
                      <p
                        className={cn(
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-500"
                        )}
                      >
                        lakshaykapoor08@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                        actualTheme === "dark"
                          ? "bg-slate-900"
                          : "bg-slate-100 shadow-md"
                      )}
                    >
                      <Linkedin
                        className={cn(
                          "h-5 w-5",
                          actualTheme === "dark"
                            ? "text-blue-400"
                            : "text-slate-600"
                        )}
                      />
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "text-lg font-medium",
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-600"
                        )}
                      >
                        LinkedIn
                      </h4>
                      <p
                        className={cn(
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-500"
                        )}
                      >
                        linkedin.com/in/lakshaykapoor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                        actualTheme === "dark"
                          ? "bg-slate-900"
                          : "bg-slate-100 shadow-md"
                      )}
                    >
                      <Github
                        className={cn(
                          "h-5 w-5",
                          actualTheme === "dark"
                            ? "text-blue-400"
                            : "text-slate-600"
                        )}
                      />
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "text-lg font-medium",
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-600"
                        )}
                      >
                        GitHub
                      </h4>
                      <p
                        className={cn(
                          actualTheme === "dark"
                            ? "text-slate-300"
                            : "text-slate-500"
                        )}
                      >
                        github.com/kapoor08
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "mt-8 p-6 rounded-lg transition-colors duration-300 shadow-lg",
                  actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50"
                )}
              >
                <h4
                  className={cn(
                    "text-lg font-medium mb-2",
                    actualTheme === "dark" ? "text-slate-50" : "text-slate-800"
                  )}
                >
                  Availability
                </h4>
                <p
                  className={cn(
                    "mb-4",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                >
                  I'm currently available for freelance work and full-time
                  positions.
                </p>
                <Button
                  className={cn(
                    "w-full bg-blue-600 hover:bg-blue-700",
                    actualTheme === "dark" ? "text-slate-800" : "text-slate-50"
                  )}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={cn(
          "py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
          actualTheme === "dark" ? "bg-slate-900" : "bg-slate-900"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 Lakshay Kapoor. Built with React and Tailwind CSS.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50",
            actualTheme === "dark"
              ? "bg-slate-700 hover:bg-slate-600 text-white"
              : "bg-white hover:bg-slate-100 text-slate-800"
          )}
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default PortfolioContent;

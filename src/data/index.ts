import { Code, Github, Linkedin, Mail, Palette, Server } from "lucide-react";

const menuOptions = ["home", "about", "skills", "projects", "blog", "contact"];

const socialLinks = [
  { name: "GitHub", url: "", icon: Github },
  { name: "LinkedIn", url: "", icon: Linkedin },
  { name: "Email", url: "mailto:lakshahykapoor08@gmail.com", icon: Mail },
];

const skillsCards = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: {
      light: "bg-blue-100 text-blue-600",
      dark: "bg-slate-600 text-blue-400",
    },
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Node.js, PostgreSQL, MongoDB, REST APIs",
    color: {
      light: "bg-green-100 text-green-600",
      dark: "bg-slate-600 text-green-400",
    },
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Figma, Adobe XD, Responsive Design",
    color: {
      light: "bg-purple-100 text-purple-600",
      dark: "bg-slate-600 text-purple-400",
    },
  },
];

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
    description: "A responsive weather dashboard with location-based forecasts",
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

export { menuOptions, socialLinks, skillsCards, projects, skills };

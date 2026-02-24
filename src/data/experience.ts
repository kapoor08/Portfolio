import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "TechCorp",
    role: "Senior Full Stack Engineer",
    duration: "2022 — Present",
    bullets: [
      "Reduced API latency by **40%** through query optimization and caching layers",
      "Designed microservice architecture serving **1M+ daily active users**",
      "Implemented CI/CD pipelines reducing deployment time by **65%**",
    ],
  },
  {
    company: "ScaleUp Inc.",
    role: "Full Stack Engineer",
    duration: "2020 — 2022",
    bullets: [
      "Migrated legacy monolith to scalable microservices infrastructure",
      "Built real-time notification system handling **500K+ events** daily",
      "Reduced infrastructure costs by **35%** through resource optimization",
    ],
  },
  {
    company: "StartupLab",
    role: "Software Engineer",
    duration: "2018 — 2020",
    bullets: [
      "Developed core product features from zero to **50K users**",
      "Designed and implemented RESTful APIs consumed by web and mobile clients",
      "Established testing practices achieving **85% code coverage**",
    ],
  },
];

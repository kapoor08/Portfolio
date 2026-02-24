import type { ProcessStep } from "@/types";

export const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery & System Design",
    desc: "Understanding business requirements, defining system boundaries, and mapping data flows.",
  },
  {
    num: "02",
    title: "Architecture & Planning",
    desc: "Designing scalable architecture, selecting the right tools, and creating implementation roadmaps.",
  },
  {
    num: "03",
    title: "Implementation & Optimization",
    desc: "Writing clean, tested code with performance profiling and iterative refinement.",
  },
  {
    num: "04",
    title: "Deployment & Scaling",
    desc: "CI/CD pipelines, monitoring, and infrastructure automation for reliable delivery.",
  },
];

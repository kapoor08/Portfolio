import type { ToolCategory } from "@/types";

export const categories: ToolCategory[] = [
  {
    label: "Frontend",
    note: "Modern React-based frontend systems built for performance and scale.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    note: "Robust server-side architectures with clean, well-documented APIs.",
    tools: ["Node.js", "FastAPI", "Express", "GraphQL", "tRPC"],
  },
  {
    label: "Data",
    note: "Reliable data layers optimized for throughput and consistency.",
    tools: ["PostgreSQL", "Redis", "ClickHouse", "MongoDB", "Prisma"],
  },
  {
    label: "Infrastructure",
    note: "Automated pipelines and cloud-native deployment infrastructure.",
    tools: ["AWS", "Docker", "Terraform", "GitHub Actions", "Vercel"],
  },
];

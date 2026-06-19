import type { ToolCategory } from "@/types";

export const categories: ToolCategory[] = [
  {
    label: "Frontend",
    note: "Product interfaces built with typed component architectures and responsive UI systems.",
    tools: ["React", "Next.js", "Angular 19", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    note: "APIs, data models, migrations, and service layers for production applications.",
    tools: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Auth, Payments & SaaS",
    note: "Secure account flows, subscriptions, billing, and permission-driven product features.",
    tools: ["Auth.js", "Better Auth", "Clerk", "Stripe", "Razorpay"],
  },
  {
    label: "Cloud & Real-Time",
    note: "Deployment, live updates, notifications, and infrastructure needed to keep products running.",
    tools: ["AWS", "Vercel", "GitHub Actions", "Socket.IO", "Redis"],
  },
  {
    label: "AI & Automation",
    note: "Practical AI features that connect LLMs with product workflows, data, and review loops.",
    tools: ["LangChain", "LangGraph", "RAG", "Pinecone", "ChromaDB"],
  },
  {
    label: "Quality & Observability",
    note: "Testing, monitoring, analytics, and feedback loops that make releases safer.",
    tools: ["Vitest", "Jest", "Playwright", "Sentry", "PostHog"],
  },
];

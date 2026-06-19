import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Full Stack Product Engineering",
    role: "Full Stack Developer",
    duration: "3+ years",
    bullets: [
      "Built production web applications across **React, Next.js, Angular, TypeScript, Node.js, Express, FastAPI, PostgreSQL, MongoDB, and Supabase**",
      "Worked across product surfaces including dashboards, CRMs, booking systems, admin panels, partner portals, healthcare flows, and SaaS platforms",
      "Delivered end-to-end features covering frontend architecture, backend APIs, authentication, payments, emails, deployment, and QA",
    ],
  },
  {
    company: "Cross-Platform & Real-Time Systems",
    role: "Web, Mobile, Desktop & PWA Development",
    duration: "Product engagements",
    bullets: [
      "Built responsive web and mobile-ready interfaces with **Capacitor, PWA patterns, push notifications, offline support, and device-aware layouts**",
      "Implemented real-time product behavior using **Socket.IO, Server-Sent Events, VAPID push, live booking metrics, and notification fallbacks**",
      "Worked on Electron and embeddable widget experiences where isolation, packaging, and small-screen interaction details mattered",
    ],
  },
  {
    company: "AI, Automation & Internal Tools",
    role: "AI-Enabled Full Stack Developer",
    duration: "Recent work",
    bullets: [
      "Built AI-assisted workflows with **LangChain, LangGraph, RAG, vector databases, prompt design, and tool-based agent patterns**",
      "Created internal tools that turn repository knowledge, Databricks queries, validation checks, and report generation into guided user workflows",
      "Focused on practical AI integrations with human review, SQL safety, source grounding, and operational usefulness instead of one-off demos",
    ],
  },
];

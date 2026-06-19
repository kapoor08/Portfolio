import type { Project } from "@/types";

export const projects: Project[] = [
  {
    num: "01",
    title: "ConnexioCloud",
    description:
      "UCaaS and customer engagement platform work across dashboards, embedded communication widgets, support tooling, and video calling.",
    overview:
      "Unified communications platform combining customer engagement, workforce tools, embedded calling, and support automation.",
    impact: "Embedded webphone - AI help chat - video calling",
    role: "Full Stack Developer",
    duration: "Product engagement",
    problem:
      "Admins, agents, and external partners needed faster access to daily workflows, better self-serve support, and communication tools that could work both inside and outside the main platform.",
    solution:
      "Built customizable dashboards with drag-and-drop widgets and quick links, integrated AI-powered help chat and contextual Intercom triggers, shipped an isolated embeddable webphone, and helped extend the telephony widget with bidirectional video calling.",
    results: [
      "Personalized admin and agent dashboards",
      "Lower support friction through in-app AI assistance",
      "Embeddable communication widget for external sites and CRMs",
      "Video calling support inside a compact telephony widget",
    ],
    stack: ["React", "TypeScript", "Socket.IO", "AI Integration", "Intercom"],
  },
  {
    num: "02",
    title: "TheList",
    description:
      "Lifestyle reservation platform for restaurants, beach venues, nightclubs, and partner operations across premium destinations.",
    overview:
      "Reservation and venue-management platform with interactive floorplans, CRM workflows, booking metrics, and direct booking flows.",
    impact: "Floorplans - CRM - real-time booking metrics",
    role: "Full Stack Developer",
    duration: "Product engagement",
    problem:
      "Venue teams needed accurate seating control, responsive reservation management, and a smoother customer-facing booking flow across desktop and mobile contexts.",
    solution:
      "Developed visual floorplan tooling with zone and seat configuration, built responsive CRM reservation views, added daily booking and guest metrics, optimized the direct booking flow for single-option scenarios, and supported rotated seat rendering for real-world layouts.",
    results: [
      "Interactive venue floorplan setup",
      "Dedicated mobile and desktop CRM reservation experiences",
      "Live booking and guest status summaries",
      "Reduced friction in customer booking flows",
    ],
    stack: ["React", "TypeScript", "Responsive UI", "Payments", "Real-Time Data"],
  },
  {
    num: "03",
    title: "Invent Health AI Tools",
    description:
      "AI-assisted internal tooling for healthcare data teams working with Databricks pipelines, reports, validation, and mapping workflows.",
    overview:
      "Agentic tools that help engineers and analysts query code/data knowledge, validate migrations, generate reports, and automate file mapping.",
    impact: "RAG - Databricks - validation automation",
    role: "Full Stack & AI Developer",
    duration: "Internal tooling",
    problem:
      "Healthcare data workflows depended on repository knowledge, SQL expertise, manual migration checks, and repeated configuration work spread across multiple codebases and Databricks tables.",
    solution:
      "Built natural-language tooling backed by repository ingestion, RAG, SQL safety checks, tool registries, validation engines, report generation, and editable AI-assisted mapping flows for client file onboarding.",
    results: [
      "Self-serve codebase and data Q&A",
      "Automated Prod vs UAT validation support",
      "Excel report generation from natural-language requests",
      "Faster file mapping with human review before writes",
    ],
    stack: ["FastAPI", "LangChain", "LangGraph", "Databricks", "ChromaDB"],
  },
  {
    num: "04",
    title: "PropFirm Genie",
    description:
      "Prop trading operations platform features for reward marketplaces, credential handling, email templates, and CMS-driven content.",
    overview:
      "Admin-heavy product modules for purchases, reward inventory, credential assignment, transactional emails, and editable marketing content.",
    impact: "RBAC - credential pools - CMS workflows",
    role: "Full Stack Developer",
    duration: "Product engagement",
    problem:
      "Admins needed controlled ways to manage rewards, inventory, purchases, credentials, transactional email templates, and public-site content without relying on engineering for every update.",
    solution:
      "Implemented reward purchase flows, credential pool management, inventory tracking, admin activity visibility, a dynamic email template system, global email settings, and CMS controls for navigation, footer, and deal sections.",
    results: [
      "Role-gated admin workflows",
      "Automated credential assignment rules",
      "Reusable transactional email templates",
      "CMS-managed public content sections",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "RBAC", "Email Services"],
  },
  {
    num: "05",
    title: "NavioMD",
    description:
      "Telehealth platform work across guided medical intake, eligibility screening, subscriptions, virtual visits, and patient dashboards.",
    overview:
      "Patient-facing healthcare experience combining CMS-managed questionnaires, subscription billing, provider visits, and treatment routing.",
    impact: "Medical intake - Stripe - virtual visits",
    role: "Full Stack Developer",
    duration: "Product engagement",
    problem:
      "The patient journey needed to collect sensitive medical context, enforce disqualification rules, route users to the right treatment path, and support both subscription and one-off consultation flows.",
    solution:
      "Built multi-step questionnaire logic, integrated CMS-managed questions and product routing, handled subscription and paid visit paths through Stripe, and connected virtual consultation flows with the Qualify API.",
    results: [
      "Guided medical questionnaire experience",
      "Rules-based eligibility screening",
      "Subscription and one-off visit payment paths",
      "Patient dashboard and consultation access flows",
    ],
    stack: ["Next.js", "Stripe", "Sanity CMS", "API Integration", "Auth"],
  },
  {
    num: "06",
    title: "ClientFlow",
    description:
      "Production-grade multi-tenant SaaS platform with tenant isolation, billing, notifications, client portals, and operational tooling.",
    overview:
      "Full-stack SaaS system designed around organizations, projects, tasks, invoices, notifications, audit logs, and secure client collaboration.",
    impact: "Multi-tenant SaaS - billing - observability",
    role: "Full Stack Developer",
    duration: "Product build",
    problem:
      "The product needed to go beyond a demo and behave like a real SaaS platform, with strict tenant boundaries, subscription monetization, secure access, notifications, and operational readiness.",
    solution:
      "Built tenant-scoped data models and service flows, RBAC, API keys, billing and invoices, webhooks, SSE notifications, command palette search, audit logs, status page infrastructure, CI gates, and production-readiness documentation.",
    results: [
      "Tenant-scoped architecture with defense-in-depth checks",
      "Subscription, invoice, and webhook foundations",
      "Real-time notifications with polling fallback",
      "CI, testing, accessibility, and performance checks",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle", "Redis", "Stripe"],
  },
];

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    num: "01",
    title: "Distributed Payment Gateway",
    description:
      "End-to-end payment processing system handling 50K+ daily transactions with sub-200ms latency.",
    overview:
      "End-to-end payment processing system designed for high throughput and reliability.",
    impact: "99.97% uptime · 40% latency reduction",
    role: "Lead Engineer",
    duration: "6 months",
    problem:
      "Legacy payment system couldn't handle growing transaction volume, causing timeouts and failed payments during peak hours.",
    solution:
      "Designed a distributed architecture with event sourcing, implementing idempotent payment processing with automatic retry mechanisms and circuit breakers.",
    results: [
      "99.97% uptime",
      "40% latency reduction",
      "50K+ daily transactions",
      "Zero double-charge incidents",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda", "SQS"],
  },
  {
    num: "02",
    title: "Real-Time Analytics Platform",
    description:
      "Event-driven analytics dashboard processing millions of data points with live streaming updates.",
    overview:
      "Event-driven analytics dashboard with live streaming and complex aggregations.",
    impact: "3M+ events/day · Real-time processing",
    role: "Full Stack Engineer",
    duration: "4 months",
    problem:
      "Business teams lacked real-time visibility into user behavior, relying on delayed batch reports that were 24 hours behind.",
    solution:
      "Built a streaming pipeline with Kafka for event ingestion, ClickHouse for real-time OLAP queries, and a React dashboard with WebSocket-powered live updates.",
    results: [
      "3M+ events processed daily",
      "Sub-second query response",
      "Real-time dashboards",
      "80% faster decision-making",
    ],
    stack: ["React", "FastAPI", "ClickHouse", "Kafka", "WebSocket"],
  },
  {
    num: "03",
    title: "Multi-Tenant SaaS Platform",
    description:
      "Scalable multi-tenant architecture serving 200+ organizations with isolated data and custom configurations.",
    overview:
      "Scalable multi-tenant architecture with data isolation and per-tenant customization.",
    impact: "200+ tenants · 60% cost reduction",
    role: "Architect & Lead Engineer",
    duration: "8 months",
    problem:
      "Single-tenant deployment model required separate infrastructure per client, driving costs up linearly with each new customer.",
    solution:
      "Implemented row-level security with tenant-scoped database schemas, centralized configuration management, and tenant-aware caching to serve 200+ organizations on shared infrastructure.",
    results: [
      "200+ tenants on shared infra",
      "60% infrastructure cost reduction",
      "99.9% SLA maintained",
      "Onboarding reduced to hours",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Terraform"],
  },
];

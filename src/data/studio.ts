import type { Principle } from "@/types";

export const principles: Principle[] = [
  {
    title: "Build around the workflow",
    desc: "The strongest product work starts with how people actually operate: venue staff managing bookings, admins handling credentials, patients moving through care, or analysts validating data.",
  },
  {
    title: "Keep complexity visible",
    desc: "Complex domains need clear state, explicit rules, review steps, audit trails, and safe defaults. I prefer systems that make important decisions easy to inspect.",
  },
  {
    title: "Ship the whole feature",
    desc: "A polished feature is more than UI. It includes APIs, validation, auth, empty states, loading behavior, responsive layouts, emails, deployment, and the edge cases users eventually hit.",
  },
  {
    title: "Use AI where it earns trust",
    desc: "AI features should be grounded in real data, explain their sources where needed, protect risky operations, and keep a human review path for business-critical workflows.",
  },
];

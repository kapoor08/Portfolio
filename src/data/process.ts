import type { ProcessStep } from "@/types";

export const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand the product surface",
    desc: "Start with users, roles, states, permissions, and the business rules that decide how the feature should behave.",
  },
  {
    num: "02",
    title: "Design the data and API flow",
    desc: "Map the frontend states, backend contracts, validation rules, auth boundaries, and third-party integrations before writing the main UI.",
  },
  {
    num: "03",
    title: "Build end to end",
    desc: "Implement the interface, service layer, database changes, integrations, loading states, error paths, and responsive behavior as one complete slice.",
  },
  {
    num: "04",
    title: "Harden for real use",
    desc: "Test important paths, check edge cases, tune performance, document operational details, and make sure the feature can be supported after release.",
  },
];

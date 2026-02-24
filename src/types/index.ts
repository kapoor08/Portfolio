export interface Project {
  num: string;
  title: string;
  description: string;
  overview: string;
  impact: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface ToolCategory {
  label: string;
  note: string;
  tools: string[];
}

export interface Principle {
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

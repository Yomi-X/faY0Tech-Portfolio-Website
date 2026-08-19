import type { Service } from "./services";

export type ProjectStatus = "planned" | "in-progress" | "completed" | "archived";

export interface Project {
  name: string;
  description: string;
  services: Service["name"][];
  status: ProjectStatus;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "A public-facing website foundation for showcasing services, selected work, and contact options.",
    services: ["Web Development", "Digital Presence", "SEO / Search Visibility"],
    status: "in-progress",
  },
  {
    name: "Local Business Digital Setup",
    description:
      "A placeholder project for organizing a small business web presence, profiles, and inquiry flow.",
    services: [
      "Digital Presence",
      "Business Systems / Integrations",
      "Social Media Management",
    ],
    status: "planned",
  },
  {
    name: "Automation Workflow Starter",
    description:
      "A placeholder project for documenting repeatable task automation and lightweight tool integrations.",
    services: ["AI Automation", "Business Systems / Integrations"],
    status: "planned",
  },
  {
    name: "Campaign Landing Page",
    description:
      "A placeholder project for a focused landing page supporting a campaign or promotional offer.",
    services: ["Advertising / Campaigns", "Web Development", "SEO / Search Visibility"],
    status: "planned",
  },
];

export default projects;

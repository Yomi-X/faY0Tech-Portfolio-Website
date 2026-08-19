export interface Service {
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Responsive, maintainable websites and web experiences built around business goals.",
  },
  {
    name: "Digital Presence",
    description:
      "Brand-aligned online foundations, content structure, and customer touchpoints.",
  },
  {
    name: "Social Media Management",
    description:
      "Planning, publishing, and profile support to keep social channels active and consistent.",
  },
  {
    name: "Advertising / Campaigns",
    description:
      "Campaign setup and creative direction for promotions, launches, and audience growth.",
  },
  {
    name: "AI Automation",
    description:
      "Practical automation workflows that reduce repetitive tasks and improve response times.",
  },
  {
    name: "SEO / Search Visibility",
    description:
      "Search-friendly site structure, content support, and technical visibility improvements.",
  },
  {
    name: "Business Systems / Integrations",
    description:
      "Connected tools, forms, workflows, and integrations that help business operations run smoothly.",
  },
];

export default services;
export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [];

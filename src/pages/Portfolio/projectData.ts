import lenoirImage from "@/projects/Lenoir/assets/maison-lenoir-hero.jpg";

export type PortfolioProject = {
  id: "vanta" | "lenoir" | "martin";
  category: string;
  title: string;
  description: string;
  href: string;
  status: string;
  visual: "vanta" | "lenoir" | "martin";
  image?: string;
  highlights: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "vanta",
    category: "AI infrastructure",
    title: "VANTA",
    description:
      "A dark, systems-focused concept exploring how an AI infrastructure product can explain automation across tools and workflows.",
    href: "/vanta",
    status: "Concept project",
    visual: "vanta",
    highlights: ["Workflow automation", "Systems interface", "Technical clarity"],
  },
  {
    id: "lenoir",
    category: "Artisan bakery",
    title: "Maison Lenoir",
    description:
      "A warm editorial bakery concept built around products, neighbourhood discovery and clear paths to visit or make a request.",
    href: "/lenoir",
    status: "Concept project",
    visual: "lenoir",
    image: lenoirImage,
    highlights: ["Editorial direction", "Product discovery", "Local experience"],
  },
  {
    id: "martin",
    category: "Home services",
    title: "Atelier Martin",
    description:
      "A practical service website concept that explains everyday home jobs, clarifies the process and guides visitors to a request.",
    href: "/martin",
    status: "Concept project",
    visual: "martin",
    highlights: ["Service clarity", "Request flow", "Accessible interaction"],
  },
];


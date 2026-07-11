import {
  MessageCircleQuestion,
  MousePointerClick,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export const problemIntro = {
  heading: "Your website should work for your business",
  description:
    "A professional website is more than how it looks. It should help customers understand what you offer, trust your business, and contact you when they are ready.",
};

export type ProblemItemData = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const problemItems: ProblemItemData[] = [
  {
    icon: MousePointerClick,
    title: "Visitors arrive, but nothing converts",
    description:
      "People find your website, yet leave without understanding your offer or getting in touch.",
  },
  {
    icon: Repeat,
    title: "Important information is hard to find",
    description:
      "Customers struggle to navigate your services, pricing, or proof that they can trust you.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Contact feels uncertain or delayed",
    description:
      "When reaching you takes effort, potential clients move on before the conversation starts.",
  },
];

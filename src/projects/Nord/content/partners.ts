export type Partner = {
  name: string;
  category: string;
  description: string;
  website: string;
};

export const partners: Partner[] = [
  {
    name: "Atelier Forma",
    category: "Furniture",
    description:
      "An independent furniture studio focused on solid timber pieces and small-batch production.",
    website: "/portfolio/atelier-forma",
  },

  {
    name: "Morrow Objects",
    category: "Objects & Lighting",
    description:
      "A Copenhagen-based objects studio creating lighting and functional pieces for residential interiors.",
    website: "/portfolio/morrow",
  },

  {
    name: "Sora House",
    category: "Textiles",
    description:
      "A small textile studio working with natural fibres, woven surfaces and custom fabrics.",
    website: "/portfolio/sora-house",
  },

  {
    name: "Nordic Material Library",
    category: "Materials",
    description:
      "A curated material resource for stone, timber, textiles and architectural finishes.",
    website: "/portfolio/nordic-material-library",
  },
];
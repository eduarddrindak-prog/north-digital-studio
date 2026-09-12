export type Service = {
  number: string;
  title: string;
  description: string;
  scope: string[];
  timeline: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Interior Design",

    description:
      "Complete interior design for residential, hospitality and small commercial spaces, from the first spatial study to the final details.",

    scope: [
      "Spatial planning",
      "Material direction",
      "Furniture selection",
      "Lighting",
      "Custom joinery",
    ],

    timeline: "Typically 10–16 weeks",

    deliverables: [
      "Spatial concept",
      "Material palette",
      "Furniture and lighting specification",
      "Technical drawings",
      "Styling direction",
    ],
  },

  {
    number: "02",
    title: "Renovation",

    description:
      "A considered approach to renovating existing spaces while preserving the qualities that are already worth keeping.",

    scope: [
      "Existing-space analysis",
      "Layout changes",
      "Material specification",
      "Joinery",
      "Contractor coordination",
    ],

    timeline: "Typically 12–24 weeks",

    deliverables: [
      "Renovation concept",
      "Plans and elevations",
      "Material specification",
      "Joinery drawings",
      "Site coordination",
    ],
  },

  {
    number: "03",
    title: "Furniture & Styling",

    description:
      "Furniture, objects and finishing details selected to complete an interior without making it feel over-designed.",

    scope: [
      "Furniture selection",
      "Textiles",
      "Objects",
      "Artwork direction",
      "Final styling",
    ],

    timeline: "Typically 4–8 weeks",

    deliverables: [
      "Furniture proposal",
      "Object selection",
      "Textile palette",
      "Sourcing",
      "Installation direction",
    ],
  },

  {
    number: "04",
    title: "Consultation",

    description:
      "Focused design guidance for clients who already have a project underway but need help with a specific decision or direction.",

    scope: [
      "Material decisions",
      "Layout review",
      "Furniture advice",
      "Colour direction",
      "Design review",
    ],

    timeline: "Single session or short engagement",

    deliverables: [
      "Written recommendations",
      "Material references",
      "Layout suggestions",
      "Furniture direction",
    ],
  },
];
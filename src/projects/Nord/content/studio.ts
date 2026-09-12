export type StudioPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type StudioProcess = {
  number: string;
  title: string;
  description: string;
};

export const principles: StudioPrinciple[] = [
  {
    number: "01",
    title: "Context",
    description:
      "Every project begins with its place. We look at architecture, surroundings, light and the way a space is already lived in.",
  },
  {
    number: "02",
    title: "Material",
    description:
      "We work with a restrained palette of natural materials, chosen for their character, texture and ability to age with the space.",
  },
  {
    number: "03",
    title: "Light",
    description:
      "Natural light is treated as part of the architecture, shaping atmosphere, rhythm and the way materials are experienced throughout the day.",
  },
  {
    number: "04",
    title: "Function",
    description:
      "A considered interior should work quietly in everyday life. Every proportion, object and detail has a reason to be there.",
  },
];

export const process: StudioProcess[] = [
  {
    number: "01",
    title: "Listen",
    description:
      "We begin by understanding the place, the people and the way the space needs to work.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish the direction through proportion, material, light and the character of the existing architecture.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The initial idea becomes a considered system of drawings, details, materials and spatial decisions.",
  },
  {
    number: "04",
    title: "Realise",
    description:
      "We carry the design through to the finished space, keeping the original idea present in every important detail.",
  },
];
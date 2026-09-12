export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  cover: string;
  relatedProjects: string[];
};

export const journal: JournalArticle[] = [
  {
    slug: "working-with-natural-stone",
    title: "Working with natural stone",
    category: "Materials",
    date: "12.06.2026",

    excerpt:
      "Why we keep returning to stone as a quiet architectural material, and how small variations in texture can change a room.",

    content: [
      "Natural stone has a way of making an interior feel grounded without demanding attention. We often use it as a counterpoint to warmer materials such as oak and linen.",
      "Rather than treating stone as a feature, we prefer to let its texture and variation become part of the overall atmosphere. Small differences in tone, edge and surface can be more important than choosing a particular statement material.",
      "In the Østerbro Apartment, limestone was used across the kitchen and selected surfaces. Its slightly irregular character works alongside the oak joinery and softer textiles, creating contrast without becoming visually dominant.",
    ],

    cover: "/projects/nord/journal-natural-stone.jpg",

    relatedProjects: [
      "osterbro-apartment",
      "norrebro-residence",
    ],
  },

  {
    slug: "quieter-residential-spaces",
    title: "A quieter approach to residential spaces",
    category: "Interiors",
    date: "28.05.2026",

    excerpt:
      "Residential interiors do not need more objects. Sometimes the most useful intervention is simply removing what is unnecessary.",

    content: [
      "A home has to accommodate a changing rhythm of everyday life. For us, that means creating spaces that can adapt without requiring constant rearrangement.",
      "Storage, lighting and circulation are often more important than decoration. When these elements are considered early, the final interior can remain relatively simple while still supporting everything that happens within it.",
      "This approach shaped both the Østerbro Apartment and Nordhavn House, where built-in elements allowed the rooms to remain open and visually calm.",
    ],

    cover: "/projects/nord/journal-quieter-spaces.jpg",

    relatedProjects: [
      "osterbro-apartment",
      "nordhavn-house",
    ],
  },

  {
    slug: "oak-limestone-and-balance",
    title: "Oak, limestone and balance of texture",
    category: "Materials",
    date: "14.05.2026",

    excerpt:
      "A look at one of the material combinations we return to most often and why the relationship between surfaces matters more than individual finishes.",

    content: [
      "Oak and limestone work well together because they occupy different places within an interior. Oak introduces warmth and visual continuity, while stone provides weight and a cooler tactile quality.",
      "The balance comes from allowing neither material to dominate. We often use oak for built-in elements and furniture while keeping stone to selected surfaces where its texture can be experienced directly.",
      "The same principle appears in our smaller residential projects, where a limited material palette helps different rooms feel connected rather than individually decorated.",
    ],

    cover: "/projects/nord/journal-oak-limestone.jpg",

    relatedProjects: [
      "osterbro-apartment",
      "norrebro-residence",
    ],
  },

  {
    slug: "house-in-copenhagen-project-notes",
    title: "House in Copenhagen — project notes",
    category: "Projects",
    date: "30.04.2026",

    excerpt:
      "Notes from the renovation of a Copenhagen family home and the decisions that shaped its shared spaces.",

    content: [
      "The starting point for Nordhavn House was a sequence of rooms that felt disconnected from one another. The family wanted more openness, but not one large undifferentiated space.",
      "We focused on the relationship between the kitchen, dining area and living room. Changes to circulation were kept relatively simple, allowing the original character of the house to remain visible.",
      "The final material palette is intentionally restrained. Oak, stone and textiles provide enough variation to give the rooms character while keeping the architecture in focus.",
    ],

    cover: "/projects/nord/journal-nordhavn-house.jpg",

    relatedProjects: [
      "nordhavn-house",
    ],
  },

  {
    slug: "designing-smaller-spaces",
    title: "Designing smaller spaces",
    category: "Approach",
    date: "09.04.2026",

    excerpt:
      "Working with a smaller footprint often means making fewer decisions, but making each one more carefully.",

    content: [
      "Small spaces benefit from clarity. Instead of trying to make every corner perform a different function, we look for ways that one element can support several parts of everyday life.",
      "Built-in storage can become architecture. A dining table can define a transition between rooms. A piece of furniture can separate spaces without closing them off.",
      "Our Nørrebro Residence concept explores this approach through flexible furniture, integrated storage and a limited palette of materials.",
    ],

    cover: "/projects/nord/journal-smaller-spaces.jpg",

    relatedProjects: [
      "norrebro-residence",
    ],
  },

  {
    slug: "five-materials-we-return-to",
    title: "Five materials we keep returning to",
    category: "Materials",
    date: "21.03.2026",

    excerpt:
      "Oak, limestone, steel, linen and plaster form a recurring material vocabulary across many of our projects.",

    content: [
      "Materials establish the atmosphere of a space before furniture and objects are introduced. For that reason, we tend to work with a relatively small group of materials that can be combined in different ways.",
      "Oak provides warmth and continuity. Limestone introduces texture and weight. Steel adds precision, while linen and wool soften the harder architectural surfaces.",
      "The fifth material is often the existing architecture itself. Preserving an original floor, wall or structural element can give a new interior more character than introducing another finish.",
    ],

    cover: "/projects/nord/journal-five-materials.jpg",

    relatedProjects: [
      "moller-studio",
      "skagen-retreat",
      "atelier-nordhavn",
    ],
  },
];
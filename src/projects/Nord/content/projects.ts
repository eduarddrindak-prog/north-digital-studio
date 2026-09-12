export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hospitality";

export type ProjectStatus =
  | "Completed"
  | "Ongoing"
  | "Concept";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  year: number;
  area: string;

  description: string;
  overview: string;
  approach: string;

  materials: string[];

  images: string[];
};

export const projects: Project[] = [
  {
    slug: "osterbro-apartment",
    number: "01",
    title: "Østerbro Apartment",
    category: "Residential",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2025,
    area: "118 m²",

    description:
      "A calm Copenhagen apartment built around natural light, warm oak and restrained material contrasts.",

    overview:
      "The apartment was reorganised around a more open relationship between the kitchen, dining area and living room. Existing architectural details were retained wherever possible, while new elements were introduced with a deliberately quiet material language.",

    approach:
      "We reduced unnecessary divisions and allowed the original proportions of the apartment to guide the intervention. Oak joinery, limestone surfaces and soft textiles create a warm base without competing with the architecture.",

    materials: [
      "Natural oak",
      "Limestone",
      "Linen",
      "Brushed steel",
      "Painted plaster",
    ],

    images: [
      "/projects/nord/images/osterbro-apartment/01.jpg",
      "/projects/nord/images/osterbro-apartment/02.jpg",
      "/projects/nord/images/osterbro-apartment/03.jpg",
    ],
  },

  {
    slug: "nordhavn-house",
    number: "02",
    title: "Nordhavn House",
    category: "Residential",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2024,
    area: "164 m²",

    description:
      "A family home where a restrained palette creates space for everyday life, light and changing seasons.",

    overview:
      "The project involved the renovation of a compact family house near the harbour. The brief was to create a stronger connection between the shared spaces while keeping the atmosphere informal and practical.",

    approach:
      "Rather than introducing a large number of new finishes, we worked with a small palette of oak, stone, textile and painted surfaces. Built-in storage was integrated into the architecture to keep the rooms visually quiet.",

    materials: [
      "White oak",
      "Travertine",
      "Wool",
      "Oak veneer",
      "Limewash",
    ],

    images: [
      "/projects/nord/images/nordhavn-house/01.jpg",
      "/projects/nord/images/nordhavn-house/02.jpg",
      "/projects/nord/images/nordhavn-house/03.jpg",
    ],
  },

  {
    slug: "moller-studio",
    number: "03",
    title: "Møller Studio",
    category: "Commercial",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2025,
    area: "86 m²",

    description:
      "A small creative studio designed to support focused work, informal meetings and moments of pause.",

    overview:
      "The existing office was divided into several small rooms with limited daylight. The renovation opened the central workspace while retaining a quieter room for meetings and concentrated work.",

    approach:
      "The interior uses furniture and storage as architectural elements. A continuous oak wall provides workspace, shelving and concealed storage, allowing the rest of the room to remain deliberately open.",

    materials: [
      "Oak",
      "Powder-coated steel",
      "Wool",
      "Glass",
      "Mineral paint",
    ],

    images: [
      "/projects/nord/images/moller-studio/01.jpg",
      "/projects/nord/images/moller-studio/02.jpg",
      "/projects/nord/images/moller-studio/03.jpg",
    ],
  },

  {
    slug: "skagen-retreat",
    number: "04",
    title: "Skagen Retreat",
    category: "Hospitality",
    status: "Ongoing",
    location: "Skagen, Denmark",
    year: 2026,
    area: "312 m²",

    description:
      "A coastal retreat shaped by pale timber, stone and the changing light of the northern landscape.",

    overview:
      "The project transforms an existing coastal property into a small private retreat. The interiors are designed to feel connected to the surrounding landscape rather than separated from it.",

    approach:
      "We are working with a deliberately limited palette and a mixture of existing and newly commissioned furniture. Large openings remain visually unobstructed, while textured materials add warmth throughout the quieter rooms.",

    materials: [
      "Oak",
      "Local stone",
      "Linen",
      "Wool",
      "Brushed brass",
    ],

    images: [
      "/projects/nord/images/skagen-retreat/01.jpg",
      "/projects/nord/images/skagen-retreat/02.jpg",
      "/projects/nord/images/skagen-retreat/03.jpg",
    ],
  },

  {
    slug: "norrebro-residence",
    number: "05",
    title: "Nørrebro Residence",
    category: "Residential",
    status: "Concept",
    location: "Copenhagen, Denmark",
    year: 2026,
    area: "92 m²",

    description:
      "A compact apartment concept focused on flexible rooms, integrated storage and tactile materials.",

    overview:
      "The concept explores how a relatively small apartment can support different patterns of everyday life without becoming visually complicated.",

    approach:
      "Instead of assigning every room a single function, the plan uses movable furniture, built-in elements and subtle transitions between materials to create flexibility.",

    materials: [
      "Oak",
      "Limestone",
      "Textured plaster",
      "Linen",
      "Stainless steel",
    ],

    images: [
      "/projects/nord/images/norrebro-residence/01.jpg",
      "/projects/nord/images/norrebro-residence/02.jpg",
      "/projects/nord/images/norrebro-residence/03.jpg",
    ],
  },

  {
    slug: "atelier-nordhavn",
    number: "06",
    title: "Atelier Nordhavn",
    category: "Commercial",
    status: "Ongoing",
    location: "Copenhagen, Denmark",
    year: 2026,
    area: "142 m²",

    description:
      "A flexible showroom and workshop combining working space with a quiet material library.",

    overview:
      "Atelier Nordhavn is conceived as a working showroom for a small furniture and objects brand. The space needs to accommodate presentations, production meetings and everyday studio work.",

    approach:
      "The interior is organised around a central material library. Movable display elements allow the space to change throughout the day while maintaining a consistent architectural background.",

    materials: [
      "Ash",
      "Concrete",
      "Steel",
      "Canvas",
      "Natural stone",
    ],

    images: [
      "/projects/nord/images/atelier-nordhavn/01.jpg",
      "/projects/nord/images/atelier-nordhavn/02.jpg",
      "/projects/nord/images/atelier-nordhavn/03.jpg",
    ],
  },

  {
    slug: "frederiksberg-courtyard",
    number: "07",
    title: "Frederiksberg Courtyard",
    category: "Residential",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2024,
    area: "136 m²",

    description:
      "A light-filled apartment renovation centred around a quiet courtyard and a continuous timber interior.",

    overview:
      "The renovation reconnects the main living spaces with the apartment's central courtyard. Several smaller rooms were reorganised to improve daylight and circulation throughout the home.",

    approach:
      "A restrained palette of oak, stone and plaster creates continuity between rooms. Custom joinery follows the existing architecture and provides storage without visually dividing the space.",

    materials: [
      "European oak",
      "Travertine",
      "Linen",
      "Plaster",
      "Bronze",
    ],

    images: [
      "/projects/nord/images/frederiksberg-courtyard/01.jpg",
      "/projects/nord/images/frederiksberg-courtyard/02.jpg",
      "/projects/nord/images/frederiksberg-courtyard/03.jpg",
    ],
  },

  {
    slug: "vesterbro-loft",
    number: "08",
    title: "Vesterbro Loft",
    category: "Residential",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2025,
    area: "104 m²",

    description:
      "An open loft apartment balancing original industrial details with softer domestic elements.",

    overview:
      "The project retains the structural character of an early twentieth-century building while introducing a more flexible plan for contemporary living.",

    approach:
      "Existing brickwork and timber elements were preserved alongside new oak cabinetry and soft textiles. Furniture defines different zones without creating hard divisions.",

    materials: [
      "Oak",
      "Exposed brick",
      "Wool",
      "Stainless steel",
      "Natural stone",
    ],

    images: [
      "/projects/nord/images/vesterbro-loft/01.jpg",
      "/projects/nord/images/vesterbro-loft/02.jpg",
      "/projects/nord/images/vesterbro-loft/03.jpg",
    ],
  },

  {
    slug: "paper-house-office",
    number: "09",
    title: "Paper House Office",
    category: "Commercial",
    status: "Completed",
    location: "Copenhagen, Denmark",
    year: 2025,
    area: "128 m²",

    description:
      "A compact office designed around focused work, shared meals and informal collaboration.",

    overview:
      "The office was reorganised into a sequence of open and enclosed spaces. A central communal area acts as the social heart of the workplace.",

    approach:
      "Furniture, shelving and lighting were treated as one continuous layer. The neutral architectural background allows the changing activity of the studio to define the atmosphere.",

    materials: [
      "Ash",
      "Linoleum",
      "Wool",
      "Glass",
      "Painted plaster",
    ],

    images: [
      "/projects/nord/images/paper-house-office/01.jpg",
      "/projects/nord/images/paper-house-office/02.jpg",
      "/projects/nord/images/paper-house-office/03.jpg",
    ],
  },

  {
    slug: "strand-workspace",
    number: "10",
    title: "Strand Workspace",
    category: "Commercial",
    status: "Ongoing",
    location: "Copenhagen, Denmark",
    year: 2026,
    area: "176 m²",

    description:
      "A flexible creative workspace where natural materials and generous circulation create a calm working environment.",

    overview:
      "The project converts an existing industrial floor into a flexible studio for a growing creative team. The brief called for spaces that could change as the team evolves.",

    approach:
      "We organised the plan around a generous central workspace with smaller rooms positioned along the perimeter. A consistent material palette keeps the different functions visually connected.",

    materials: [
      "Oak",
      "Concrete",
      "Canvas",
      "Wool",
      "Brushed aluminium",
    ],

    images: [
      "/projects/nord/images/strand-workspace/01.jpg",
      "/projects/nord/images/strand-workspace/02.jpg",
      "/projects/nord/images/strand-workspace/03.jpg",
    ],
  },

  {
    slug: "kyst-gallery",
    number: "11",
    title: "Kyst Gallery",
    category: "Commercial",
    status: "Concept",
    location: "Aarhus, Denmark",
    year: 2026,
    area: "210 m²",

    description:
      "A gallery concept where quiet architecture creates a neutral setting for changing exhibitions.",

    overview:
      "The proposal transforms an existing retail space into a small contemporary gallery. The architecture is intentionally restrained so that exhibitions can continually redefine the interior.",

    approach:
      "Walls, lighting and circulation are treated as a single system. A limited palette of plaster, stone and timber gives the space a tactile but unobtrusive character.",

    materials: [
      "Limestone",
      "Oak",
      "Plaster",
      "Steel",
      "Wool",
    ],

    images: [
      "/projects/nord/images/kyst-gallery/01.jpg",
      "/projects/nord/images/kyst-gallery/02.jpg",
      "/projects/nord/images/kyst-gallery/03.jpg",
    ],
  },

  {
    slug: "skovgaard-villa",
    number: "12",
    title: "Skovgaard Villa",
    category: "Residential",
    status: "Ongoing",
    location: "Hellerup, Denmark",
    year: 2026,
    area: "248 m²",

    description:
      "A family villa renovation connecting existing architectural character with a quieter contemporary interior.",

    overview:
      "The project focuses on improving the relationship between the original rooms and the garden. Existing proportions and architectural details remain central to the design.",

    approach:
      "New interventions are deliberately simple: timber joinery, stone surfaces and carefully placed lighting create continuity without disguising the character of the house.",

    materials: [
      "Oak",
      "Limestone",
      "Linen",
      "Wool",
      "Natural plaster",
    ],

    images: [
      "/projects/nord/images/skovgaard-villa/01.jpg",
      "/projects/nord/images/skovgaard-villa/02.jpg",
      "/projects/nord/images/skovgaard-villa/03.jpg",
    ],
  },

  {
    slug: "havnebad-hotel",
    number: "13",
    title: "Havnebad Hotel",
    category: "Hospitality",
    status: "Concept",
    location: "Copenhagen, Denmark",
    year: 2026,
    area: "1,420 m²",

    description:
      "A small urban hotel concept inspired by harbour architecture, warm timber and slow everyday rituals.",

    overview:
      "The proposal reimagines a former waterfront office building as a compact hotel with a restaurant, lounge and twenty-four rooms.",

    approach:
      "Guest rooms are kept simple and tactile, while shared spaces use stronger material contrasts. The harbour remains a constant visual reference throughout the building.",

    materials: [
      "Douglas fir",
      "Limestone",
      "Wool",
      "Brushed steel",
      "Ceramic tile",
    ],

    images: [
      "/projects/nord/images/havnebad-hotel/01.jpg",
      "/projects/nord/images/havnebad-hotel/02.jpg",
      "/projects/nord/images/havnebad-hotel/03.jpg",
    ],
  },

  {
    slug: "bornholm-guesthouse",
    number: "14",
    title: "Bornholm Guesthouse",
    category: "Hospitality",
    status: "Completed",
    location: "Bornholm, Denmark",
    year: 2025,
    area: "286 m²",

    description:
      "A quiet guesthouse renovation rooted in local stone, pale timber and the landscape of the island.",

    overview:
      "An existing coastal guesthouse was renovated to create a small collection of rooms and shared spaces with a stronger connection to its surroundings.",

    approach:
      "The intervention uses local materials wherever possible. Furniture is kept understated and the rooms rely on texture, natural light and views rather than decoration.",

    materials: [
      "Bornholm stone",
      "Pine",
      "Linen",
      "Wool",
      "Ceramic",
    ],

    images: [
      "/projects/nord/images/bornholm-guesthouse/01.jpg",
      "/projects/nord/images/bornholm-guesthouse/02.jpg",
      "/projects/nord/images/bornholm-guesthouse/03.jpg",
    ],
  },

  {
    slug: "nordic-courtyard-hotel",
    number: "15",
    title: "Nordic Courtyard Hotel",
    category: "Hospitality",
    status: "Ongoing",
    location: "Aarhus, Denmark",
    year: 2026,
    area: "860 m²",

    description:
      "A compact hotel organised around a planted courtyard and a sequence of quiet communal spaces.",

    overview:
      "The project converts a former commercial building into a small city hotel. A new internal courtyard becomes the organising element for circulation, daylight and shared spaces.",

    approach:
      "The interior combines pale timber, textured plaster and natural stone. Each room remains visually simple, while the courtyard provides the strongest spatial identity.",

    materials: [
      "Ash",
      "Limestone",
      "Textured plaster",
      "Linen",
      "Bronze",
    ],

    images: [
      "/projects/nord/images/nordic-courtyard-hotel/01.jpg",
      "/projects/nord/images/nordic-courtyard-hotel/02.jpg",
      "/projects/nord/images/nordic-courtyard-hotel/03.jpg",
    ],
  },
];
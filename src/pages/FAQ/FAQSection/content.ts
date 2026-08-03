export type FAQCategory =
  | "project"
  | "pricing"
  | "timeline"
  | "support";

export interface FAQItem {
  question: string;
  answer: string;
}

const faqContent = {
  title: "Browse by topic",

  categories: [
    {
      id: "project" as FAQCategory,
      label: "Project",
    },
    {
      id: "pricing" as FAQCategory,
      label: "Pricing",
    },
    {
      id: "timeline" as FAQCategory,
      label: "Timeline",
    },
    {
      id: "support" as FAQCategory,
      label: "Support",
    },
  ],

  questions: {
    project: [
      {
        question: "What information do I need before starting?",
        answer:
          "A short description of your business, your goals and any inspiration is enough to begin.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can redesign outdated websites while improving usability and performance.",
      },
      {
        question: "Do you work with small businesses?",
        answer:
          "Absolutely. Most of our projects are created for small businesses and local brands.",
      },
    ],

    pricing: [
      {
        question: "How much does a website cost?",
        answer:
          "Pricing depends on the scope, features and complexity of the project.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. A deposit is required before development begins.",
      },
      {
        question: "What's included in the price?",
        answer:
          "Design, development, optimization and project delivery are included.",
      },
    ],

    timeline: [
      {
        question: "How long does a project take?",
        answer:
          "Most projects are completed within two to four weeks.",
      },
      {
        question: "Can the timeline change?",
        answer:
          "Large revisions or additional features may extend the timeline.",
      },
      {
        question: "When can we start?",
        answer:
          "Usually within a few days after discussing the project.",
      },
    ],

    support: [
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Support is available after launch if needed.",
      },
      {
        question: "Can I edit the website myself?",
        answer:
          "Yes. The website can be built with an easy-to-manage CMS when required.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We can recommend reliable hosting providers and help with deployment.",
      },
    ],
  },
};

export default faqContent;
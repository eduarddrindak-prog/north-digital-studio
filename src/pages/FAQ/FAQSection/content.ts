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
      {
  question: "Can you help define the project scope?",
  answer:
    "Yes. During the first consultation we'll help define priorities, features and project goals.",
},
{
  question: "Do I need to prepare detailed requirements?",
  answer:
    "No. Even a simple idea or description of your business is enough to start the planning process.",
},
{
  question: "Will I be involved during development?",
  answer:
    "Yes. We keep you informed throughout the project and ask for feedback at every major stage.",
},
{
  question: "Can you create content for my website?",
  answer:
    "We can help structure your content and provide guidance for clear, customer-focused messaging.",
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
      {
  question: "Are there any hidden fees?",
  answer:
    "No. Every project is quoted clearly before work begins.",
},
{
  question: "Can I add new features later?",
  answer:
    "Yes. Additional functionality can be added after launch whenever your business grows.",
},
{
  question: "Do you offer custom pricing?",
  answer:
    "Yes. Every project is tailored to your business goals and requirements.",
},
{
  question: "Which payment methods do you accept?",
  answer:
    "Bank transfers are preferred. Other payment options can be discussed if necessary.",
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
      {
  question: "What affects the project timeline?",
  answer:
    "The number of pages, custom features and revision speed all influence delivery time.",
},
{
  question: "Can the project be completed faster?",
  answer:
    "For smaller websites an accelerated schedule may be possible depending on availability.",
},
{
  question: "Will I receive progress updates?",
  answer:
    "Yes. You'll receive regular updates during every important stage of the project.",
},
{
  question: "When is the website ready to launch?",
  answer:
    "After final approval, testing and optimization across modern devices and browsers.",
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
      {
  question: "Can you update my website later?",
  answer:
    "Yes. New pages, features and improvements can be added whenever needed.",
},
{
  question: "Do you fix bugs after launch?",
  answer:
    "Yes. We provide post-launch support to resolve any issues discovered after release.",
},
{
  question: "Can you improve website performance?",
  answer:
    "Yes. Performance optimization is available both during development and after launch.",
},
{
  question: "Can you help move my website to a new host?",
  answer:
    "Yes. We can assist with website migration and deployment to a new hosting provider.",
},
    ],
  },
};

export default faqContent;
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import { fadeLeft, fadeRight } from "@/lib/animations";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals and audience to create a clear foundation for the entire project.",
    items: [
      "Business Analysis",
      "Target Audience",
      "Competitor Research",
      "Project Goals",
    ],
    duration: "1–3 Days",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on research, we define the project structure, user flow and technical roadmap.",
    items: [
      "Site Architecture",
      "User Flow",
      "Wireframes",
      "Technical Planning",
    ],
    duration: "2–4 Days",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design a modern interface that reflects your brand and delivers an outstanding user experience.",
    items: [
      "UI Design",
      "UX Refinement",
      "Interactive Prototype",
      "Client Review",
    ],
    duration: "3–7 Days",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our developers transform the approved design into a fast, scalable and responsive website.",
    items: [
      "Frontend Development",
      "Backend Integration",
      "Animations",
      "Optimization",
    ],
    duration: "5–14 Days",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After final testing we deploy your project and ensure everything runs smoothly from day one.",
    items: [
      "Quality Assurance",
      "Deployment",
      "Performance Check",
      "Support",
    ],
    duration: "1 Day",
  },
];



export default function DevelopmentProcess() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStep = processSteps[activeIndex];
  return (
    <section className="py-section bg-background">
      <SectionContainer className="max-w-[1500px]">
        <motion.div
  {...fadeLeft}
  className="mx-auto mb-24 mt-8 max-w-4xl text-center"
>
  <p className="text-sm uppercase tracking-[0.3em] text-[#4F8EF7]">
    Our Process
  </p>

  <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
    From idea
    <br />
    to launch.
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-secondary-text">
    Every project follows a transparent workflow, keeping you involved from the
    first conversation to the final launch.
  </p>
</motion.div>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <motion.div {...fadeLeft}>
            <AnimatePresence mode="wait">
            
            <motion.div
            key={activeStep.number}
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -15 }}
  transition={{ duration: 0.25 }}
  className="
    mt-0
    flex
    h-[560px]
    flex-col
    rounded-[36px]
    border border-white/10
    bg-white/[0.02]
    backdrop-blur-sm
    p-10
    shadow-[0_30px_80px_rgba(0,0,0,.35)]
  "
>
  <span className="text-7xl font-semibold text-[#4F8EF7]">
    {activeStep.number}
  </span>

  <h3 className="mt-4 text-4xl font-semibold">
    {activeStep.title}
  </h3>

  <p className="mt-6 max-w-xl text-lg leading-8 text-secondary-text">
    {activeStep.description}
  </p>

  <div className="mt-10 space-y-5">
    {activeStep.items.map((item) => (
      <div
        key={item}
        className="flex items-center gap-4"
      >
        <div className="h-2 w-2 rounded-full bg-[#4F8EF7]" />

        <span className="text-lg">
          {item}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-4 flex items-end justify-between border-t border-white/8 pt-8">
    <span className="text-secondary-text">
      Estimated Time
    </span>

    <span className="text-xl font-semibold">
      {activeStep.duration}
    </span>
  </div>
  
</motion.div>
</AnimatePresence>
          </motion.div>

          <motion.div
          
            {...fadeRight}
            className="flex flex-col"
          >
            {processSteps.map((step, index) => (
              <button
                key={step.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
group
flex
items-center
gap-6
border-b
border-white/8
py-8
px-6
text-left
transition-all
duration-300
rounded-2xl
hover:translate-x-2
${
  activeIndex === index
    ? "bg-[#4F8EF7]/8"
    : "hover:bg-[#4F8EF7]/5"
}
`}
              >
                <span
  className={`
text-5xl
font-semibold
transition-colors
${
  activeIndex === index
    ? "text-[#4F8EF7]"
    : "text-white/20 group-hover:text-[#4F8EF7]"
}
`}
>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
  className={`
text-2xl
font-medium
transition-colors
${
  activeIndex === index
    ? "text-[#4F8EF7]"
    : "text-white group-hover:text-[#4F8EF7]"
}
`}
>
  {step.title}
</span>
              </button>
            ))}
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
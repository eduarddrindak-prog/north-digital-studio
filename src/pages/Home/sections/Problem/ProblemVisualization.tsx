import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    subtitle: "Your Offer",
  },
  {
    title: "Trust",
    subtitle: "Proof & Reviews",
  },
  {
    title: "Contact",
    subtitle: "Clear CTA",
  },
];

export default function ProblemVisualization() {
  return (
    <div className="hidden min-[780px]:block rounded-3xl border border-white/10 p-10">
      <div className="mx-auto max-w-5xl">

        <div
  className="
    hidden
    min-[780px]:grid
    relative
    grid-cols-3
    gap-16
  "
>

  {/* Общая линия */}
  <div
  className="absolute top-5 h-px bg-border"
  style={{
    left: "calc(16.666% )",
    right: "calc(16.666% )",
  }}
/>

  <motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{
    duration: 2,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-5
    h-px
    origin-left
    bg-[#4F8EF7]
  "
  style={{
    left: "calc(16.666% )",
    right: "calc(16.666% )",
  }}
/>

  {steps.map((step, index) => (
    <div
      key={step.title}
      className="flex flex-col items-center"
    >
      {/* Circle */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: index * 0.5,
        }}
        className="
          relative
          z-10
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[#4F8EF7]
          shadow-[0_0_24px_rgba(79,142,247,0.35)]
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </motion.div>

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: index * 0.5 + 0.2,
        }}
        className="
          group
          mt-8
          w-full
          rounded-2xl
          border
          border-border
          bg-background
          p-6
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#4F8EF7]/60
          hover:bg-[#4F8EF7]/5
        "
      >
        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#4F8EF7]">
          {step.title}
        </h3>

        <p className="mt-2 text-sm text-secondary-text">
          {step.subtitle}
        </p>
      </motion.div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
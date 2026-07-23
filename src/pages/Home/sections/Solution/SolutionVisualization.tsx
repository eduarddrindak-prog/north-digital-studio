import { motion } from "framer-motion";

const steps = [
  {
    title: "Business",
    description: "Goals & services",
  },
  {
    title: "Strategy",
    description: "Clear structure",
  },
  {
    title: "Website",
    description: "Professional experience",
  },
  {
    title: "Customers",
    description: "More enquiries",
  },
];

export default function SolutionVisualization() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-lg
        border
        border-border
        bg-surface
        h-[340px]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative flex h-full items-center justify-center px-16">

        <div className="flex w-full items-center justify-center gap-8">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15,
                }}
                className="
                  relative
                  w-[170px]
                  rounded-xl
                  border
                  border-border
                  bg-background/70
                  px-6
                  py-7
                  text-center
                "
              >
                <div className="mb-4 flex justify-center">
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#4F8EF7]/30
                      bg-[#4F8EF7]/10
                      text-xs
                      text-[#4F8EF7]
                    "
                  >
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-primary-text">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-secondary-text">
                  {step.description}
                </p>
              </motion.div>

              {index !== steps.length - 1 && (
                <div className="mx-3 hidden lg:flex items-center">

                  <div className="h-px w-6 bg-white/10" />

                  <div className="mx-2 h-2 w-2 rounded-full bg-[#4F8EF7]/70" />

                  <div className="h-px w-10 bg-white/10" />

                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}